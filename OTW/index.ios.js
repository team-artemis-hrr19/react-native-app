import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import configureStore from './app/store';
import NavigationRootContainer from './app/containers/NavRootContainer';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <NavigationRootContainer />
  </Provider>
);

AppRegistry.registerComponent('OTW', () => App);