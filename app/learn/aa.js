import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'
import { ImageBackground, TouchableOpacity } from 'react-native';
import {
    Container, Header, Left, Body, Title, Right, Text, View, Content, Button, Card, CardItem
} from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { user, search } from '../partials/icons'
import Style from '../style'
import Bar from '../partials/bar'
import Mylearn from './mylearn'

class Myclass extends Component {
    render() {
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
                    <Content padder>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Mylearn')}>
                            <Card>
                                <CardItem style={[Style.backBlue, {height: 100}]}>
                                    <Text>Physics</Text>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Mylearn')}>
                            <Card>
                                <CardItem style={[Style.backYellow, {height: 100}]}>
                                    <Text>Chemistry</Text>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Mylearn')}>
                            <Card>
                                <CardItem style={[Style.backRed, {height: 100}]}>
                                    <Text>Biology</Text>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Mylearn')}>
                            <Card>
                                <CardItem style={[Style.backIndi, {height: 100}]}>
                                    <Text>Mathematics</Text>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </Content>
                </ImageBackground>
            </Container>
        )
    }
}

const Learn = createStackNavigator(
    {
        Mylearn : { screen: Mylearn },
        Myclass : { screen: Myclass }
    },
    {
        headerMode: 'none',
        initialRouteName: 'Myclass'
    }
)

export default Learn