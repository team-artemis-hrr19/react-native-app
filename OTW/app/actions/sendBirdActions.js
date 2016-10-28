import {UPDATE_SENDBIRD_USERS} from './actionTypes';

export function updateSendBirdUsers(users) {
  return {
    type: UPDATE_SENDBIRD_USERS,
    users
  };
}