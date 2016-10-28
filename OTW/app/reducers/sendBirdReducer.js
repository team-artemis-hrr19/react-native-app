import {Map, List} from 'immutable';
import {UPDATE_SENDBIRD_USERS} from '../actions/actionTypes';

const INITIAL_STATE = Map({
  users: List()
});

export default function sendBirdState (state=INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_SENDBIRD_USERS: {
      return Map({users: List(action.users)});
    }
    default:
      return state;
  }
}

