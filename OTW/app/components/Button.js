import React from 'react'
import {
  Text,
  TouchableHighlight,
  StyleSheet } from 'react-native'

const Button = ({label, onPress, customStyles}) => (
  <TouchableHighlight
    underlayColor='#35b5ff'
    onPress={onPress}
    style={customStyles && customStyles.button || styles.button}>
    <Text style={customStyles && customStyles.buttonText || styles.buttonText}>{label}</Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  buttonText: {
      fontSize: 14,
      color: '#111',
      alignSelf: 'center',
      fontWeight: 'bold'
  },
  button: {
      height: 45,
      width: 100,
      flexDirection: 'row',
      backgroundColor: '#FFEE58',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      justifyContent: 'center'
  }
});

export default Button;