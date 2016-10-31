import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
require('./app/utils/firebaseApp');

import store from './app/store';
import NavigationRootContainer from './app/containers/NavRootContainer';

const App = () => (
  <Provider store={store}>
    <NavigationRootContainer />
  </Provider>
);

AppRegistry.registerComponent('OTW', () => App);