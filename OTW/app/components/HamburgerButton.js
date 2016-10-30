import React from 'react';
import {StyleSheet} from 'react-native';

import Button from './Button';

HamburgerButton = ({onPress}) => (
  <Button
    label='☰'
    onPress={onPress}
    customStyles={styles}
  />
);

const styles = StyleSheet.create({
  button: {
    marginLeft: 15,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: "#000000",
    textShadowRadius: 1,
    textShadowOffset: {
      height: 0.5,
      width: 0.5
    }
  }
})



export default HamburgerButton;