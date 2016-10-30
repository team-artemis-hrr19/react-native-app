import React, { Component } from 'react';
import Sendbird from 'sendbird';

import {
  StyleSheet,
  Text,
  ListView,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

const sb = Sendbird.getInstance();

import {sendBirdGetUsers, sendBirdCreateGroupChat} from '../utils/sendBird';

class InviteFriends extends Component{
  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      //channel: props.route.channel,
      dataSource: ds.cloneWithRows([]),
      sendBirdUserQuery: sb.createUserListQuery(),
      inviteList: []
    };
  }

  componentWillMount(){
    this.getUsers();
  }

  getUsers(){
    var thisComponent = this;
    sendBirdGetUsers(function(users) {
      thisComponent.setState({
        dataSource: thisComponent.state.dataSource.cloneWithRows(users)
      });
    });
  }

  createChatRoom() {
    var thisComponent = this;
    sendBirdCreateGroupChat(function(channel){
      thisComponent.props.updateChannelList(channel)
    });

  }

  // onPressInvite(rowData) {
  //   var curretInviteList = this.state.inviteList;

  //   if (curretInviteList.includes(rowData)){
  //     curretInviteList.forEach((user, i) => {
  //       if(user.userId === rowData.userId){
  //         curretInviteList.splice(i, 1)
  //       }
  //     });
  //   } else {
  //     curretInviteList.push(rowData)
  //   }
  //   this.setState({inviteList: curretInviteList})
  //   console.log(JSON.stringify(this.state.inviteList));

  // }

    createChatRoom() {
      sb.GroupChannel.createChannel(this.props.inviteList, false, function(channel, error) {
        if (error) {
          return console.error(error);
        }
        // TODO: pass this in through redux
        this.props.updateChannel.call(this, channel); //TODO: implement channel
        //this._handleNavigation({'push', route: { key: 'groupChat'}});
      });

  }

  render() {
    return (
      <View style={styles.container}>
         <ListView
          style={styles.ListView}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return(
              <TouchableHighlight
                tyle={styles.button}
                onPress= {() => {this.props.updateFriendsList(rowData)}}
              >
                <Text style={styles.label}>{rowData.nickname} </Text>
              </TouchableHighlight>
            )
          }}
        />

       <Text style={styles.button}>
         {this.props.friendsList.map(user => user.nickname + ', ')}
       </Text>

        <View style={styles.container}>
          <TouchableHighlight
          style={styles.button}
          onPress={ this.createChatRoom.bind(this) }
          >
            <Text style={styles.label}> Send</Text>
          </TouchableHighlight>

          <TouchableHighlight
          style={styles.button}
          //onPress={  } // should send you to the main window.
          >
            <Text style={styles.label}>Cancel</Text>
          </TouchableHighlight>
        </View>

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
    padding: 5,
    marginTop: 5,
    backgroundColor: '#DEC016'
  },

  label: {
    flex: 0,

  },

  ListView: {
    flex: 1,
    justifyContent:'space-between',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 100,
    marginBottom:-75
  }
});

export default InviteFriends;
