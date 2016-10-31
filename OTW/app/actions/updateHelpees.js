import {UPDATE_HELPEES} from './actionTypes';

const updateHelpees = (helpees) => {
  return {
    type: UPDATE_HELPEES,
    helpees
  }
} 

export default updateHelpees;