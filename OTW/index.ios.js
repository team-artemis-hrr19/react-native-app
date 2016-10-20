import React, { Component } from 'react';
var SignUp = require('./app/components/signUp.js')
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
<<<<<<< HEAD
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Branch Test
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
=======
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'On The Way',
          component: SignUp
        }} />
>>>>>>> cca4dfe68a7517fde3fbe5f8ff045a3f7c1bc949
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('OTW', () => OTW);
