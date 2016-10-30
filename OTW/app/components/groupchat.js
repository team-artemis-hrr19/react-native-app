import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  Dimensions,
  TouchableHighlight
} from 'react-native';

var SendBird = require('sendbird');
var windowSize = Dimensions.get('window')
var sb = SendBird.getInstance();
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class GroupChat extends Component{
  constructor(props){
    super(props)
  	this.state ={
      dataSource: ds.cloneWithRows([]),
      myMessage: '',
      messageArray: [],
    }
  }

  componentWillUnMount(){
     sb.removeChannelHandler('MessageHandler');
  }

  componentWillMount() {
    this.getOldMessages();

    var thisInstance = this;

    var ChannelHandler = new sb.ChannelHandler();

    ChannelHandler.onMessageReceived = function(channel, message){
      var _messages = [];
      _messages.push(message);
      console.log('the ChannelHandler onMessageReceived was called')
      _messages = _messages.concat(thisInstance.state.messageArray);
      thisInstance.setState({
        messageArray: _messages,
        dataSource: thisInstance.state.dataSource.cloneWithRows(_messages)
      });
      console.log(channel, message)
     };

    sb.addChannelHandler('MessageHandler', ChannelHandler);
  }


  onDisconnect() {
    this.props.channel.leave(function(response, error) {
      if (error) {
        console.error(error);
      }
      console.log(response);
    });
      this.props._handleNavigate({type:'push', route: { key: 'signIn'}});
  }

  sendMessage(){
    var thisInstance = this
    this.props.channel.sendUserMessage(this.state.myMessage, '',  function(message, error){
      if (error) {
          console.error(error);
          return;
      }
      thisInstance.setState({myMessage:''})
      var _messages =[]
       _messages.push(message)
       _messages = _messages.concat(thisInstance.state.messageArray);
       thisInstance.setState({
        messageArray:_messages,
        dataSource: thisInstance.state.dataSource.cloneWithRows(_messages)
       });
       console.log(thisInstance.state.messageArray)
    });
  }

  getOldMessages(){
    var thisInstance = this;
    var _channel = this.props.channel;
    console.log('what is the difference',_channel);
    return
    var messageListQuery = _channel.createPreviousMessageListQuery();
    messageListQuery.load(20, true, function(messageList, error){
      if (error) {
        console.error('getOld Messages error line 87',error);
        return;
      }
      var messages = messageList.concat(thisInstance.state.messageArray);
      thisInstance.setState({
        messageArray: messages,
        dataSource:thisInstance.state.dataSource.cloneWithRows(messages)
      })
    });

  }

  render() {
    return (
      <View style={styles.mainContainer}>

        <View style={styles.topContainer}>
          <TouchableHighlight
            underlayColor={'#DEC025'}
            onPress={ () => this.props._handleNavigate({type:'pop'}) }
            style={{marginLeft: 15}}
            >
            <Text style={styles.backBorder}> Back </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'#DEC025'}
            onPress={this.onDisconnect.bind(this)}
            style={{marginLeft: 15}}
            >
            <Text style={styles.backBorder}> Leave chat </Text>
          </TouchableHighlight>
        </View>


        <View style={styles.chatContainer}>
          <ListView
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => {
            return(
              <TouchableHighlight
              style={styles.button}
              >
                <View>
                  <Text style={styles.label}> {rowData.sender.nickname} </Text>
                  <Text style={styles.label}> {rowData.message} </Text>
                </View>
              </TouchableHighlight>
            )
          }}
        />

        </View>

        <View style={styles.inputContainer}>
          <View style={{flex:1, justifyContent: 'center'}}>
            <TextInput
              placeholder={'text here'}
              style={styles.input}
              onChangeText={(myMessage) => this.setState({myMessage})}
              value={this.state.myMessage}
            >
            </TextInput>
          </View>

          <View style={styles.sendContainer}>
            <TouchableHighlight
              underlayColor={'#4e4273'}
              onPress={this.sendMessage.bind(this)}
              >
              <Text>SEND</Text>
            </TouchableHighlight>
          </View>
        </View>

      </View>
      );
  }



}


  var styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    topContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#DEC016',
      paddingTop: 20,
    },
    chatContainer: {
      flex: 11,
      justifyContent: 'center',
      alignItems: 'stretch'
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#DEC016'
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center'
    },
    sendContainer: {
      justifyContent: 'flex-end',
      paddingRight: 10
    },
    input: {
      width: windowSize.width - 70,
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 5,
      height: 32,
      borderColor: '#000',
      borderWidth: 1,
      borderRadius: 2,
      alignSelf: 'center',
      backgroundColor: '#ffffff'
    },
    backBorder:{
      borderColor:'#000',
      borderWidth: 1,
      borderRadius: 2
    },
  });


module.exports = GroupChat;