
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ListView,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

var SendBird = require('sendbird');


class InviteFriends extends Component{
  constructor(props){
  	super(props)
    var sb = SendBird.getInstance();
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  	 this.state = {
      channel: props.route.channel,
      dataSource: ds.cloneWithRows([]),
      sendBirdUserQuery: sb.createUserListQuery(),
      inviteList: []
    };
  }
  componentWillMount(){
    this.getUsers.bind(this)();
  }

  getUsers(){
    var thisInstance = this;
    this.state.sendBirdUserQuery.next(function(users, err){
      if(err){console.log(err)}
      var currentSendBirdUsers = users.filter((user) => {
        return user.userId !== sb.currentUser.userId
      });
      thisInstance.setState({ 
        dataSource:thisInstance.state.dataSource.cloneWithRows(currentSendBirdUsers)
      });
      console.log(thisInstance.state.dataSource)
    });  
  }

  onPressInvite(rowData) {
    var curretInviteList = this.state.inviteList;
    
    if (curretInviteList.includes(rowData)){
      curretInviteList.forEach((user, i) => {
        if(user.userId === rowData.userId){
          curretInviteList.splice(i, 1)
        }
      });
    } else {
      curretInviteList.push(rowData)
    }
    this.setState({inviteList: curretInviteList})
    console.log(JSON.stringify(this.state.inviteList));

  }

    createChatRoom() {
     var thisInstance = this;
      sb.GroupChannel.createChannel(this.state.inviteList, false, function(channel, error) {
        if (error) {
          console.log(error);
          return;
        }
        thisInstance.props.navigator.push({title: 'groupChat', channel: channel});
      });
    
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.button}>
          {this.state.inviteList.map(user => user.nickname)}
        </Text>

        <TouchableHighlight
        style={styles.button}
        onPress={this.createChatRoom.bind(this)}
        >
          <Text style={styles.label}> Create Chat Room </Text>
        </TouchableHighlight>

        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return(
              <TouchableHighlight
              style={styles.button} 
              onPress= {() => {this.onPressInvite(rowData)}}
              >
                <Text style={styles.label}> {rowData.nickname} </Text>
              </TouchableHighlight>
            )
          }}
        />
      </View>
    );
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
    marginTop: 20,
    backgroundColor: '#DEC016'
  },

  label: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
  
  },

  label2: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
    marginBottom:-75
  }
});

module.exports = InviteFriends;