import {createStore} from 'redux';

import rootReducer from './reducers/rootReducer';

export default function configureStore () {
  const store = createStore(rootReducer)

  //configure for hot module reloading in dev environmet;
  if (module.hot) {
      module.hot.accept(() => {
        const nextRootReducer = require('./reducers/rootReducer').default;
        store.replaceReducer(nextRootReducer);
      })
    }
  return store;
}