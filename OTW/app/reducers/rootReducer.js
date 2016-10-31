import {combineReducers} from 'redux';

import navigationState from './navReducer';
import userState from './userReducer';
import sendBirdState from './sendBirdReducer';
import locationState from './locationReducer';
import helpeesState from './updateHelpeesReducer';

const rootReducer = combineReducers({
  navigationState,
  userState,
  sendBirdState,
  locationState,
  helpeesState
});

export default rootReducer;