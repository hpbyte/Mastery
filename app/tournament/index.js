import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import {
    Container, Header, Left, Body, Title, Right, Text, View, Content, Button
} from 'native-base'
import { Grid, Col, Row } from 'react-native-easy-grid'
import { Ionicons } from '@expo/vector-icons'
import { user, search, medal, front } from '../partials/icons'
import Style from '../style'
import Bar from '../partials/bar'
import moment from 'moment'

export default class Tour extends Component {
    constructor(props) {
        super(props)

        this.state = { tours: [] }
    }

    async componentDidMount() {
        await fetch('http://mastery-dev.ap-southeast-1.elasticbeanstalk.com/api/tournaments/')
            .then((resp) => resp.json())
            .then((respjson) => {
                this.setState({ tours: respjson })
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <Container>
                <ImageBackground source={require('../../assets/back.png')} style={Style.flex1}>
                    <Header noShadow transparent>
                        <Left style={Style.flex1}>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate('Profile')}>
                                <Ionicons name={user} size={27} color="#fff" />
                            </Button>
                        </Left>
                        <Body style={Style.flexCenter}>
                            <Title style={Style.title}>Mastery</Title>
                        </Body>
                        <Right style={Style.flex1}>
                            <Button transparent>
                                <Ionicons name={search} size={27} color="#fff" />
                            </Button>
                        </Right>
                    </Header>
                    <Bar />
                    <Grid padder>
                        {this.state.tours.map((prop, key) => {
                            return(
                                <Row key={key} style={{
                                        height: 90, marginLeft: 15, marginRight: 15, marginTop: 15, padding: 15, backgroundColor: '#fff'
                                    }}>
                                    <Col size={25}>
                                        <View style={{
                                            backgroundColor: '#43a047',
                                            borderRadius: 50,
                                            width: 65,
                                            height: 65,
                                            padding: 20
                                        }}>
                                            <Ionicons name={medal} size={30} color="#fff" />
                                        </View>
                                    </Col>
                                    <Col size={70}>
                                        <Text>{prop.title}</Text>
                                        <Text note>{moment(prop.start_time).format('Do MMM /YYYY HH:mm')}</Text>
                                        <Text note>Duration is {prop.duration}</Text>
                                    </Col>
                                    <Col size={5}>
                                        <Button transparent 
                                            onPress={() => this.props.navigation.navigate('Answer', {
                                                tourId: prop.id
                                            })}>
                                            <Ionicons name={front} size={27} color="#43a047" />
                                        </Button>
                                    </Col>
                                </Row>
                            )
                        })}
                    </Grid>
                </ImageBackground>
            </Container>
        )
    }
}