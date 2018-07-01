import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import {
    Container, Header, Left, Body, Title, Right, Text, View, Content, Button,
    Card, CardItem, Radio, Toast, ActionSheet, Root
} from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { back } from '../partials/icons'
import Style from '../style'
import Bar from '../partials/bar'

const data = 
    {
        "id": 1,
        "questions": [
            {
                "id": 7,
                "question_text": "___________ is the loss of electrons from a substance",
                "answer_set": [
                    {
                        "id": 25,
                        "answer_text": "Neutron",
                        "correct": false,
                        "question": 7
                    },
                    {
                        "id": 26,
                        "answer_text": "Electron",
                        "correct": false,
                        "question": 7
                    },
                    {
                        "id": 27,
                        "answer_text": "Reduction",
                        "correct": false,
                        "question": 7
                    },
                    {
                        "id": 28,
                        "answer_text": "Oxidation",
                        "correct": true,
                        "question": 7
                    }
                ]
            },
            {
                "id": 8,
                "question_text": "The ____________ are neither electropositive nor electronegative",
                "answer_set": [
                    {
                        "id": 29,
                        "answer_text": "Noble gases",
                        "correct": false,
                        "question": 8
                    },
                    {
                        "id": 30,
                        "answer_text": "Non-Metals",
                        "correct": false,
                        "question": 8
                    },
                    {
                        "id": 31,
                        "answer_text": "Metals",
                        "correct": true,
                        "question": 8
                    },
                    {
                        "id": 32,
                        "answer_text": "Golds",
                        "correct": false,
                        "question": 8
                    }
                ]
            },
            {
                "id": 10,
                "question_text": "An isotope contains 47 protons, 47 electrons, and 60 neutrons.",
                "answer_set": [
                    {
                        "id": 37,
                        "answer_text": "107 Ag",
                        "correct": true,
                        "question": 10
                    },
                    {
                        "id": 38,
                        "answer_text": "94 Nd",
                        "correct": false,
                        "question": 10
                    },
                    {
                        "id": 39,
                        "answer_text": "107 Nd",
                        "correct": false,
                        "question": 10
                    },
                    {
                        "id": 40,
                        "answer_text": "94 Ag",
                        "correct": false,
                        "question": 10
                    }
                ]
            },
            {
                "id": 12,
                "question_text": "What is the systematic name of the following compound?",
                "answer_set": [
                    {
                        "id": 45,
                        "answer_text": "Potassium bromide",
                        "correct": true,
                        "question": 12
                    },
                    {
                        "id": 46,
                        "answer_text": "Krypton(I) bromide",
                        "correct": false,
                        "question": 12
                    },
                    {
                        "id": 47,
                        "answer_text": "Potassium(I) bromide",
                        "correct": false,
                        "question": 12
                    },
                    {
                        "id": 48,
                        "answer_text": "Krypton bromide",
                        "correct": false,
                        "question": 12
                    }
                ]
            },
            {
                "id": 13,
                "question_text": "What is the formula of magnesium hydroxide?",
                "answer_set": [
                    {
                        "id": 49,
                        "answer_text": "MgH2",
                        "correct": false,
                        "question": 13
                    },
                    {
                        "id": 50,
                        "answer_text": "MgOH",
                        "correct": false,
                        "question": 13
                    },
                    {
                        "id": 51,
                        "answer_text": "MgOH2",
                        "correct": false,
                        "question": 13
                    },
                    {
                        "id": 52,
                        "answer_text": "Mg(OH)2",
                        "correct": true,
                        "question": 13
                    }
                ]
            }
        ],
        "title": "Tournament 1",
        "start_time": "2018-06-30T22:05:38.646866Z",
        "duration": 30
    }

