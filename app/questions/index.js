import React, { Component } from 'react';
import { ImageBackground, FlatList } from 'react-native';
import {
    Container, Header, Left, Body, Title, Right, Text, View, Content, Button, Card, CardItem, Radio
} from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { back } from '../partials/icons'
import Style from '../style'
import Bar from '../partials/bar'

const data = [
    {
        "id": 1,
        "question_text": "Who is current US president?",
        "answer_set": [
            {
                "id": 1,
                "answer_text": "Mickey Mouse",
                "correct": false,
                "question": 1
            },
            {
                "id": 2,
                "answer_text": "Donald Trump",
                "correct": true,
                "question": 1
            },
            {
                "id": 3,
                "answer_text": "Obama",
                "correct": false,
                "question": 1
            },
            {
                "id": 4,
                "answer_text": "Hillary",
                "correct": false,
                "question": 1
            }
        ]
    },
    {
        "id": 2,
        "question_text": "What is capital of US?",
        "answer_set": [
            {
                "id": 5,
                "answer_text": "Washinton DC",
                "correct": true,
                "question": 2
            },
            {
                "id": 6,
                "answer_text": "New York",
                "correct": false,
                "question": 2
            },
            {
                "id": 7,
                "answer_text": "Tokyo",
                "correct": false,
                "question": 2
            },
            {
                "id": 8,
                "answer_text": "Beijing",
                "correct": false,
                "question": 2
            }
        ]
    },
    {
        "id": 3,
        "question_text": "Which language is used for Laravel?",
        "answer_set": [
            {
                "id": 9,
                "answer_text": "Python",
                "correct": false,
                "question": 3
            },
            {
                "id": 10,
                "answer_text": "Java",
                "correct": false,
                "question": 3
            },
            {
                "id": 11,
                "answer_text": "C",
                "correct": false,
                "question": 3
            },
            {
                "id": 12,
                "answer_text": "PHP",
                "correct": true,
                "question": 3
            }
        ]
    },
    {
        "id": 4,
        "question_text": "Chemical formula of water",
        "answer_set": [
            {
                "id": 13,
                "answer_text": "CO2",
                "correct": false,
                "question": 4
            },
            {
                "id": 14,
                "answer_text": "NaCl",
                "correct": false,
                "question": 4
            },
            {
                "id": 15,
                "answer_text": "H2O",
                "correct": true,
                "question": 4
            },
            {
                "id": 16,
                "answer_text": "O2",
                "correct": false,
                "question": 4
            }
        ]
    },
    {
        "id": 5,
        "question_text": "F = ?",
        "answer_set": [
            {
                "id": 17,
                "answer_text": "ma",
                "correct": true,
                "question": 5
            },
            {
                "id": 18,
                "answer_text": "mc**2",
                "correct": false,
                "question": 5
            },
            {
                "id": 19,
                "answer_text": "mg",
                "correct": false,
                "question": 5
            },
            {
                "id": 20,
                "answer_text": "m/V",
                "correct": false,
                "question": 5
            }
        ]
    },
]

