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
import Icon from 'react-native-vector-icons/FontAwesome';

const RestApiKey = process.env.REACT_APP_REST_API_KEY;
const redirectUrl = 'http://localhost:3000/kakaoLogin';
const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${RestApiKey}&redirect_uri=${redirectUrl}&response_type=code`;

const Login = ({navigation, route}) => {

  const handler = () => {
    console.log("qwer")
    console.log("url : " + url)
  }

  useEffect(() => {
    console.log('asdf')
    Linking.addEventListener('url', handler);
  }, []);

  return (
    <View style={LoginPageStyles.Rectangle1}>
      <View style={LoginPageStyles.Rectangle2}>
        <Text style={LoginPageStyles.Text1}>relief로 안심하세요!</Text>

        <View style={LoginPageStyles.loginBox}>
          <Text style={{color: '#747474'}}>소셜 간편 로그인</Text>
          <Icon
            name="rocket"
            size={20}
            color="#4E52B4"
            style={{marginLeft: 5}}
          />
        </View>
        <TouchableOpacity
          style={LoginPageStyles.KakaoView}
          // onPress={() => Linking.openURL(kakaoUrl)}>
          onPress={() => navigation.navigate('카카오로그인')}>
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
        <TouchableOpacity
          style={LoginPageStyles.GoogleView}
          onPress={() => navigation.navigate('구글로그인')}>
          <Image
            style={LoginPageStyles.icon}
            source={require('../assets/images/google.png')}
          />
          <Text style={LoginPageStyles.Text2}>구글로 계속하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
