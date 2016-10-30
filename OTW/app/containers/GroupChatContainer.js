import React from 'react';
import {connect} from 'react-redux';

import GroupChat from '../components/GroupChat';
import {
	updateChannelList
	updateCurrentMessage,
	updateMessageList,
  } from '../actions/sendBirdActions'	
const mapStateToProps = function(state){
  return {
    channel: state.sendBirdState.get('channel')
    currentMessage: state.sendBirdState.get('myMessage')
    messageList: state.sendBirdState.get('messageList')
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
   	updateChannelList: (channel) => dispatch(updateChannelList(channel)),
   	updateCurrentMessage: (message) => dispatch(updateCurrentMessage(message))
   	updateMessageList: (messages) => dispatch(updateMessageList(messages))
  }
}

const GroupChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupChat);

export default GroupChatContainer;