import React from 'react';
import _addHelpie from '../utils/firebaseApp';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Button from './Button';

const MapBottomBar = ({helpee}) => (
  <View style={[styles.shadow, styles.bar]}>
    <Text>Name: {helpee && helpee.title} </Text>
    <Text>Message: {helpee && helpee.message}</Text>
  </View>
);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: {
      height: -3,
      width: 1
    }
  },
  bar: {
    flexDirection: 'column',
    backgroundColor: '#FFF5EE',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  }
})

export default MapBottomBar;