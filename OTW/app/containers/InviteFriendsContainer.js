import React from 'react';
import {connect} from 'react-redux';

import InviteFriends from '../components/inviteFriends';
import {updateSendBirdUsers} from '../actions/sendBirdActions'

const mapStateToProps = function(state){
  return {
    sendBirdUsers: state.sendBirdState.get('users')
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    updateSendBirdUsers: (users) => dispatch(updateSendBirdUsers(users))
  }
}

InviteFriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteFriends);

export default InviteFriendsContainer;