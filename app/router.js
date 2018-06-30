import React, { Component } from 'react';
import {
    createSwitchNavigator, createStackNavigator, createBottomTabNavigator
} from 'react-navigation'
import { Footer, FooterTab, Button, Text } from 'native-base'
import Signin from './auth/signin'
import Signup from './auth/signup'
import Home from './home'
import Style from './style'

const Auth = createBottomTabNavigator(
    {
        SignIn: { screen: Signin },
        SignUp: { screen: Signup }
    },
    {
        initialRouteName: 'SignIn',
        tabBarComponent: props => {
            return(
                <Footer>
                    <FooterTab style={Style.backGreen}>
                        <Button onPress={() => props.navigation.navigate('SignIn')}>
                            <Text style={Style.white}>SignIn</Text>
                        </Button>
                        <Button onPress={() => props.navigation.navigate('SignUp')}>
                            <Text style={Style.white}>SignUp</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            )
        }
    }
)

export const createRootNavigator = (signedIn = false) => createSwitchNavigator(
    {
        SignedIn: { screen: Home },
        SignedOut: { screen: Auth }
    },
    {
        initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
)