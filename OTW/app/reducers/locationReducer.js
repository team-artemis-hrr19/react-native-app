import {Map} from 'immutable';

import {UPDATE_LOCATION} from '../actions/actionTypes';

const INITIAL_STATE = Map({
  lat: 'unknown',
  long: 'unknown'
});

export default function locationState (state=INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_LOCATION:
      return Map({lat: action.loc.lat, long: action.loc.long});
    default:
      return state;
  }
}