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
      <View style={styles.bar}>
        <Image
          source={{uri: user && user.get('photo')}}
          style={styles.image}
        />
        <Text style={styles.user}>
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
  bar: {
    flexDirection: 'row',
    backgroundColor: 'steelblue',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  user: {
    textAlign: 'center',
    margin: 10
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20
  }
})

export default UserBar;