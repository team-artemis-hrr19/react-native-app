import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

class SignIn extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
    this._signOut;
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }

  goToMain(){
    this.props.handleNavigation();
  }

  render() {
    if (!this.props.user) {
      return (
        <View style={styles.container}>
        <GoogleSigninButton
        style={{width: 212, height: 48}}
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Dark}
        onPress={this._signIn.bind(this)} />
        </View>
      );
    }

    if (this.props.user) {
      return (
        <View style={styles.container}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
        Welcome {this.state.user.name}
        </Text>
        <Text> Your email is: {this.state.user.email}</Text>

        <TouchableHighlight
        onPress={this.login}
        style={styles.button}
        >
          <Text style={styles.buttonText}> Sign In </Text>
        </TouchableHighlight>

        <TouchableOpacity onPress={() => {this._signOut(); }}>
          <View style={{marginTop: 50}}>
            <Text> Log out </Text>
          </View>
        </TouchableOpacity>

         <TouchableOpacity onPress={() => {this.goToMain(); }}>
          <View style={{marginTop: 50}}>
            <Text> Main page </Text>
          </View>
        </TouchableOpacity>
      </View>
      );
    }
  }
  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        iosClientId: '45962405840-l5fdrhgnm36iagp4fjn61rvu8fj5ets1.apps.googleusercontent.com',
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
    }
    catch(err) {
      console.log('Signin Error', err.code, err.message);
    }
  }

  _signIn() {
    GoogleSignin.signIn()
    .then((user) => {
      console.log('user in signin', user);
      this.props.updateUser(user);
      this.props._handleNavigate({type: 'back'}); // TODO figure out where to redirect this to
    })
    .catch((err) => {
      console.log('Wrong info', err);
    })
    .done();
  }

  _signOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.props.removeUser();
    })
    .done();
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
    color: '#333333',
    marginBottom: 5,
  },
});

export default SignIn;
