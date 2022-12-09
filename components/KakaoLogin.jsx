import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
import {View, LogBox, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {APIURL} from '../config/key';
import {setData} from '../config/asyncStorage';

LogBox.ignoreLogs(['Remote debugger']);

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const RestApiKey = '77fdc6db412130cd33e2a3ccc265db4a';
// const redirectUrl = 'http://localhost:3000';
const redirectUrl = 'https://www.kakaocorp.com/page/';
// const redirectUrl =
//   'http://ec2-3-39-236-36.ap-northeast-2.compute.amazonaws.com:8080/login/oauth2/code/kakao';
const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${RestApiKey}&redirect_uri=${redirectUrl}&response_type=code`;
// const kakaoUrl =
//   'https://kauth.kakao.com/oauth/authorize?client_id=77fdc6db412130cd33e2a3ccc265db4a&redirect_uri=http://ec2-3-39-236-36.ap-northeast-2.compute.amazonaws.com:8080/login/oauth2/code/kakao&response_type=code';

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

          return res.data.isNew;
        })
        .then(res => {
          if (res) {
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
          uri: kakaoUrl,
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
