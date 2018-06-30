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

export default class Signin extends Component {
    constructor(props) {
        super(props)
        
        this.state = { username: '', password: '', token: null }

        this._getToken = this._getToken.bind(this)
    }

    _getToken() {
        const uname = this.state.username
        const paswd = this.state.password

        fetch('http://mastery-dev.ap-southeast-1.elasticbeanstalk.com/api/questions/', {
            method: 'POST',
            body: JSON.stringify({
                username: uname,
                password: paswd
            })
        })
        .then(resp => resp.json())
        .then(respjson => {
            this.setState({ token: respjson })
        })
        .catch(err => { alert(err) })
    }

    _signin = () => {
        
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
                            <Row size={4} />
                            <Row size={30} style={style.verticalCenter}>
                                <Button rounded style={style.btn}
                                    onPress={() => this._signin()}>
                                    <Text style={style.txtLogin}>Login</Text>
                                </Button>
                            </Row>
                        </ImageBackground>
                    </Grid>
                </TouchableWithoutFeedback>
            </Container>
        )
    }
}