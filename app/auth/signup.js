import React, { Component } from 'react';
import {
    TouchableWithoutFeedback, Keyboard, TextInput, ImageBackground
} from 'react-native';
import { Container, Button, Text } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { Ionicons } from '@expo/vector-icons'
import { user, lock } from '../partials/icons'
import Style from '../style'
import style from './style'

export default class Signup extends Component {
    constructor(props) {
        super(props)
        
        this.state = { username: '', password: '' }
    }

    _signUp = () => {
        alert('Sign up !')
    }

    render(){
        const { username, password } = this.state

        return(
            <Container>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <Grid>
                        <ImageBackground source={require('../../assets/back.png')} style={Style.flex1}>
                            <Row size={40} style={style.verticalCenter}>
                                <Text style={style.mastery}>Mastery</Text>
                            </Row>
                            <Row size={5} />
                            <Row size={8} style={style.inputView}>
                                <Col size={15} style={style.verticalCenter}>
                                    <Ionicons name={user} size={25} style={style.inputIcon} />
                                </Col>
                                <Col size={85} style={style.verticalCenter}>
                                    <TextInput 
                                        style={style.input} 
                                        value={username} 
                                        onChangeText={username => this.setState({username})} 
                                        placeholder="Username"
                                        placeholderTextColor="#000"
                                        underlineColorAndroid="transparent"
                                        returnKeyType='next'
                                    />
                                </Col>
                            </Row>
                            <Row size={5} />
                            <Row size={8} style={style.inputView}>
                                <Col size={15} style={style.verticalCenter}>
                                    <Ionicons name={lock} size={25} style={style.inputIcon} />
                                </Col>
                                <Col size={85} style={style.verticalCenter}>
                                    <TextInput 
                                        style={style.input} 
                                        value={password} 
                                        onChangeText={password => this.setState({password})} 
                                        secureTextEntry={true}
                                        placeholder="Password"
                                        placeholderTextColor="#000"
                                        underlineColorAndroid="transparent"
                                        returnKeyType='done'
                                    />
                                </Col>
                            </Row>
                            <Row size={5} />
                            <Row size={8} style={style.inputView}>
                                <Col size={15} style={style.verticalCenter}>
                                    <Ionicons name={lock} size={25} style={style.inputIcon} />
                                </Col>
                                <Col size={85} style={style.verticalCenter}>
                                    <TextInput 
                                        style={style.input} 
                                        value={password} 
                                        onChangeText={password => this.setState({password})} 
                                        secureTextEntry={true}
                                        placeholder="Password"
                                        placeholderTextColor="#000"
                                        underlineColorAndroid="transparent"
                                        returnKeyType='done'
                                    />
                                </Col>
                            </Row>
                            <Row size={4} />
                            <Row size={17} style={style.verticalCenter}>
                                <Button rounded style={style.btn}
                                    onPress={() => this._signUp()}>
                                    <Text style={style.txtLogin}>Register</Text>
                                </Button>
                            </Row>
                        </ImageBackground>
                    </Grid>
                </TouchableWithoutFeedback>
            </Container>
        )
    }
}