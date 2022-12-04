import React, {useEffect, useState} from 'react';

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
import MessageRecords from './components/MessageRecords';

import SplashScreen from 'react-native-splash-screen';
import axios from 'axios';
import {APIURL} from './config/key';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  useEffect(() => {
    // api sample
    axios
      .post(`${APIURL}/api/query/sample`, {
        id: 1,
      })
      .then(res => {
        console.log(res.data);
      });
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
        <Stack.Screen name="도움 요청 메시지 내역" component={MessageRecords} />

        {/* 마이 페이지 */}
        <Stack.Screen name="My page" component={MyPage} />
        <Stack.Screen name="프로필 설정" component={SettingProfile} />
        <Stack.Screen name="회원 탈퇴" component={Unregister} />
        <Stack.Screen name="스크랩" component={Scrap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
