import React, {Component} from 'react';
import {
  TabBarIOS,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Button from './Button';
import HamburgerButton from './HamburgerButton';
import Badge from './Badge';

class UserBar extends Component {
  render() {
    const user = this.props.user
    if (user) {
       return (
      <View style={[styles.bar, styles.shadow]}>
        <View style={styles.badge}>
          <HamburgerButton
            onPress={this.props.openControlPanel}
          />
          <Text style={styles.tagline}>never be alone</Text>
        </View>
       <Badge user={user}/>
      </View>
    );
    } else {
      return (<View><Text>Guest</Text></View>)
    }
  }
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 1
    }
  },
  bar: {
    flexDirection: 'row',
    backgroundColor: 'steelblue',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  user: {
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'flex-end'
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  tagline: {
    marginLeft: 5,
    color: 'white',
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: "#000000",
    textShadowRadius: 1,
    textShadowOffset: {
      height: 1,
      width: 0.5
    }
  }
})

export default UserBar;

