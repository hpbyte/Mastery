import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import {
    Container, Header, Left, 
} from 'native-base'
import Style from '../style'

export default class Home extends Component {
    render(){
        return(
            <Container>
                <ImageBackground source={require('../../assets/back.png')} style={Style.flex1}>
                    <Header>

                    </Header>
                </ImageBackground>
            </Container>
        )
    }
}