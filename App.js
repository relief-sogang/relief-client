import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const ProfileScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is profile</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <View style={styles.container}>
    //   <View style={styles.box1}></View>
    //   <View style={styles.box2}></View>
    //   <View style={styles.box3}></View>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
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
