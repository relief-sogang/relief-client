import axios from 'axios';
import React, {useRef, useState} from 'react';
import {TextInput, View, Text, TouchableOpacity, Button} from 'react-native';
import {APIURL} from '../config/key';
import {EnrollStyle, LoginPageStyles, styles} from '../styleSheets';

const Register = ({navigation, route}) => {
  const [isValidId, setIsValidId] = useState(false);
  const [inputs, setInputs] = useState({
    id: '',
    ph1: '',
    ph2: '',
    ph3: '',
  });
  const {id, ph1, ph2, ph3} = inputs;
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const onChangeText = (name, text) => {
    if (name === 'id' && isValidId) {
      setIsValidId(false);
    }

    if (name === 'ph1' && text.length === 3) {
      ref2.current.focus();
    } else if (name === 'ph2' && text.length === 4) {
      ref3.current.focus();
    }

    setInputs({
      ...inputs,
      [name]: text,
    });
  };

  const checkValudId = async () => {
    // console.log('id: ', id);

    if (!id) {
      alert('아이디를 입력해주세요.');
      return;
    }

    await axios
      .post(`${APIURL}/api/query/user/checkid`, {
        id: id,
      })
      .then(res => {
        console.log(res.data);
        if (res.data.isExist) {
          alert('이미 사용 중인 아이디 입니다.');
        } else {
          setIsValidId(true);
        }
      });
  };

  const onRegister = async () => {
    // 임시
    navigation.navigate('Home', {screen: 'Home'});

    if (!isValidId || !id) {
      alert('아이디를 확인해주세요!');
      return;
    }
    await axios
      .post(`${APIURL}/api/command/member/signupdetail`, {
        id,
        phoneNumber: ph1 + ph2 + ph3,
      })
      .then(res => {
        if (res.data.code == 1) {
          // 성공
          navigation.navigate('Home', {screen: 'Home'});
        }
      });
  };
  return (
    <>
      <View style={LoginPageStyles.Rectangle1}>
        <Text style={LoginPageStyles.Text1}>relief로 안심하세요!</Text>
        <View style={LoginPageStyles.registerBox}>
          <View style={LoginPageStyles.registerTextBox}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              추가 입력 정보
            </Text>
          </View>

          <View style={EnrollStyle.enrollBox}>
            <View style={EnrollStyle.enrollHeader}>
              <View style={LoginPageStyles.registerText}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: '#5f5f5f'}}>
                  아이디
                </Text>
                <Text style={{color: 'red', fontSize: 20, marginLeft: 5}}>
                  *
                </Text>
              </View>

              {isValidId ? (
                <View
                  style={[
                    LoginPageStyles.checkValidId,
                    {borderColor: '#04BC00'},
                  ]}>
                  <Text
                    style={[
                      LoginPageStyles.checkValidIdText,
                      {color: '#04BC00'},
                    ]}>
                    중복 확인
                  </Text>
                </View>
              ) : (
                <TouchableOpacity
                  style={LoginPageStyles.checkValidId}
                  onPress={checkValudId}>
                  <Text style={LoginPageStyles.checkValidIdText}>
                    중복 확인
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={EnrollStyle.enrollInputBox}>
              <TextInput
                style={[EnrollStyle.enrollInput, {width: '100%'}]}
                name="id"
                value={id}
                onChangeText={text => onChangeText('id', text)}
              />
            </View>
          </View>

          <View style={EnrollStyle.enrollBox}>
            <View style={EnrollStyle.enrollHeader}>
              <Text style={styles.profileText}>전화번호</Text>
            </View>

            <View style={EnrollStyle.enrollInputBox}>
              <TextInput
                style={EnrollStyle.enrollInput}
                ref={ref1}
                name="ph1"
                value={ph1}
                onChangeText={text => onChangeText('ph1', text)}
              />
              <TextInput
                style={EnrollStyle.enrollInput}
                ref={ref2}
                name="ph2"
                value={ph2}
                onChangeText={text => onChangeText('ph2', text)}
              />
              <TextInput
                style={EnrollStyle.enrollInput}
                ref={ref3}
                name="ph3"
                value={ph3}
                onChangeText={text => onChangeText('ph3', text)}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={LoginPageStyles.registerBtn}
          onPress={onRegister}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            가입하기
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Register;
