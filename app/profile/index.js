import React, { Component } from 'react';
import { TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import {
    Container, Header, Left, Body, Right, Title, Button, Thumbnail, 
    Card, CardItem, Text, Item, Input
} from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { Ionicons } from '@expo/vector-icons'
import { back, exit } from '../partials/icons'
import { signedOut } from '../auth/check'
import Style from '../style'
import Bar from '../partials/bar'

export default class Profile extends Component {
    render() {
        return(
            <Container>
                <Header noShadow transparent style={Style.backDgrey}>
                    <Left style={Style.flex1}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name={back} size={27} color="#fff" />
                        </Button>
                    </Left>
                    <Body style={Style.flexCenter}>
                        <Title style={Style.white}>Profile</Title>
                    </Body>
                    <Right style={Style.flex1}>
                        <Button transparent onPress={() => signedOut()}>
                            <Ionicons name={exit} size={27} color="#fff" />
                        </Button>
                    </Right>
                </Header>
                <Bar />
                <Grid>
                    <Row size={30} style={[Style.backDgrey, Style.itemCenter, {flexDirection: 'column'}]}>
                        <Thumbnail large source={require('../../assets/dp.jpg')} />
                        <Text style={{ marginTop: 10, color: '#fff' }}>Wade Wilson</Text>
                    </Row>
                    <Row size={70}>
                        <Card>
                            <CardItem>
                                <Item regular>
                                    <Input placeholder='Name' />
                                </Item>
                            </CardItem>
                            <CardItem>
                                <Item regular>
                                    <Input placeholder='Email' />
                                </Item>
                            </CardItem>
                            <CardItem>
                                <Item regular>
                                    <Input placeholder='Address' />
                                </Item>
                            </CardItem>
                            <CardItem>
                                <Item regular>
                                    <Input placeholder='School' />
                                </Item>
                            </CardItem>
                            <CardItem style={Style.flex1}>
                                <Button rounded style={[Style.backGreen, {alignSelf: 'center'}]}>
                                    <Text style={Style.white}>Change</Text>
                                </Button>
                            </CardItem>
                        </Card>
                    </Row>
                </Grid>
            </Container>
        )
    }
}