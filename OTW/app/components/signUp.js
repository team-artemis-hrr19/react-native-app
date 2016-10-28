import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Username',
      password: 'Password'
     };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Username </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <Text> Password </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />

        <TouchableHighlight
        onPress={this.login}
        style={styles.button}
        >
          <Text style={styles.buttonText}> Sign Up </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
  },
  button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'lightblue',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
  },
});

export default SignUp;
