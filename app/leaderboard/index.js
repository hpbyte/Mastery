import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import {
    Container, Header, Left, Body, Title, Right, Text, View, Content, Button, List, ListItem, Thumbnail
} from 'native-base'
import { Row } from 'react-native-easy-grid'
import { Ionicons } from '@expo/vector-icons'
import { user, search, info } from '../partials/icons'
import Style from '../style'
import Bar from '../partials/bar'

const dataArr = [
    1, 2, 3, 4, 5, 6, 7, 8
]

export default class Lead extends Component {
    constructor(props) {
        super(props)

        this.state = { leaders: [] }

        this.randomNum.bind(this)
    }

    randomNum() {
        return Math.floor(Math.random() * 100)
    }

    async componentDidMount() {
        const response = await fetch('http://mastery-dev.ap-southeast-1.elasticbeanstalk.com/api/learners/')
        const json = await response.json()
        this.setState({ leaders: json })
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
                    <Content padder style={Style.flex1}>
                        <List 
                            dataArray={this.state.leaders}
                            renderRow={(item) => {
                                return(
                                    <ListItem avatar style={{ margin: 5 }}>
                                        <Left>
                                            <Thumbnail source={{ uri: `https://randomuser.me/api/portraits/thumb/women/${this.randomNum()}.jpg` }} />
                                        </Left>
                                        <Body style={{ borderBottomWidth: 0 }}>
                                            <Text style={Style.green}>{item.name}</Text>
                                            <Text note style={Style.white}>Gained points: {item.points}</Text>
                                        </Body>
                                    </ListItem>
                                )
                            }}
                        />
                    </Content>
                </ImageBackground>
            </Container>
        )
    }
}