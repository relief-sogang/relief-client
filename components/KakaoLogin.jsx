import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
import {View, LogBox, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {APIURL} from '../config/key';
import {getData, setData} from '../config/asyncStorage';
import {KAKAO_URL} from '../config/key';

LogBox.ignoreLogs(['Remote debugger']);

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const KakaoLogin = ({navigation: {navigate}}) => {
  const parseAuthCode = async url => {
    const exp = 'code='; //url에 붙어 날라오는 인가코드는 code=뒤부터 parse하여 get
    const startIndex = url.indexOf(exp); //url에서 "code="으로 시작하는 index를 찾지 못하면 -1반환

    if (startIndex !== -1) {
      const authCode = url.substring(startIndex + exp.length);
      console.log('access code :: ' + authCode);

      await axios
        .get(`${APIURL}/login/oauth2/code/kakao?code=${authCode}`)
        .then(res => {
          setData('accessToken', res.data.accessToken);
          setData('refreshToken', res.data.refreshToken);
          setData('email', res.data.email);
          setData('provider', 'kakao');

          return res.data.isNew;
        })
        .then(async res => {
          const id = await getData('userId');

          if (res || !id) {
            navigate('회원가입', {screen: '회원가입'});
          } else {
            navigate('Home', {screen: 'Home'});
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <View style={{flex: 1}}>
      <WebView
        originWhitelist={['*']}
        scalesPageToFit={false}
        style={{marginTop: 30}}
        source={{
          uri: KAKAO_URL,
        }}
        injectedJavaScript={runFirst}
        javaScriptEnabled={true}
        onMessage={event => {
          parseAuthCode(event.nativeEvent['url']);
        }}

        // onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
      />
    </View>
  );
};

export default KakaoLogin;
