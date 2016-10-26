import React, { Component } from 'react';
var SignUp = require('./app/components/signUp.js')
var Help = require('./app/components/help.js')

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
          component: Help
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
