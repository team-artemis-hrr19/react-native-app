import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';

import Button from './Button';

const LandingPage = ({handleNavigate}) => (
    <Image source={require('../assets/background2_Fotor.png')} style={styles.background}>
    <Text>OTW</Text>
    <Text>never be alone</Text>
    <Button label='Sign In'/>
    <Button label='Sign Up'/>
  </Image>
)

const styles = StyleSheet.create({
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    resizeMode: 'contain'
  }
});

export default LandingPage;