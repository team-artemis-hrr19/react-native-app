import {
  UPDATE_SENDBIRD_USERS,
  ADD_REMOVE_FRIEND_TO_LIST,
  ADD_REMOVE_CHANNEL,
  SEND_MESSAGE,
  GET_MESSAGES,
  } from './actionTypes';

export function updateSendBirdUsers(users) {
  return {
    type: UPDATE_SENDBIRD_USERS,
    users
  };
}

export function updateFriendsList(user){
  return {
    type: ADD_REMOVE_FRIEND_TO_LIST,
	user
  }
}

export function updateChannelList(channel){
  return {
    type: ADD_REMOVE_CHANNEL,
	channel
  }
}

export function updateCurrentMessage(message){
  return {
    type: SEND_MESSAGE,
  message
  }
}

export function updateMessageList(messages){
  return {
    type: GET_MESSAGES,
  messages
  }
}


