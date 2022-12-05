import axios from 'axios';
import React, {useRef, useState} from 'react';
import {TextInput, View, Text, Button, TouchableOpacity} from 'react-native';
import {APIURL} from '../config/key';
import {EnrollStyle, SettingStyle} from '../styleSheets';
import SaveComp from './SaveComp';
import SettingHeader from './SettingHeader';

const EnrollFriend = ({navigation, route}) => {
  // name, phone
  const [friends, setFriends] = useState([]);
  const [inputs, setInputs] = useState({
    name: '',
    first: '',
    second: '',
    third: '',
    id: '',
    message: '',
  });
  const {name, first, second, third, id, message} = {inputs};
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const onChange = (name, value) => {
    // if (name === 'first' && value.length === 3) {
    //   ref2.current.focus();
    // } else if (name === 'second' && value.length === 4) {
    //   ref3.current.focus();
    // }

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const sendRequest = async () => {
    const res = await axios.post(`${APIURL}/api/command/guardian/request`, {
      guardianId: id,
      guardianName: name,
      RequestMessage: message,
    });

    if (res.data.code == 1) {
      // 성공
    } else {
      // 실패
    }
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
              onChangeText={text => onChange('name', text)}
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
              onChangeText={text => onChange('id', text)}
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
              onChangeText={text => onChange('message', message)}
            />
          </View>
        </View>

        <SaveComp text1={'취소'} text2={'저장'} navigation={navigation} />
      </View>
    </View>
  );
};

export default EnrollFriend;
