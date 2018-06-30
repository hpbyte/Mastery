import React from 'react';
import { Font, AppLoading } from 'expo'
import { createRootNavigator } from './app/router'
import { isSignedIn } from './app/auth/check'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { loading: true, signedIn: false }
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ loading: false })
  }

  // componentDidMount() {
  //   isSignedIn()
  //     .then(res => this.setState({ signedIn: res }))
  //     .catch(err => alert(err))
  // }

  render() {
    const { loading, signedIn } = this.state

    if(loading) {
      return <AppLoading />
    }

    const Layout = createRootNavigator(signedIn)

    return <Layout />
  }
}
