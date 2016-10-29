import {combineReducers} from 'redux';

import navigationState from './navReducer';
import userState from './userReducer';
import sendBirdState from './sendBirdReducer';
import locationState from './locationReducer';

const rootReducer = combineReducers({
  navigationState,
  userState,
  sendBirdState,
  locationState
});

export default rootReducer;