import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';


var SendBird = require('sendbird');

class Main extends Component{
  constructor(props){
  	super(props);
  	this.state={
      user:props.route.username
  	}

  }

  onPressInviteFriends() {
    this.props.navigator.push({title: 'inviteFriends'})

  }

  sendbirdConnect() {
    var thisInstance = this
    sb = new SendBird({ appId: '88DAD638-1ABE-4C19-9032-E4FE9B49A720'});
    sb.connect(this.state.user.email, function(user, err){
      if(err){
        console.log("error in signin.js", err);
        return;
      }
      sb.updateCurrentUserInfo(thisInstance.state.user.name, '', function(response, error) {
        if(err){
        console.log("error in signin.js", err);
        return;
        }
       thisInstance.onPressInviteFriends()
      });
    });

  }
  render() {
  	return (
  	  <View style={styles.container}>
  	  	<TouchableHighlight
  	  	  style={styles.button}
  	  	  uderlayColor={'#106FEB'}
  	  	  onPress={this.sendbirdConnect.bind(this)}
  	  	>
  	  	  <Text style={styles.label}> HELP! </Text>
  	  	</TouchableHighlight>
  	  </View>
  	)
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#DEC016'
  },

  label: {
    width: 230,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  }
});

module.exports = Main;


