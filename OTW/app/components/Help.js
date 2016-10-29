import React, { Component } from 'react';
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

class Help extends Component {

  onRegionChangeComplete(region) {
    this.props.updateLocation({
      lat: region.latitude,
      long: region.longitude
    });
  }

  getHelp(){
    return
  }

  render() {
    return (
      <View style={styles.container}>
        <UserBarContainer
          openControlPanel={this.props.openControlPanel}
        />

        <MapView
          style={{height: 450, margin: 20}}
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
        />

        <Button
          label='Get Help'
          onPress={this.getHelp.bind(this)}
          style={styles.button}
        />
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