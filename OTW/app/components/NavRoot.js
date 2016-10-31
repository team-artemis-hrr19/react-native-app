import React, {Component} from 'react';
import {NavigationExperimental} from 'react-native';
import Drawer from 'react-native-drawer';

import getComponent from '../utils/getComponent';
import MenuContainer from '../containers/MenuContainer';
import Button from './Button';

const {CardStack: NavigationCardStack} = NavigationExperimental;

class NavRoot extends Component {
  constructor(props) {
    super(props);
    this._renderScene = this._renderScene.bind(this);
    this._handleBackAction = this._handleBackAction.bind(this);
    // this._handleForwardAction = this._handleForwardAction.bind(this)
  }

  _renderScene(props) {
    const {route} = props.scene;
    return getComponent(
      route.key,
      this._handleNavigate,
      this._handleBackAction.bind(this),
      this._handleForwardAction.bind(this),
      this.openControlPanel.bind(this),
      this.closeControlPanel.bind(this)
    );
  }

  _handleBackAction () {
    if (this.props.navigation.index === 0) {
      return false;
    }
    this.props.popRoute();
    return true;
  }

  _handleForwardAction(key) {
    this.props.pushRoute({key});
  }

  _handleNavigate(action) {
    console.log('what the f is this',this);
    switch(action && action.type) {
      case 'push':
        this._handleForwardAction(action.route.key);
        return true;
      case 'back':
      case 'pop':
        return this._handleBackAction();
      default:
        return false;
    }
  }

  closeControlPanel = () => {
    this._drawer.close()
  };

  openControlPanel = () => {
    this._drawer.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={<MenuContainer
          _handleForwardAction={this._handleForwardAction.bind(this)}
          closeControlPanel={this.closeControlPanel.bind(this)}
        />}
        tapToClose={true}
        openDrawerOffset={0.5} // 50% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
        side='left'
      >
        <NavigationCardStack
          direction='vertical'
          navigationState={this.props.navigation}
          onNavigate={this._handleNavigate.bind(this)}
          renderScene={this._renderScene}
        />
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.5, shadowRadius: 3},
  main: {paddingLeft: 3},
  justifyContent: 'flex-start',
}

export default NavRoot;