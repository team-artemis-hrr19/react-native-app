import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Button from './Button.js';

const route = {
  type: 'push',
  route: {
    key: 'signIn',
    title: 'signIn'
  }
}

const chat = {
  type: 'push',
  route: {
    key: 'groupchat',
    title: 'Group Chat'
  }
}

const invite = {
  type: 'push',
  route: {
    key: 'inviteFriends',
    title: 'Invite Friends'
  }
}

const signUp = {
  type: 'push',
  route: {
    key: 'signUp'
  }
}

const Home = ({_handleNavigate, user}) => {
  console.log('home props', user);
  return (
    <View style={styles.container}>
      <Text>
        Hello World!
        This is the Home Screen
        User: {user && user.get('email')}
      </Text>
      <Button
        onPress={() => _handleNavigate(route)}
        label='Go To SignIn'
      />
      <Button
        onPress={() => _handleNavigate(chat)}
        label="Group Chat"
      />
      <Button
        onPress={() => _handleNavigate(invite)}
        label="Invite Friends"
      />
      <Button
        onPress = {() => _handleNavigate(signUp)}
        label="Sign Up"
      />
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