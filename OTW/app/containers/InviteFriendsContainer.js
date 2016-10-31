import React from 'react';
import {connect} from 'react-redux';

import InviteFriends from '../components/InviteFriends';
import {
  updateSendBirdUsers,
  updateFriendsList,
  updateChannelList
} from '../actions/sendBirdActions'

const mapStateToProps = function(state){
  return {
    sendBirdUsers: state.sendBirdState.get('users'),
    friendsList: state.sendBirdState.get('friendsList'),
    channel: state.sendBirdState.get('channel')
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    updateSendBirdUsers: (users) => dispatch(updateSendBirdUsers(users)),
   	updateFriendsList: (user) => dispatch(updateFriendsList(user)),
    updateChannelList: (channel) => dispatch(updateChannelList(channel))
  }
}

const InviteFriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteFriends);

export default InviteFriendsContainer;