import React from 'react'
import {
  Text,
  TouchableHighlight,
  StyleSheet } from 'react-native'

const Button = ({label, onPress, customStyles}) => (
  <TouchableHighlight
    underlayColor='#35b5ff'
    onPress={onPress}
    style={customStyles && customStyles.button || [styles.button, styles.shadow]}>
    <Text style={customStyles && customStyles.buttonText || styles.buttonText}>{label}</Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  buttonText: {
      fontSize: 14,
      color: '#F8F8FF',
      alignSelf: 'center',
      fontWeight: 'bold'
  },
  button: {
      height: 45,
      width: 100,
      flexDirection: 'row',
      backgroundColor: '#ff5700cc',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      justifyContent: 'center'
  },
  shadow: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 1
    }
  }
});

export default Button;