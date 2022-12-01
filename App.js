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
import MyPage from './components/MyPage';
import SettingProfile from './components/SettingProfile';
import Unregister from './components/Unregister';
import Scrap from './components/Scrap';
import DetailFriend from './components/DetailFriend';
import HelpMessageScreen from './components/HelpMessageScreen';
import ManageMessage from './components/ManageMessage';
import Login from './components/Login';

import SplashScreen from 'react-native-splash-screen';
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

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

        {/* 보호자/피보호자 관리 스크린 */}
        <Stack.Screen name="보호자/피보호자 관리" component={SafetySurvice} />
        <Stack.Screen name="보호자 등록" component={EnrollFriend} />
        <Stack.Screen
          name="보호자 관리"
          component={FriendsList}
          initialParams={{target: '보호자'}}
        />
        <Stack.Screen
          name="피보호자 관리"
          component={FriendsList}
          initialParams={{target: '피보호자'}}
        />
        <Stack.Screen name="피보호자/보호자 정보" component={DetailFriend} />

        {/* 도움 요청 메시지 관리 스크린 */}
        <Stack.Screen name="도움 요청 메시지" component={HelpMessageScreen} />
        <Stack.Screen name="도움 요청 메시지 관리" component={ManageMessage} />
        <Stack.Screen
          name="도움 요청 메시지 내역"
          component={HelpMessageScreen}
        />

        {/* 마이 페이지 */}
        <Stack.Screen name="My page" component={MyPage} />
        <Stack.Screen name="프로필 설정" component={SettingProfile} />
        <Stack.Screen name="회원 탈퇴" component={Unregister} />
        <Stack.Screen name="스크랩" component={Scrap} />

        {/* 로그인 */}
        <Stack.Screen name="로그인" component={Login} />
        
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
