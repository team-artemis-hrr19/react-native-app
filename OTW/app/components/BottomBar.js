import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Button from './Button';

const BottomBar = ({location}) => {
    console.log('location', location);
  return (
  <View>
    <Text>{location && location.get('lat')}, {location && location.get('long')}</Text>
    <Button
      label='Request Help'
      onPress={()=> console.log}
    />
  </View>
)};

export default BottomBar;