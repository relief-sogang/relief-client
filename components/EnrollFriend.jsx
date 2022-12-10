import axios from 'axios';
import React, {useRef, useState} from 'react';
import {TextInput, View, Text, Button, TouchableOpacity} from 'react-native';
import {APIURL} from '../config/key';
import {EnrollStyle, SettingStyle} from '../styleSheets';
import SaveComp from './SaveComp';
import SettingHeader from './SettingHeader';
import client from '../config/axios';
import {getData} from '../config/asyncStorage';

const EnrollFriend = ({navigation, route}) => {
  // name, phone
  const [friends, setFriends] = useState([]);
  const [inputs, setInputs] = useState({
    name: '',
    id: '',
    message: '',
  });
  const {name, id, message} = {inputs};

  const onChangeText = (name, text) => {
    setInputs({
      ...inputs,
      [name]: text,
    });
  };

  const sendRequest = async () => {
    const {id, name, message} = inputs;

    if (!id || !name || !message) {
      alert('모든 정보를 입력해주세요!');
      return;
    }

    const userId = await getData('userId');

    await client
      .post('/api/command/guardian/request', {
        userId,
        guardianId: id,
        guardianName: name,
        message,
      })
      .then(res => {
        if (res.data.code == 'SUCCESS') {
          // 성공
          alert('보호자 등록 성공');
          navigation.navigate('보호자 관리');
          return;
        } else if (res.data.code === 'NOT_EXIST') {
          // 실패
          alert('존재하지 않은 아이디 입니다.');
        } else if (res.data.code === 'DUPLICATE_NAME') {
          alert('이미 해당 이름으로 등록된 보호자가 있습니다.');
        } else if (res.data.code === 'DUPLICATE_GUARDIAN') {
          alert('이미 등록된 보호자 입니다.');
        }
      });
  };

  return (
    <View style={SettingStyle.settingWrap}>
      <View style={SettingStyle.settingBox}>
        <SettingHeader text="보호자 등록" navigation={navigation} />

        <View style={EnrollStyle.enrollBox}>
          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>보호자 이름</Text>
          </View>

          <View style={EnrollStyle.enrollInputBox}>
            <TextInput
              placeholder="등록할 보호자의 이름을 지정해주세요."
              style={[EnrollStyle.enrollInput, {width: '100%'}]}
              value={name}
              name="name"
              onChangeText={text => onChangeText('name', text)}
            />
          </View>
        </View>

        <View style={EnrollStyle.enrollBox}>
          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>보호자 ID</Text>
          </View>

          <View style={EnrollStyle.enrollInputBox}>
            <TextInput
              placeholder="등록할 보호자의 ID를 입력 해주세요."
              style={[EnrollStyle.enrollInput, {width: '100%'}]}
              value={id}
              name="id"
              onChangeText={text => onChangeText('id', text)}
            />
          </View>
        </View>

        <View style={EnrollStyle.enrollBox}>
          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>보호자 신청 메시지</Text>
          </View>
          <View style={EnrollStyle.enrollInputBox}>
            <TextInput
              style={EnrollStyle.enrollBigInput}
              multiline={true}
              placeholder="보호자 신청 메시지를 작성해주세요."
              value={message}
              name="message"
              onChangeText={text => onChangeText('message', text)}
            />
          </View>
        </View>

        <SaveComp
          text1={'취소'}
          text2={'저장'}
          navigation={navigation}
          method2={sendRequest}
        />
      </View>
    </View>
  );
};

export default EnrollFriend;
