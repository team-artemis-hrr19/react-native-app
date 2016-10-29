import {Map} from 'immutable';

import {UPDATE_USER, REMOVE_USER} from '../actions/actionTypes';

const INITIAL_STATE = Map({
  name: 'Guest'
});

export default function userState(state=INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_USER:
      return Map(action.user);
    case REMOVE_USER:
      return null;
    default:
      return state;
  }
}