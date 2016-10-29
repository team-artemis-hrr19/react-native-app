import React, {Component} from 'react';
import {
  TabBarIOS,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

// const UserBar = () => (
//   <TabBarIOS>
//     <TabBarIOS.Item
//       title="Help"
//       unselectedTintColor="yellow"
//     >
//     </TabBarIOS.Item>
//   </TabBarIOS>
// );

// var styles = StyleSheet.create({
//   tabContent: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   tabText: {
//     color: 'white',
//     margin: 50,
//   },
// });
//
class UserBar extends Component {
  render() {
    const user = this.props.user
    if (user) {
       return (
      <View>
        <Text>
          Current User: {user && user.get('name')}
        </Text>
        <Image
          source={{uri: user && user.get('photo')}}
          style={{width: 40, height: 40, borderRadius: 20}}
        />
      </View>
    );
    } else {
      return (<View><Text>Current User: Guest</Text></View>)
    }
  }
}

export default UserBar;