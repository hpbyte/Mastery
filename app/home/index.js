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

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.generateRandomNum.bind(this)
    }

    generateRandomNum = () => {
        return Math.floor(Math.random() * 100)
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
                        <View style={{height: 50}} />
                        <Row>
                            <TouchableOpacity style={[Style.mycard, Style.backBlue]}>
                                <Button transparent style={Style.infoBtn}>
                                    <Ionicons name={info} size={27} color="#fff" />
                                </Button>
                                <View style={[Style.flexCenter, { marginTop: -50 }]}>
                                    <Text style={Style.mycardTxt}>Physics</Text>
                                    <Text note style={{ color: '#000' }}># {this.generateRandomNum()} people this week</Text>
                                </View>
                            </TouchableOpacity>
                        </Row>
                        <Row>
                            <TouchableOpacity style={[Style.mycard, Style.backGreen]}>
                                <Button transparent style={Style.infoBtn}>
                                    <Ionicons name={info} size={27} color="#fff" />
                                </Button>
                                <View style={[Style.flexCenter, { marginTop: -50 }]}>
                                    <Text style={Style.mycardTxt}>Biology</Text>
                                    <Text note style={{ color: '#000' }}># {this.generateRandomNum()} people this week</Text>
                                </View>
                            </TouchableOpacity>
                        </Row>
                        <Row>
                            <TouchableOpacity style={[Style.mycard, Style.backRed]}>
                                <Button transparent style={Style.infoBtn}>
                                    <Ionicons name={info} size={27} color="#fff" />
                                </Button>
                                <View style={[Style.flexCenter, { marginTop: -50 }]}>
                                    <Text style={Style.mycardTxt}>Chemistry</Text>
                                    <Text note style={{ color: '#000' }}># {this.generateRandomNum()} people this week</Text>
                                </View>
                            </TouchableOpacity>
                        </Row>
                        <Row>
                            <TouchableOpacity style={[Style.mycard, Style.backYellow]}>
                                <Button transparent style={Style.infoBtn}>
                                    <Ionicons name={info} size={27} color="#fff" />
                                </Button>
                                <View style={[Style.flexCenter, { marginTop: -50 }]}>
                                    <Text style={Style.mycardTxt}>Mathematics</Text>
                                    <Text note style={{ color: '#000' }}># {this.generateRandomNum()} people this week</Text>
                                </View>
                            </TouchableOpacity>
                        </Row>
                    </Content>
                </ImageBackground>
            </Container>
        )
    }
}