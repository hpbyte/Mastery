import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import {
    Container, Header, Left, Body, Title, Right, Text, View, Content, Button
} from 'native-base'
import { Row } from 'react-native-easy-grid'
import { Ionicons } from '@expo/vector-icons'
import { user, search, info } from '../partials/icons'
import Style from '../style'
import Bar from '../partials/bar'

export default class Tour extends Component {
    constructor(props) {
        super(props)
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

                    </Content>
                </ImageBackground>
            </Container>
        )
    }
}