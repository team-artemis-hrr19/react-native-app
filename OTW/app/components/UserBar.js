import React, {Component} from 'react';
import {
  TabBarIOS,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Button from './Button';

class UserBar extends Component {
  render() {
    const user = this.props.user
    if (user) {
       return (
      <View style={[styles.bar, styles.shadow]}>
      <Button
        onPress={this.props.openControlPanel}
        label='Hamburger'
      />
        <Image
          source={{uri: user && user.get('photo')}}
          style={[styles.image, styles.shadow]}
        />
        <Text style={[styles.user]}>
          {user.get('name')}
        </Text>
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
    justifyContent: 'center',
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
    borderRadius: 20
  }
})

export default UserBar;