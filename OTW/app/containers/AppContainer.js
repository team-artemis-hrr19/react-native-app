import React, { Component } from 'react';
var SignUp = require('./app/components/signUp.js')

// TODO do we really need to import everything into this folder, I would put it in containers.
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  NavigationExperimental,
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