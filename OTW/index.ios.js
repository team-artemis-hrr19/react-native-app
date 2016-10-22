import React, { Component } from 'react';
var SignUp = require('./app/components/signUp.js');
var SignIn = require('./app/components/signIn.js');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

export default class OTW extends Component {
  
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'On The Way',
          component: SignIn
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('OTW', () => OTW);
