// import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {View, LogBox, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import axios from 'axios';
import {APIURL} from '../config/key';

LogBox.ignoreLogs(['Remote debugger']);

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const CLIENT_ID =
  '2495705380-smb07aref0lp249g9g7o2vhjjb07nkip.apps.googleusercontent.com';
const AUTHORIZE_URI = 'https://accounts.google.com/o/oauth2/v2/auth';
const REDIRECT_URL = 'https://about.google/';
const RESPONSE_TYPE = 'code';
const SCOPE = 'openid%20profile%20email';
const ACCESS_TYPE = 'offline';
const OAUTH_URL = `${AUTHORIZE_URI}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&access_type=${ACCESS_TYPE}`;

const customUserAgent = 'customUserAgent';

const GoogleLogin = ({navigation: {navigate}}) => {
  const parseAuthCode = async url => {
    const startExp = 'code='; //url에 붙어 날라오는 인가코드는 code=뒤부터 parse하여 get
    const endExp = '&scope=';
    const startIndex = url.indexOf(startExp); //url에서 "code="으로 시작하는 index를 찾지 못하면 -1반환
    const endIndex = url.indexOf(endExp);
    if (startIndex !== -1) {
      const authCode = url.substring(startIndex + startExp.length, endIndex);
      console.log('access code :: ' + authCode);

      await axios
        .get(`${APIURL}/login/oauth2/code/google?code=${authCode}`)
        .then(res => {
          console.log(res);
        });

      //   await axios
      //     .post('본인 url', {
      //       params: {
      //         code: authCode,
      //       },
      //     })
      //     .then(res =>
      //       AsyncStorage.setItem(
      //         'userNumber',
      //         JSON.stringify(res['data']['userId']),
      //       ),
      //     );

      //   navigate('Home', {screen: 'Home'});
      navigate('회원가입', {screen: '회원가입'});
    }
  };

  return (
    <View style={{flex: 1}}>
      <WebView
        originWhitelist={['*']}
        scalesPageToFit={false}
        style={{marginTop: 30}}
        source={{
          uri: OAUTH_URL,
        }}
        userAgent={customUserAgent}
        injectedJavaScript={runFirst}
        javaScriptEnabled={true}
        onMessage={event => {
          parseAuthCode(event.nativeEvent['url']);
        }}
      />
    </View>
  );
};

export default GoogleLogin;
