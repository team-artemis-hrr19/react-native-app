import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';

import Button from './Button';

const LandingPage = ({_handleForwardAction}) => (
    <Image source={require('../assets/background2_Fotor.png')} style={styles.background}>
    <Text style={styles.header}>OTW</Text>
    <Text style={styles.tagLine}>never be alone</Text>
    <Button
      style={styles.button}
      label='Sign In'
      onPress={() => _handleForwardAction('signIn')}
    />
    <Button
      label='Sign Up'
      onPress={() => _handleForwardAction('signUp')}
    />
    <Text style={styles.footer}>Team Artemis 2016</Text>
  </Image>
)

const styles = StyleSheet.create({
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    resizeMode: 'contain'
  },
  button: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 1
    }
  },
  header: {
    fontSize: 70,

    color: 'white',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 1
    }
  },
  tagLine: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 1
    }
  },
  footer: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 1
    }
  }
});

export default LandingPage;