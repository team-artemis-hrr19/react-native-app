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
      {user.get('name')}
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
    justifyContent: 'flex-end'
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default Badge;