import React, { Component } from 'react';

const firebase = require('firebase');

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  MapView
} from 'react-native';


import UserBarContainer from '../containers/UserBarContainer';
import Button from './Button';
import BottomBarContainer from '../containers/BottomBarContainer';

class Help extends Component {
  getHelp(){
    _addHelpie();
  }

  onRegionChangeComplete(region) {
    this.props.updateLocation({
      lat: region.latitude,
      long: region.longitude
    });
  }

  getHelp(){
    return;
  }

  render() {
    return (
      <View style={styles.container}>
        <UserBarContainer
          openControlPanel={this.props.openControlPanel}
        />

        <MapView
          style={{height: 450, margin: 5}}
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
        />

        <BottomBarContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

export default Help;