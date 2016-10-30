
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ListView,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import {sendBirdGetUsers, sendBirdCreateGroupChat} from '../utils/sendBird';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

class InviteFriends extends Component{
  constructor(props){
    super(props) 
    this.state = {
    dataSource: ds.cloneWithRows([]),
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
      if(channel){
        thisComponent.props.updateChannelList(channel);
      }   
      thisComponent.props._handleNavigate({type:'push', route: { key: 'groupchat'}})
    })
  }


  render() {
    return (
      <View style={styles.container}>


        
         <ListView
          sylte={styles.ListView}
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
          onPress={ () => this.props._handleNavigate({type:'pop'}) }
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
