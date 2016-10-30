import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const Badge = ({user}) => (
  <View style={styles.badge}>
    <Image
      source={{uri: user && user.get('photo')}}
      style={[styles.image, styles.shadow]}
    />
    <Text style={[styles.user]}>
      {user ? user.get('name') : 'Guest'}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  user: {
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'flex-end',
    margin: 8
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#76608a',
    height: 45,
    borderRadius: 8
  }
});

export default Badge;