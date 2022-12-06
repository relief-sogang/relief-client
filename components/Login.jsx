import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {LoginPageStyles} from '../styleSheets';
import axios from 'axios';

const RestApiKey = process.env.REACT_APP_REST_API_KEY;
const redirectUrl = 'http://localhost:3000/kakaoLogin';
const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${RestApiKey}&redirect_uri=${redirectUrl}&response_type=code`;

const Login = () => {
  return (
    <View style={LoginPageStyles.Rectangle1}>
      <View style={LoginPageStyles.Rectangle2}>
        <Text style={LoginPageStyles.Text1}>relief로 안심하세요!</Text>
        <TouchableOpacity
          style={LoginPageStyles.KakaoView}
          onPress={() => Linking.openURL(kakaoUrl)}>
          <Image
            style={LoginPageStyles.icon}
            source={require('../assets/images/kakao.png')}
          />
          <Text style={LoginPageStyles.Text2}>카카오톡으로 계속하기</Text>
        </TouchableOpacity>

        {/* <View style={LoginPageStyles.FacebookView}>
                    <Image
                        style={LoginPageStyles.icon}
                        source={require('../assets/images/facebook.png')}
                    />
                    <Text style={LoginPageStyles.Text3}>
                        페이스북으로 계속하기
                    </Text>
                </View>
                <View style={LoginPageStyles.NaverView}>
                    <Image
                        style={LoginPageStyles.icon}
                        source={require('../assets/images/naver.png')}
                    />
                    <Text style={LoginPageStyles.Text3}>
                        네이버로 계속하기
                    </Text>
                </View> */}
        <View style={LoginPageStyles.GoogleView}>
          <Image
            style={LoginPageStyles.icon}
            source={require('../assets/images/google.png')}
          />
          <Text style={LoginPageStyles.Text2}>구글로 계속하기</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
