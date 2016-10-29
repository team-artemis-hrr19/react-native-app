import React from 'react';

// all scenes here
import SignInContainer from '../containers/SignInContainer';
import SignUp from '../components/SignUp';
import GroupChat from '../components/Groupchat';
import InviteFriendsContainer from '../containers/InviteFriendsContainer'
import HomeContainer from '../containers/HomeContainer';
import HelpContainer from '../containers/HelpContainer';
import Helper from '../components/Helper';

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
    case 'help':
      return <HelpContainer _handleNavigate={handleNavigate} />
    case 'helper':
      return <Helper _handleNavigate={handleNavigate}/>
    default:
      return <HomeContainer _handleNavigate = {handleNavigate} />;
  }
}