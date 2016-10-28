import React from 'react';

// all scenes here
import Home from '../components/Home.js';
import SignInContainer from '../containers/SignInContainer';
import SignUp from '../components/signUp';
import GroupChat from '../components/groupchat';
import InviteFriendsContainer from '../containers/InviteFriendsContainer'
import HomeContainer from '../containers/HomeContainer'

// make a new case for each scene (this is called from components/NavRoot.js)
export default function getComponent(routeKey, handleNavigate) {
  switch (routeKey){
    case 'home':
      return <HomeContainer _handleNavigate = {handleNavigate} />;
    case 'signIn':
      return <SignInContainer _handleNavigate = {handleNavigate} />
    case 'signUp':
      return <SignUp _handleNavigate = {handleNavigate} />
    case 'groupchat':
      return <GroupChat _handleNavigate={handleNavigate} />
    case 'inviteFriends':
      return <InviteFriendsContainer _handleNavigate={handleNavigate} />
  }
}