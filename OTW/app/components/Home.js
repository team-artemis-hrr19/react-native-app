//test Home component
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>
        Hello World!
        This is the Home Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default Home;