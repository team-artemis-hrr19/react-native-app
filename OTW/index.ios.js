import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import store from './app/store';
import NavigationRootContainer from './app/NavRootContainer';

const App = () => (
  <Provider store={store}>
    <NavigationRootContainer />
  </Provider>
);

AppRegistry.registerComponent('OTW', () => App);