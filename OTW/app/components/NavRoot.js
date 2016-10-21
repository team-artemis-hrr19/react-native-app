import React, {Component} from 'react';
import {NavigationExperimental} from 'react-native';

//components
import Home from './Home';
import signIn from './signIn';

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
      return <Home
        _handleNavigate = {this._handleNavigate}
      />
    // todo add other routes
    }
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
    console.log('props', this.props);
    return (
      <NavigationCardStack
        direction='vertical'
        //FIXME: this.props.navigation is undefined for some reason?
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate.bind(this)}
        renderScene={this._renderScene}
      />
    );
  }
}

export default NavRoot;