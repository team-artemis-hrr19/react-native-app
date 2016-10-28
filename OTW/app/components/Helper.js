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

class Helper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userWhoNeedsHelp: {
        location:[{
          title: 'persons name',
          latitude: 37.785092,
          longitude: -122.403241,
          animateDrop: true,
        }],
        message: 'something here'
      }    
    };
  }
 

  onRegionChangeComplete(region) {
    console.log(region.longitude);
    console.log(region.latitude);
  }

  render() {
    return (
      <View>

        <MapView
          style={{height: 200, margin: 40}}
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChangeComplete={this.onRegionChangeComplete}
          annotations={this.state.userWhoNeedsHelp.location}
        />
          

        <TouchableHighlight 
          onPress={this.confirmHelp}
          style={styles.button}
          >
          <Text style={styles.buttonText}> Help is On The Way </Text>
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

module.exports = Helper;