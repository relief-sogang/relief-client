// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   Button,
// } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const HomeScreen = ({navigation, route}) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//     </View>
//   );
// };

// const ProfileScreen = ({navigation, route}) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>This is profile</Text>
//     </View>
//   );
// };

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     // <View style={styles.container}>
//     //   <View style={styles.box1}></View>
//     //   <View style={styles.box2}></View>
//     //   <View style={styles.box3}></View>
//     // </View>
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   box1: {
//     flex: 1,
//     backgroundColor: 'red',
//   },
//   box2: {
//     flex: 1,
//     backgroundColor: 'blue',
//   },
//   box3: {
//     flex: 1,
//     backgroundColor: 'green',
//   },
// });

// export default App;

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Platform,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import EnrollFriend from './components/EnrollFriend';
import SafetySurvice from './components/SafetySurvice';
import FriendsList from './components/FriendsList';

const Stack = createNativeStackNavigator();

// async function requestPermission() {
//   try {
//     if (Platform.OS === 'ios') {
//       return await Geolocation.requestAuthorization('always');
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }
const App = () => {
  // const [location, setLocation] = useState();
  // useEffect(() => {
  //   requestPermission().then(result => {
  //     if (result === 'granted') {
  //       Geolocation.getCurrentPosition(
  //         pos => {
  //           console.log(pos);
  //         },
  //         error => {
  //           console.log(error);
  //         },
  //         {
  //           enableHighAccuracy: true,
  //           timeout: 3600,
  //           maximumAge: 3600,
  //         },
  //       );
  //     }
  //   });
  // }, []);

  // if (!location) {
  //   return (
  //     <View>
  //       <Text>Splash Screen</Text>
  //     </View>
  //   );
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {backgroundColor: 'white'},
          headerStyle: {
            // height: 20,
            // backgroundColor: '#F9DDEE',
            backgroundColor: 'white',
          },
          headerTitleStyle: {color: '#B5B5B5', fontsize: 12},
          headerTitleAlign: 'center',
        }}>
        {/* Home: Map */}
        <Stack.Screen name="Home" component={Home} />

        {/* 친구 등록 페이지 */}
        <Stack.Screen name="안심 서비스 설정" component={SafetySurvice} />
        <Stack.Screen name="보호자 등록" component={EnrollFriend} />
        <Stack.Screen name="보호자 목록" component={FriendsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor: 'red',
  },
  box2: {
    flex: 1,
    backgroundColor: 'blue',
  },
  box3: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default App;
