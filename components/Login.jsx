import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import {LoginPageStyles} from '../styleSheets';

// const RestApiKey = '';
// const redirectUrl = 'http://localhost:3000';
// const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${RestApiKey}&redirect_uri=${redirectUrl}&response_type=code`;

const Login = ({navigation, route}) => {
    return (
        <View style={LoginPageStyles.Rectangle1}>
            {/* <a
                href={kakaoUrl}
                style={{
                minWidth: 250,
                padding: '10px 0px',
                borderRadius: 5,
                backgroundColor: '#F1DC11',
                fontSize: 20,
                textDecoration: 'none',
                textAlign: 'center',
                }}>
                카카오 로그인
            </a> */}
            <View style={LoginPageStyles.Rectangle2}>
                <Text style={LoginPageStyles.Text1}>
                    relief로 안심하세요!
                </Text>
                <View style={LoginPageStyles.KakaoView}>
                    <Image
                        style={LoginPageStyles.icon}
                        source={require('../assets/images/kakao.png')}
                    />
                    <Text style={LoginPageStyles.Text2}>
                        카카오톡으로 계속하기
                    </Text>
                </View>
                
                <View style={LoginPageStyles.FacebookView}>
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
                </View>
                <View style={LoginPageStyles.GoogleView}>
                    <Image
                        style={LoginPageStyles.icon}
                        source={require('../assets/images/google.png')}
                    />
                    <Text style={LoginPageStyles.Text2}>
                        구글로 계속하기
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Login;