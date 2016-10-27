import React from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import configureStore from './app/store';
import NavigationRootContainer from './app/containers/NavRootContainer';
var GroupChat = require('./app/components/groupchat.js')
var Main = require('./app/components/main.js')
var SignIn = require('./app/components/signIn.js')
var SignUp = require('./app/components/signUp.js')
var InviteFriends = require('./app/components/inviteFriends.js')

const ROUTES = {
  groupChat: GroupChat,
  main:Main,
  signUp:SignUp,
  signIn:SignIn,
  inviteFriends:InviteFriends,
};

// TODO: merge David's changes into main component of app
//
// export default class OTW extends Component {

//   renderScene(route, navigator) {
//     var Component = ROUTES[route.title];
//     console.log('route = ',route, 'navigator = ',navigator)
//     return <Component route={route} navigator={navigator} />;
//   }

//   render() {
//     return (
//       <Navigator
//         style={styles.container}
//         initialRoute={{title: 'signIn', component: SignIn}}
//         renderScene={this.renderScene}
//         configureScene={() => {
//           return Navigator.SceneConfigs.FloatFromRight;
//         }}
//       />
//     );
//   }

// }

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <NavigationRootContainer />
  </Provider>
);

AppRegistry.registerComponent('OTW', () => OTW);