export default class Answer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questions: [],
            selected1: '',
            selected2: '',
            selected3: '',
            selected4: '',
            selected5: '',
            showToast: false
        }
    }

    _submitAnswer = async() => {
        const {
            selected1, selected2, selected3, selected4, selected5
        } = this.state

        try{
            await fetch('http://mastery-dev.ap-southeast-1.elasticbeanstalk.com/api/tournaments/1/answer/', {
                    method: 'POST',
                    body: JSON.stringify({
                        questions: [7,8,9,10,11],
                        answers: [selected1, selected2, selected3, selected4, selected5]
                    }),
                    headers: {
                        'Cache-Control': 'no-cache',
                        'content-type': 'application/json'
                    }
                })
                .then((resp) => resp.json())
                .then((respjson) => {
                    const score = respjson.score

                    Toast.show({
                        text: `You've got ${score} questions right!`,
                        buttonText: 'OK',
                        duration: 3000,
                        position: 'bottom',
                    })
                })
                .catch(err => console.log(err))
        } catch(err) {
            console.log(err)
        }
    }

    componentWillUnmount() {
        Toast.toastInstance = null
        ActionSheet.actionsheetInstance = null
    }

    render(){
        return(
        <Root>
            <Container>
                <ImageBackground source={require('../../assets/back.png')} style={Style.flex1}>
                    <Header noShadow transparent>
                        <Left style={Style.flex1}>
                            <Button transparent
                                onPress={() => this.props.navigation.goBack()}>
                                <Ionicons name={back} size={27} color="#fff" />
                            </Button>
                        </Left>
                        <Body style={Style.flexCenter}>
                            <Title style={Style.title}>Mastery</Title>
                        </Body>
                        <Right style={Style.flex1} />
                    </Header>
                    <Bar />
                    <Content padder style={Style.flex1}>
                        {/*  */}
                        <Card>
                            <CardItem style={Style.backGreen}>
                                <Text style={Style.ques}>Q.    {data.questions[0].question_text}</Text>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[0].answer_set[0].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected1 === data.questions[0].answer_set[0].id ? true : false}
                                        onPress={() => this.setState({ selected1: data.questions[0].answer_set[0].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[0].answer_set[1].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected1 === data.questions[0].answer_set[1].id ? true : false}
                                        onPress={() => this.setState({ selected1: data.questions[0].answer_set[1].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[0].answer_set[2].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected1 === data.questions[0].answer_set[2].id ? true : false}
                                        onPress={() => this.setState({ selected1: data.questions[0].answer_set[2].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[0].answer_set[3].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected1 === data.questions[0].answer_set[3].id ? true : false}
                                        onPress={() => this.setState({ selected1: data.questions[0].answer_set[3].id })}
                                    />
                                </Right>
                            </CardItem>
                        </Card>
                        {/*  */}
                        {/*  */}
                        <Card>
                            <CardItem style={Style.backGreen}>
                                <Text style={Style.ques}>Q.    {data.questions[1].question_text}</Text>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[1].answer_set[0].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected2 === data.questions[1].answer_set[0].id ? true : false}
                                        onPress={() => this.setState({ selected2: data.questions[1].answer_set[0].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[1].answer_set[1].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected2 === data.questions[1].answer_set[1].id ? true : false}
                                        onPress={() => this.setState({ selected2: data.questions[1].answer_set[1].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[1].answer_set[2].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected2 === data.questions[1].answer_set[2].id ? true : false}
                                        onPress={() => this.setState({ selected2: data.questions[1].answer_set[2].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[1].answer_set[3].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected2 === data.questions[1].answer_set[3].id ? true : false}
                                        onPress={() => this.setState({ selected2: data.questions[1].answer_set[3].id })}
                                    />
                                </Right>
                            </CardItem>
                        </Card>
                        {/*  */}
                        {/*  */}
                        <Card>
                            <CardItem style={Style.backGreen}>
                                <Text style={Style.ques}>Q.    {data.questions[2].question_text}</Text>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[2].answer_set[0].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected3 === data.questions[2].answer_set[0].id ? true : false}
                                        onPress={() => this.setState({ selected3: data.questions[2].answer_set[0].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[2].answer_set[1].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected3 === data.questions[2].answer_set[1].id ? true : false}
                                        onPress={() => this.setState({ selected3: data.questions[2].answer_set[1].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[2].answer_set[2].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected3 === data.questions[2].answer_set[2].id ? true : false}
                                        onPress={() => this.setState({ selected3: data.questions[2].answer_set[2].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[2].answer_set[3].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected3 === data.questions[2].answer_set[3].id ? true : false}
                                        onPress={() => this.setState({ selected3: data.questions[2].answer_set[3].id })}
                                    />
                                </Right>
                            </CardItem>
                        </Card>
                        {/*  */}
                        {/*  */}
                        <Card>
                            <CardItem style={Style.backGreen}>
                                <Text style={Style.ques}>Q.    {data.questions[3].question_text}</Text>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[3].answer_set[0].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected4 === data.questions[3].answer_set[0].id ? true : false}
                                        onPress={() => this.setState({ selected4: data.questions[3].answer_set[0].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[3].answer_set[1].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected4 === data.questions[3].answer_set[1].id ? true : false}
                                        onPress={() => this.setState({ selected4: data.questions[3].answer_set[1].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[3].answer_set[2].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected4 === data.questions[3].answer_set[2].id ? true : false}
                                        onPress={() => this.setState({ selected4: data.questions[3].answer_set[2].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[3].answer_set[3].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected4 === data.questions[3].answer_set[3].id ? true : false}
                                        onPress={() => this.setState({ selected4: data.questions[3].answer_set[3].id })}
                                    />
                                </Right>
                            </CardItem>
                        </Card>
                        {/*  */}
                        {/*  */}
                        <Card>
                            <CardItem style={Style.backGreen}>
                                <Text style={Style.ques}>Q.    {data.questions[4].question_text}</Text>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[4].answer_set[0].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected5 === data.questions[4].answer_set[0].id ? true : false}
                                        onPress={() => this.setState({ selected5: data.questions[4].answer_set[0].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[4].answer_set[1].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected5 === data.questions[4].answer_set[1].id ? true : false}
                                        onPress={() => this.setState({ selected5: data.questions[4].answer_set[1].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[4].answer_set[2].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected5 === data.questions[4].answer_set[2].id ? true : false}
                                        onPress={() => this.setState({ selected5: data.questions[4].answer_set[2].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data.questions[4].answer_set[3].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected5 === data.questions[4].answer_set[3].id ? true : false}
                                        onPress={() => this.setState({ selected5: data.questions[4].answer_set[3].id })}
                                    />
                                </Right>
                            </CardItem>
                        </Card>
                        {/*  */}
                        <View style={{ flex: 1, height: 100, justifyContent: 'center' }}>
                            <Button rounded style={{ alignSelf: 'center', backgroundColor: '#43a047' }}
                                onPress={() => this._submitAnswer()}>
                                <Text style={Style.white}>Submit Answers</Text>
                            </Button>
                        </View>
                    </Content>
                </ImageBackground>
            </Container>
        </Root>
        )
    }
}