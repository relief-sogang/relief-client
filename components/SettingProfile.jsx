import React, {useRef, useState, useEffect} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {EnrollStyle, SettingStyle, styles} from '../styleSheets';
import SaveComp from './SaveComp';
import SettingHeader from './SettingHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getData} from '../config/asyncStorage';

const SettingProfile = ({navigation, route}) => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [inputs, setInputs] = useState({
    name: '',
    ph1: '',
    ph2: '',
    ph3: '',
  });
  const {name, ph1, ph2, ph3} = inputs;

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  const setUserInfo = async () => {
    const id = await getData('userId');
    const name = await getData('userName');
    const email = await getData('email');

    setUserId(id);
    setUserName(name);
    setUserEmail(email);
    setInputs({
      ...inputs,
      name: name,
    });
  };

  useEffect(() => {
    setUserInfo();
  }, []);

  const onChange = (name, text) => {
    if (name === 'year' && text.length === 4) {
      ref2.current.focus();
    } else if (name === 'month' && text.length === 2) {
      ref3.current.focus();
    } else if (name === 'ph1' && text.length === 3) {
      ref5.current.focus();
    } else if (name === 'ph2' && text.length === 4) {
      ref6.current.focus();
    }
    setInputs({
      ...inputs,
      [name]: text,
    });
  };

  const saveProfileInfo = async () => {
    // todo
  };
  return (
    <ScrollView>
      <View style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="프로필 설정" navigation={navigation} />

          {/* <View style={styles.userInfoBox}>
            <View style={styles.userImgBox}>
              <Icon name="user" color="white" size={70} />
              <View style={styles.userImgBtn}>
                <Icon name="pencil" color="white" size={15} />
              </View>
            </View>
          </View> */}

          <View style={{marginBottom: 20}} />

          <View style={EnrollStyle.enrollBox}>
            <View style={EnrollStyle.enrollHeader}>
              <Text style={styles.profileText}>아이디</Text>
            </View>

            <View
              style={[
                EnrollStyle.enrollInputBox,
                {
                  backgroundColor: 'rgba(218, 218, 218, .3)',
                  padding: 10,
                },
              ]}>
              <Text>{userId}</Text>
            </View>
          </View>
          <View style={EnrollStyle.enrollBox}>
            <View style={EnrollStyle.enrollHeader}>
              <Text style={styles.profileText}>이메일</Text>
            </View>

            <View
              style={[
                EnrollStyle.enrollInputBox,
                {
                  backgroundColor: 'rgba(218, 218, 218, .3)',
                  padding: 10,
                },
              ]}>
              <Text>{userEmail}</Text>
            </View>
          </View>

          <View style={EnrollStyle.enrollBox}>
            <View style={EnrollStyle.enrollHeader}>
              <Text style={styles.profileText}>이름</Text>
            </View>

            <View style={EnrollStyle.enrollInputBox}>
              <TextInput
                placeholder="이름을 작성해주세요."
                style={[EnrollStyle.enrollInput, {width: '100%'}]}
                onChangeText={text => onChange('name', text)}
                name="name"
                value={name}
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
                name="ph1"
                value={ph1}
                onChangeText={text => onChange('ph1', text)}
                ref={ref4}
              />
              <TextInput
                style={EnrollStyle.enrollInput}
                name="ph2"
                value={ph2}
                onChangeText={text => onChange('ph2', text)}
                ref={ref5}
              />
              <TextInput
                style={EnrollStyle.enrollInput}
                name="ph3"
                value={ph3}
                onChangeText={text => onChange('ph3', text)}
                ref={ref6}
              />
            </View>
          </View>

          <SaveComp
            text1={'취소'}
            text2={'저장'}
            navigation={navigation}
            method2={saveProfileInfo}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingProfile;
