import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';
import {
    Container, Header, Left, Body, Title, Right, Text, View, 
    Content, Button, DeckSwiper, Card, CardItem
} from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { user, search, info, back, front } from '../partials/icons'
import Style from '../style'
import Bar from '../partials/bar'

const cards = [
    {
      text: 'How old is the earth ?',
      ans: "4.54 ± 0.05 billion years",
      body: "This age may represent the age of the Earth's accretion, of core formation, or of the material from which the Earth formed.",
      name: '1',
    },
    {
      text: 'How old is the universe ?',
      ans: "13.772 billion years",
      body: 'In 2012, WMAP estimated the age of the universe to be 13.772 billion years, with an uncertainty of 59 million years.',
      name: '2',
    },
    {
      text: 'How old is the human race ?',
      ans: "200,000 years",
      body: "The earliest fossils of anatomically modern humans are from the Middle Paleolithic, about 200,000 years ago",
      name: '3',
    },
  ];

export default class Mylearn extends Component {
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
                <View style={{height: 80}} />
                <View padder>
                    <DeckSwiper
                        ref={(c) => this._deckSwiper = c}
                        dataSource={cards}
                        renderEmpty={() =>
                        <View style={{ alignSelf: "center" }}>
                            <Text>Over</Text>
                        </View>}
                        renderItem={item =>
                        <Card style={{ elevation: 3 }}>
                            <CardItem>
                                <Text style={{ fontSize: 25, color: '#43a047' }}>Q.    {item.text}</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={{ fontSize: 21, justifyContent: 'center', alignItems: 'center' }}>
                                    {item.ans}
                                </Text>
                            </CardItem>
                            <CardItem>
                                <Text style={{ fontSize: 18, justifyContent: 'center', alignItems: 'center' }}>
                                    {item.body}
                                </Text>
                            </CardItem>
                            <CardItem>
                            <Text>{item.name}</Text>
                            </CardItem>
                        </Card>
                        }
                    />
                </View>
                <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
                <Button style={Style.backGreen} iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                    <Ionicons name={back} size={30} color="#fff" />
                    <Text>Prev</Text>
                </Button>
                <Button style={Style.backGreen} iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                    <Text>Next</Text>
                    <Ionicons name={front} size={30} color="#fff" />
                </Button>
                </View>
                </ImageBackground>
            </Container>
        )
    }
}