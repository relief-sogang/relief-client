import React, {useRef, useState} from 'react';
import {TextInput, View, Text, Button, TouchableOpacity} from 'react-native';
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
  });
  const {name, first, second, third, id} = {inputs};
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

  return (
    <View style={SettingStyle.settingWrap}>
      <View style={SettingStyle.settingBox}>
        <SettingHeader text="보호자 등록" />

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

          <View style={EnrollStyle.enrollInputBox}></View>
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

          {/* <View style={EnrollStyle.enrollInputBox}>
            <TextInput
              value={first}
              onChangeText={text => onChange('first', text)}
              style={EnrollStyle.enrollInput}
              placeholder="010"
              ref={ref1}
            />
            <TextInput
              value={second}
              onChangeText={text => onChange('second', text)}
              style={EnrollStyle.enrollInput}
              placeholder="1234"
              ref={ref2}
            />
            <TextInput
              value={third}
              onChangeText={text => onChange('third', text)}
              style={EnrollStyle.enrollInput}
              placeholder="1234"
              ref={ref3}
            />
          </View> */}
        </View>

        <SaveComp text1={'취소'} text2={'저장'} />
      </View>
    </View>
  );
};

export default EnrollFriend;
