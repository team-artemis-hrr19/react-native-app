import {UPDATE_LOCATION} from './actionTypes';

export function updateLocation({lat, long}) {
  return {
    type: UPDATE_LOCATION,
    loc: {
      lat,
      long
    }
  };
}