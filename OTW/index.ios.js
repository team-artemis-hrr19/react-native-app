/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
var SignUp = require('./App/Components/SignUp.js')
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
          component: SignUp
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
