import {Map, List} from 'immutable';

export function updateCurrentUser(state, user) {
  return state.set('user', user);
}