export default class Ques extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questions: [],
            selected1: '',
            selected2: '',
            selected3: '',
            selected4: '',
            selected5: '',
        }
    }

    // componentWillMount() {
    //     this._getQuestions()
    // }

    // _getQuestions = async() => {
    //     const response = await fetch('http://mastery-dev.ap-southeast-1.elasticbeanstalk.com/api/questions/1')
    //     const json = await response.json()
    //     this.setState({ questions: json })
    // }

    render(){
        return(
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
                                <Text style={Style.ques}>Q.    {data[0].question_text}</Text>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[0].answer_set[0].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected1 === data[0].answer_set[0].id ? true : false}
                                        onPress={() => this.setState({ selected1: data[0].answer_set[0].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[0].answer_set[1].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected1 === data[0].answer_set[1].id ? true : false}
                                        onPress={() => this.setState({ selected1: data[0].answer_set[1].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[0].answer_set[2].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected1 === data[0].answer_set[2].id ? true : false}
                                        onPress={() => this.setState({ selected1: data[0].answer_set[2].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[0].answer_set[3].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected1 === data[0].answer_set[3].id ? true : false}
                                        onPress={() => this.setState({ selected1: data[0].answer_set[3].id })}
                                    />
                                </Right>
                            </CardItem>
                        </Card>
                        {/*  */}
                        <Card>
                            <CardItem style={Style.backGreen}>
                                <Text style={Style.ques}>Q.    {data[4].question_text}</Text>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[4].answer_set[0].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected2 === data[4].answer_set[0].id ? true : false}
                                        onPress={() => this.setState({ selected2: data[4].answer_set[0].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[4].answer_set[1].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected2 === data[4].answer_set[1].id ? true : false}
                                        onPress={() => this.setState({ selected2: data[4].answer_set[1].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[4].answer_set[2].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected2 === data[4].answer_set[2].id ? true : false}
                                        onPress={() => this.setState({ selected2: data[4].answer_set[2].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[4].answer_set[3].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected2 === data[4].answer_set[3].id ? true : false}
                                        onPress={() => this.setState({ selected2: data[4].answer_set[3].id })}
                                    />
                                </Right>
                            </CardItem>
                        </Card>
                        {/*  */}
                        <Card>
                            <CardItem style={Style.backGreen}>
                                <Text style={Style.ques}>Q.    {data[1].question_text}</Text>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[1].answer_set[0].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected3 === data[1].answer_set[0].id ? true : false}
                                        onPress={() => this.setState({ selected3: data[1].answer_set[0].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[1].answer_set[1].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected3 === data[1].answer_set[1].id ? true : false}
                                        onPress={() => this.setState({ selected3: data[1].answer_set[1].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[1].answer_set[2].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected3 === data[1].answer_set[2].id ? true : false}
                                        onPress={() => this.setState({ selected3: data[1].answer_set[2].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[1].answer_set[3].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected3 === data[1].answer_set[3].id ? true : false}
                                        onPress={() => this.setState({ selected3: data[1].answer_set[3].id })}
                                    />
                                </Right>
                            </CardItem>
                        </Card>
                        {/*  */}
                        <Card>
                            <CardItem style={Style.backGreen}>
                                <Text style={Style.ques}>Q.    {data[2].question_text}</Text>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[2].answer_set[0].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected4 === data[2].answer_set[0].id ? true : false}
                                        onPress={() => this.setState({ selected4: data[2].answer_set[0].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[2].answer_set[1].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected4 === data[2].answer_set[1].id ? true : false}
                                        onPress={() => this.setState({ selected4: data[2].answer_set[1].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[2].answer_set[2].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected4 === data[2].answer_set[2].id ? true : false}
                                        onPress={() => this.setState({ selected4: data[2].answer_set[2].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[2].answer_set[3].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected4 === data[2].answer_set[3].id ? true : false}
                                        onPress={() => this.setState({ selected4: data[2].answer_set[3].id })}
                                    />
                                </Right>
                            </CardItem>
                        </Card>
                        {/*  */}
                        <Card>
                            <CardItem style={Style.backGreen}>
                                <Text style={Style.ques}>Q.    {data[3].question_text}</Text>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[3].answer_set[0].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected5 === data[3].answer_set[0].id ? true : false}
                                        onPress={() => this.setState({ selected5: data[3].answer_set[0].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[3].answer_set[1].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected5 === data[3].answer_set[1].id ? true : false}
                                        onPress={() => this.setState({ selected5: data[3].answer_set[1].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[3].answer_set[2].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected5 === data[3].answer_set[2].id ? true : false}
                                        onPress={() => this.setState({ selected5: data[3].answer_set[2].id })}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem style={Style.anscard}>
                                <Left>
                                    <Text>#</Text>
                                </Left>
                                <Body>
                                    <Text>{data[3].answer_set[3].answer_text}</Text>
                                </Body>
                                <Right>
                                    <Radio 
                                        selected={this.state.selected5 === data[3].answer_set[3].id ? true : false}
                                        onPress={() => this.setState({ selected5: data[3].answer_set[3].id })}
                                    />
                                </Right>
                            </CardItem>
                        </Card>
                        {/*  */}
                        <View style={{ flex: 1, height: 100, justifyContent: 'center' }}>
                            <Button rounded style={{ alignSelf: 'center', backgroundColor: '#43a047' }}>
                                <Text style={Style.white}>Submit Answers</Text>
                            </Button>
                        </View>
                    </Content>
                </ImageBackground>
            </Container>
        )
    }
}