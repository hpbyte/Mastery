import React, { Component } from 'react';
import {
    createSwitchNavigator, createStackNavigator, createBottomTabNavigator
} from 'react-navigation'
import { Footer, FooterTab, Button, Text } from 'native-base'
import Signin from './auth/signin'
import Signup from './auth/signup'
import Solo from './solo'
import Tour from './tournament'
import Lead from './leaderboard'
import Profile from './profile'
import Learn from './learn'
import Ques from './questions'
import Answer from './tournament/answer'
import Style from './style'
import Ionicons from '@expo/vector-icons/Ionicons';
import { play, podi, flag, book } from './partials/icons'

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

const Menu = createBottomTabNavigator(
    {
        Solo: { screen: Solo },
        Tour: { screen: Tour },
        Lead: { screen: Lead },
        Learn: { screen: Learn }
    },
    {
        initialRouteName: 'Solo',
        animationEnabled: true,
        tabBarComponent: props => {
            return(
                <Footer>
                    <FooterTab style={{ backgroundColor: '#000' }}>
                        <Button vertical onPress={() => props.navigation.navigate('Solo')}>
                            <Ionicons name={play} size={24} color="#fff" />
                            <Text style={Style.white}>Practice</Text>
                        </Button>
                        <Button vertical onPress={() => props.navigation.navigate('Learn')}>
                            <Ionicons name={book} size={24} color="#fff" />
                            <Text style={Style.white}>Learn</Text>
                        </Button>
                        <Button vertical onPress={() => props.navigation.navigate('Tour')}>
                            <Ionicons name={flag} size={24} color="#fff" />
                            <Text style={Style.white}>Battle</Text>
                        </Button>
                        <Button vertical onPress={() => props.navigation.navigate('Lead')}>
                            <Ionicons name={podi} size={24} color="#fff" />
                            <Text style={Style.white}>Ranks</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            )
        }
    }
)

const Main = createStackNavigator(
    {
        Menu: { screen: Menu },
        Profile: { screen: Profile },
        Ques: { screen: Ques },
        Answer: { screen: Answer }
    },
    {
        headerMode: 'none',
        initialRouteName: 'Menu'
    }
)

export const createRootNavigator = (signedIn = false) => createSwitchNavigator(
    {
        SignedIn: { screen: Main },
        SignedOut: { screen: Auth }
    },
    {
        initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
)