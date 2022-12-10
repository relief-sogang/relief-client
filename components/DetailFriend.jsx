import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {getData} from '../config/asyncStorage';
import client from '../config/axios';
import {EnrollStyle, SettingStyle, styles} from '../styleSheets';
import SaveComp from './SaveComp';
import SettingHeader from './SettingHeader';

const DetailFriend = ({navigation, route}) => {
  const [rename, setRename] = useState(route.params.name);
  const id = route.params.id;
  const email = route.params.email;
  const target = route.params.target;

  const deleteFriend = async () => {};

  const editFriend = async () => {
    const userId = await getData('userId');
    await client
      .post('/api/command/guardian/rename', {
        userId,
        guardianId: id,
        rename,
      })
      .then(res => {
        const code = res.data.code;
        if (code === 'SUCCESS') {
          alert(`보호자 이름이 수정되었습니다.`);
          navigation.navigate('보호자 관리');
        } else if (code === 'DUPLICATE_NAME') {
          alert('해당 이름의 보호자가 이미 존재합니다.');
        }
      });
  };

  return (
    <View style={SettingStyle.settingWrap}>
      <View style={SettingStyle.settingBox}>
        <SettingHeader text={`${target} 정보`} navigation={navigation} />

        <View style={EnrollStyle.enrollBox}>
          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>이름</Text>
          </View>

          <View style={EnrollStyle.enrollInputBox}>
            <TextInput
              placeholder="보호자의 이름을 지정하세요!"
              style={[EnrollStyle.enrollInput, {width: '100%'}]}
              value={rename}
              onChangeText={text => {
                setRename(text);
              }}
            />
          </View>
        </View>
        <View style={EnrollStyle.enrollBox}>
          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>아이디</Text>
          </View>

          <View
            style={[
              EnrollStyle.enrollInputBox,
              {backgroundColor: 'rgba(218, 218, 218, .3)', padding: 10},
            ]}>
            <Text>{id}</Text>
          </View>
        </View>
        <View style={EnrollStyle.enrollBox}>
          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>이메일</Text>
          </View>

          <View
            style={[
              EnrollStyle.enrollInputBox,
              {backgroundColor: 'rgba(218, 218, 218, .3)', padding: 10},
            ]}>
            <Text>{email}</Text>
          </View>
        </View>
        <SaveComp
          text1={'삭제'}
          text2={'저장'}
          navigation={navigation}
          method1={deleteFriend}
          method2={editFriend}
        />
      </View>
    </View>
  );
};

export default DetailFriend;
