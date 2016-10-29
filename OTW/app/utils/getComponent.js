import React from 'react';

// all scenes here
import SignInContainer from '../containers/SignInContainer';
import SignUp from '../components/SignUp';
import GroupChat from '../components/Groupchat';
import InviteFriendsContainer from '../containers/InviteFriendsContainer'
import HomeContainer from '../containers/HomeContainer';
import HelpContainer from '../containers/HelpContainer';
import Helper from '../components/Helper';
import LandingPage from '../components/LandingPage';

// make a new case for each scene (this is called from components/NavRoot.js)
// TODO: refactor this part to return a better component
export default function getComponent(routeKey, _handleNavigate, _handleBackAction, _handleForwardAction) {
  switch (routeKey){
    case 'home':
      return LandingPage({_handleNavigate, _handleForwardAction});
    case 'signIn':
      return <SignInContainer
          _handleNavigate={_handleNavigate}
          _handleBackAction={_handleBackAction}
          _handleForwardAction={_handleForwardAction}
        />
    case 'signUp':
      return <SignUp _handleNavigate = {_handleNavigate} />
    case 'groupchat':
      return <GroupChat _handleNavigate={handleNavigate} />
    case 'inviteFriends':
      return <InviteFriendsContainer _handleNavigate={handleNavigate} />
    case 'help':
      return <HelpContainer _handleNavigate={_handleNavigate} />
    case 'helper':
      return <Helper _handleNavigate={_handleNavigate}/>
    default:
      return <LandingPage _handleNavigate = {handleNavigate} />;
  }
}