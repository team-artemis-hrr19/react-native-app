import React, {Component} from 'react';
import {NavigationExperimental} from 'react-native';

//components
import Home from './Home';
import SignIn from './signIn';
import SignUp from './signUp';

const {CardStack: NavigationCardStack} = NavigationExperimental;

class NavRoot extends Component {
  constructor(props) {
    super(props);
    this._renderScene = this._renderScene.bind(this);
    this._handleBackAction = this._handleBackAction.bind(this);
  }

  componentDidMount() {
    // add back button
  }

  componentWillUnmount () {
    // remove back button listener
  }

  _renderScene(props) {
    const {route} = props.scene;
    if (route.key === 'home') {
      return (
        <Home
          _handleNavigate = {this._handleNavigate}
        />
      );
    }
    if (route.key === 'signIn') {
      return (
        <SignIn
          _handleNavigate = {this._handleNavigate}
        />
      );
    }
    // TODO: add other routes
  }

  _handleBackAction () {
    if (this.props.navigation.index === 0) {
      return false;
    }
    this.props.popRoute();
    return true;
  }

  _handleNavigate() {
    switch(action && action.type) {
      case 'push':
        this.props.pushRoute(action.route);
        return true;
      case 'back':
      case 'pop':
        return this._handleBackAction();
      default:
        return false;
    }
  }

  render() {
    return (
      <NavigationCardStack
        direction='vertical'
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate.bind(this)}
        renderScene={this._renderScene}
      />
    );
  }
}

export default NavRoot;

// var GroupChat = require('./app/components/groupchat.js')
// var Main = require('./app/components/main.js')
// var SignIn = require('./app/components/signIn.js')
// var SignUp = require('./app/components/signUp.js')
// var InviteFriends = require('./app/components/inviteFriends.js')

// const ROUTES = {
//   groupChat: GroupChat,
//   main:Main,
//   signUp:SignUp,
//   signIn:SignIn,
//   inviteFriends:InviteFriends,
// };

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