import React, {useEffect, useRef, useState} from 'react';
import {BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';
import {Text, SafeAreaView} from 'react-native';

const MyWebView = () => {
  const BASE_URI = 'http://localhost:3000/';
  const [webview, setWebview] = useState();
  const webviewRef = useRef();

  const handleOnMessage = ({nativeEvent: {data}}) => {
    // data에 웹뷰에서 보낸 값이 들어옵니다.
    console.log(data);
    setWebview(data);
  };
  const handleSetRef = _ref => {
    webviewRef.current = _ref;
  };
  const onLoad = () => {
    console.log('load');
  };

  return (
    <>
      <WebView
        // onLoadEnd={handleEndLoading}
        onMessage={handleOnMessage}
        ref={handleSetRef}
        source={{uri: BASE_URI}}
        style={{flex: 1}}
        javaScriptEnabled={true}
        useWebView2={true}
        onLoad={onLoad}
      />
    </>
  );
};

export default MyWebView;
