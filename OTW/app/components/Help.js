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

class Help extends Component {

  onRegionChangeComplete(region) {
    this.props.updateLocation({
      lat: region.latitude,
      long: region.longitude
    });
  }

  getHelp(){

  }

  render() {
    return (
      <View>

        <MapView
          style={{height: 200, margin: 40}}
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
        />

        <TouchableHighlight
          onPress={this.getHelp}
          style={styles.button}
          >
          <Text style={styles.buttonText}> Get Help </Text>
        </TouchableHighlight>
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