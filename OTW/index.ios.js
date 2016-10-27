import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

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
export default class OTW extends Component {

  renderScene(route, navigator) {
    var Component = ROUTES[route.title];
    console.log('route = ',route, 'navigator = ',navigator)
    return <Component route={route} navigator={navigator} />;
  }
    
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{title: 'signIn', component: SignIn}} 
        renderScene={this.renderScene}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('OTW', () => OTW);




// import React, { Component } from 'react';
// var SignUp = require('./app/components/signUp.js');
// var SignIn = require('./app/components/signIn.js');
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   NavigatorIOS
// } from 'react-native';

// export default class OTW extends Component {
  
//   render() {
//     return (
//       <NavigatorIOS
//         style={styles.container}
//         initialRoute={{
//           title: 'On The Way',
//           component: SignIn
//         }} />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// AppRegistry.registerComponent('OTW', () => OTW);
