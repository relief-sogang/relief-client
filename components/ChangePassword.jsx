import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {EnrollStyle, SettingStyle, LoginPageStyles} from '../styleSheets';
import SaveComp from './SaveComp';
import SettingHeader from './SettingHeader';
import axios from 'axios'

const ChangePassword = ({navigation, route}) => {
  const [isValidPwd, setIsValidPwd] = useState(false);
  const [isPwdRight, setIsPwdRight] = useState(false);
  const [inputs, setInputs] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  })
  const {currentPassword, newPassword, confirmNewPassword} = inputs
    
  const onChangeText = (name, text) => {
    if (name === 'newPassword') {
      // 비밀번호 유효성 검사 영문 대소문자, 숫자 8~16자
      var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
      if (regExp.test(text)) {
        setIsValidPwd(true);
      } else {
        setIsValidPwd(false);
      }
    } else if (name === 'confirmNewPassword') {
      if (text === newPassword) {
        setIsPwdRight(true);
      } else {
        setIsPwdRight(false);
      }
    }
    
    setInputs({
      ...inputs,
      [name]: text
    })
  }
    
  
  const sendRequest = async () => {
    // 임시
    // navigation.navigate('Home', {screen: 'Home'});

    if (!currentPassword) {
      alert('현재 비밀번호를 입력해주세요!');
      return;
    }
    if (!newPassword) {
      alert('새 비밀번호를 입력해주세요!');
      return;
    }
    if (!isValidPwd) {
      alert('새 비밀번호를 확인해주세요!');
      return;
    }
    if (!isPwdRight) {
      alert('새 비밀번호가 일치하지 않습니다.');
      return;
    }

    await axios
      .post(`${APIURL}/`, {
        
      })
      .then(res => {
        // 현재 비밀번호가 틀릴 경우 처리

        if (res.data.code == 1) {
          // 성공
          alert('비밀번호가 변경되었습니다.')
          navigation.pop();
        }
      });
  };

  return (
    <ScrollView>
      <View style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="비밀번호 변경" navigation={navigation} />

          <View style={EnrollStyle.enrollBox}>
            
          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>현재 비밀번호</Text>
          </View>

            <View style={EnrollStyle.enrollInputBox}>
              <TextInput
                placeholder="현재 비밀번호"
                style={[EnrollStyle.enrollInput, {width: '100%'}]}
                name='currentPassword'
                value={currentPassword}
                onChangeText={text => onChangeText('currentPassword', text)}
                secureTextEntry={true}
              />
            </View>
          </View>

          <View style={EnrollStyle.enrollBox}>

          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>새 비밀번호</Text>

            {!isValidPwd && newPassword && (
              <Text
                style={[
                  LoginPageStyles.checkValidIdText,
                  {color: '#F54242'},
                ]}>
                영문/숫자 조합 8~16자
              </Text>
            )}
          </View>

            <View style={EnrollStyle.enrollInputBox}>
              <TextInput
                placeholder="새 비밀번호"
                style={[EnrollStyle.enrollInput, {width: '100%'}]}
                name='newPassword'
                value={newPassword}
                onChangeText={text => onChangeText('newPassword', text)}
                secureTextEntry={true}
              />
            </View>
          </View>
          
          <View style={EnrollStyle.enrollBox}>

          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>새 비밀번호 확인</Text>

            {isValidPwd && !isPwdRight && confirmNewPassword && (
              <Text
                style={[
                  LoginPageStyles.checkValidIdText,
                  {color: '#F54242'},
                ]}>
                비밀번호가 일치하지 않습니다.
              </Text>
            )}
          </View>

            <View style={EnrollStyle.enrollInputBox}>
              <TextInput
                placeholder="새 비밀번호 확인"
                style={[EnrollStyle.enrollInput, {width: '100%'}]}
                name='confirmNewPassword'
                value={confirmNewPassword}
                onChangeText={text => onChangeText('confirmNewPassword', text)}
                secureTextEntry={true}
              />
            </View>
          </View>
          <SaveComp text1={'취소'} text2={'변경'} navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ChangePassword;
