import React from 'react';

// all scenes here
import Home from './components/Home.js';
import SignIn from './components/signIn.js';
import GroupChat from './components/groupchat.js';

// make a new case for each scene (this is called from components/NavRoot.js)
export default function getRoute(route, handleNavigate) {
  switch (route.key){
    case 'home':
      return <Home _handleNavigate = {handleNavigate} />;
    case 'signIn':
      return <SignIn _handleNavigate = {handleNavigate} />
    case 'groupchat':
      return <GroupChat _handleNavigate={handleNavigate} />
    case 'inviteFriends':
      return <InviteFriends _handleNavigate={handleNavigate} />
  }
}