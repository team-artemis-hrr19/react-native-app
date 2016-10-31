import updateHelpees from '../actions/updateHelpees';
import {Map, List} from 'immutable';
import {UPDATE_HELPEES} from '../actions/actionTypes';

const initialState = List();

const helpeesState = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_HELPEES:
      return List(action.helpees);
    default:
      return state;
  }
}

export default helpeesState;