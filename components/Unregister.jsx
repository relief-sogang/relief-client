import React, {useRef, useState} from 'react';
import {TextInput, View, Text, Button, TouchableOpacity} from 'react-native';
import {
  EnrollStyle,
  SettingStyle,
  styles,
  LoginPageStyles,
} from '../styleSheets';
import SaveComp from './SaveComp';
import SettingHeader from './SettingHeader';
import client from '../config/axios';
import {APIURL} from '../config/key';

const Unregister = ({navigation, route}) => {
  const [isPwdRight, setIsPwdRight] = useState(false);
  const [inputs, setInputs] = useState({
    pwd: '',
    pwd2: '',
  });
  const {pwd, pwd2} = inputs;

  const onChangeText = (name, text) => {
    if (name === 'pwd2') {
      if (text === pwd) {
        setIsPwdRight(true);
      } else {
        setIsPwdRight(false);
      }
    }
    setInputs({
      ...inputs,
      [name]: text,
    });
  };

  const sendRequest = async () => {
    if (!pwd) {
      alert('비밀번호를 입력해주세요!');
      return;
    }
    if (!pwd2) {
      alert('비밀번호를 확인해주세요!');
      return;
    }
    if (!isPwdRight) {
      alert('새 비밀번호가 일치하지 않습니다.');
      return;
    }

    await client
      .post(`${APIURL}/api/command/member/withdraw`, {
        password: pwd,
      })
      .then(res => {
        if (res.data.code === 'SUCCESS') {
          alert('회원 탈퇴 완료');
          navigation.navigate('로그인');
        } else if (res.data.code === 'FAIL') {
          alert('비밀번호가 일치하지 않습니다.');
        }
      });
  };

  return (
    <View style={SettingStyle.settingWrap}>
      <View style={SettingStyle.settingBox}>
        <SettingHeader text="회원 탈퇴" navigation={navigation} />

        <View style={styles.unregisterBox}>
          <Text style={styles.unregisterDesc}>
            회원 탈퇴를 하면 모든 정보가 사라집니다.
          </Text>
          <Text style={styles.unregisterDesc}>
            회원 탈퇴를 원하시면 비밀번호 확인이 필요합니다.
          </Text>
        </View>

        <View style={EnrollStyle.enrollBox}>
          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>비밀번호</Text>
          </View>

          <View style={EnrollStyle.enrollInputBox}>
            <TextInput
              style={[EnrollStyle.enrollInput, {width: '100%'}]}
              name="pwd"
              value={pwd}
              onChangeText={text => onChangeText('pwd', text)}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={EnrollStyle.enrollBox}>
          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>비밀번호 확인</Text>
            {!isPwdRight && pwd2 && (
              <Text
                style={[LoginPageStyles.checkValidIdText, {color: '#F54242'}]}>
                비밀번호가 일치하지 않습니다.
              </Text>
            )}
          </View>

          <View style={EnrollStyle.enrollInputBox}>
            <TextInput
              style={[EnrollStyle.enrollInput, {width: '100%'}]}
              name="pwd2"
              value={pwd2}
              onChangeText={text => onChangeText('pwd2', text)}
              secureTextEntry={true}
            />
          </View>
        </View>
        <Button title={'탈퇴'} onPress={sendRequest}></Button>

        <SaveComp
          text1={'취소'}
          text2={'탈퇴'}
          navigation={navigation}
          method2={sendRequest}
        />
      </View>
    </View>
  );
};

export default Unregister;
