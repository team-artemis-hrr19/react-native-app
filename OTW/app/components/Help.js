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
      <View>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  },
  buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
  },
  button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'lightblue',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
  },
});

export default Help;