import React from 'react';
import Home from './components/Home.js';
import SignIn from './components/signIn.js';
import GroupChat from './components/groupchat.js';

export default function getRoute(route, handleNavigate) {
  switch (route.key){
    case 'home':
      return <Home _handleNavigate = {handleNavigate} />;
    case 'signIn':
      return <SignIn _handleNavigate = {handleNavigate} />
    case 'groupchat':
      return <GroupChat _handleNavigate={handleNavigate} />
  }
}