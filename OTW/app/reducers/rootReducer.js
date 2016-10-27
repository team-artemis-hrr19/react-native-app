import {combineReducers} from 'redux';
import navigationState from './navReducer';

const rootReducer = combineReducers({
  navigationState
});

export default rootReducer;