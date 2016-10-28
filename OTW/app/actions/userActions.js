import {UPDATE_USER, REMOVE_USER} from './actionTypes';

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user
  };
}

export function removeUser() {
  return {
    type: REMOVE_USER
  }
}