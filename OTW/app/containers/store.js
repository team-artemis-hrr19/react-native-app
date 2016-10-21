import {createStore} from 'redux';

import {mainReducer} from '../reducers/mainReducer';

const store = createStore(mainReducer);

export default store;