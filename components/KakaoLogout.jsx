import React from 'react';
import {View, LogBox} from 'react-native';
import {WebView} from 'react-native-webview';
import {LOGOUT_URL, APPROVAL_URL} from '../config/key';

LogBox.ignoreLogs(['Remote debugger']);

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const KakaoLogout = () => {
  const onMessage = e => {
    console.log(e);
  };
  return (
    <View style={{flex: 1}}>
      <WebView
        originWhitelist={['*']}
        scalesPageToFit={false}
        style={{marginTop: 30}}
        source={{
          uri: LOGOUT_URL,
        }}
        injectedJavaScript={runFirst}
        javaScriptEnabled={true}
        // onMessage={event => {
        //   parseAuthCode(event.nativeEvent['url']);
        // }}

        onMessage={onMessage}
        // onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
      />
    </View>
  );
};

export default KakaoLogout;
