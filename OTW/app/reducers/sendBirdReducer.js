import {Map, List, immutable} from 'immutable';
import {
  UPDATE_SENDBIRD_USERS,
  ADD_REMOVE_FRIEND_TO_LIST,
  ADD_REMOVE_CHANNEL,
  SEND_MESSAGE,
  GET_MESSAGES,
  } from '../actions/actionTypes';


const INITIAL_STATE = Map({
  users: List(),
  friendsList: List(),
  channel:null,
  myMessage:'',
  messageList: List(),

});

export default function sendBirdState (state=INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_SENDBIRD_USERS: {
      return state.set('users', action.users);
    }
    case ADD_REMOVE_FRIEND_TO_LIST: {
	    if (state.get("friendsList").includes(action.user)) {
	      const index = state.get('friendsList').indexOf(action.user); 
        return state.set('friendsList', state.get('friendsList').delete(index));
	    } else {
	      return state.set('friendsList', state.get('friendsList').push(action.user));	
	    } 
    }
    case ADD_REMOVE_CHANNEL: {
      if (state.get('channel') === action.channel) {
        return state.set('channel', null)
      } else {
        return state.set('channel', action.channel);
      }
    }
    case SEND_MESSAGE: {
      return state.set('myMessage', action.message)
      }
    case GET_MESSAGES: {
      return state.set('messageList', state.get(messageList).concat(action.messages))
    }
    default:
      return state;
  }
}


