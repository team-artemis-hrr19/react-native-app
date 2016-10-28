import {combineReducers} from 'redux';

import navigationState from './navReducer';
import userState from './userReducer';
import sendBirdState from './sendBirdReducer';

const rootReducer = combineReducers({
  navigationState,
  userState,
  sendBirdState
});

export default rootReducer;