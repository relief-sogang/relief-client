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

  const deleteFriend = async () => {
    const userId = await getData('userId');
    await client
      .post('/api/command/mapping/delete', {
        userId,
        deletedId: id,
        type: target === '보호자' ? 'GUARDIAN' : 'PROTEGE'
      })
      .then(res => {
        const code = res.data.code;
        if (code === 'SUCCESS') {
          alert(`${target}가 삭제되었습니다.`);
          if (target === '피보호자')
            alert('보호자 요청 수락 페이지에서 다시 피보호자로 등록할 수 있습니다.')
          navigation.navigate(`${target} 관리`);
        }
      })
  };

  const editFriend = async () => {
    const userId = await getData('userId');
    await client
      .post('/api/command/' + (target === '보호자' ? 'guardian' : 'protege') + '/rename',
      target === '보호자' ? {
        userId,
        guardianId: id,
        rename,
      } : {
        userId,
        protegeId: id,
        rename,
      })
      .then(res => {
        const code = res.data.code;
        if (code === 'SUCCESS') {
          alert(`${target} 이름이 수정되었습니다.`);
          navigation.navigate(`${target} 관리`);
        } else if (code === 'DUPLICATE_NAME') {
          alert(`해당 이름의 ${target}가 이미 존재합니다.`);
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
