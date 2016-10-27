import {createStore} from 'redux';

import rootReducer from '../reducers/rootReducer';

const store = createStore(mainReducer);

export default store;