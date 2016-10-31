import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image
} from 'react-native';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

import {sendBirdConnect} from '../utils/sendBird';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }

  render() {
    console.log('check the props for handleNavigate',this.props);

    if (this.props.user.get('name') === 'Guest') {
      return (
        <View style={styles.container}>
        <GoogleSigninButton
        style={{width: 212, height: 48}}
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Dark}
        onPress={this._signIn.bind(this)} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
          Welcome to OTW {this.props.user.get('name')}
        </Text>
        <Image
          source={{uri: this.props.user.get('photo')}}
          style={{width: 50, height: 50}}
        />
        <Text> Your email is: {this.props.user.get('email')}</Text>

        <TouchableOpacity onPress={() => {this._signOut(); }}>
          <View style={{marginTop: 50}}>
            <Text> Log out </Text>
          </View>
        </TouchableOpacity>

         <TouchableOpacity onPress={() => this.props._handleBackAction()}>
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
    .then(user => {
      this.props.updateUser(user);
      this.props._handleForwardAction('help');
      //FIXME: sendbird not working
      sendBirdConnect(user.email, user.name, () => {
        console.log('sendbird connection successful');
      });
    })
    .catch((err) => {
      console.log('Wrong info', err);
    })
    .done();
  }

  _signOut() {
    GoogleSignin.revokeAccess()
    .then(() => GoogleSignin.signOut())
    .then(this.props.removeUser.bind(this))
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
