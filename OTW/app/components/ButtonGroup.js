import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Button from './Button';

// NOTE: buttons argument is of structure [{key: 'home'}, {key: 'signIn'}]
const ButtonGroup = ({routes, handleNavigate}) => {
  const buttons = routes.map(route => (<Button
    label={route.key}
    onPress={handleNavigate({
      type: 'push',
      route
    })}
  />));
  return (
    <View styles={styles.container}>
      <Button label='Back' onPress={handleNavigate({type: pop})} />
      {buttons}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default ButtonGroup;