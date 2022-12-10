import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {EnrollStyle, SettingStyle, styles} from '../styleSheets';
import SaveComp from './SaveComp';
import SettingHeader from './SettingHeader';

const DetailFriend = ({navigation, route}) => {
  const [nickname, setNickname] = useState(route.params.nickname);
  const name = route.params.name;
  const email = route.params.email;
  const target = route.params.target;

  const deleteFriend = async () => {};

  const editFriend = async () => {};

  return (
    <View style={SettingStyle.settingWrap}>
      <View style={SettingStyle.settingBox}>
        <SettingHeader text={`${target} 정보`} navigation={navigation} />

        <View style={EnrollStyle.enrollBox}>
          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>닉네임</Text>
          </View>

          <View style={EnrollStyle.enrollInputBox}>
            <TextInput
              placeholder="보호자의 닉네임을 지정하세요!"
              style={[EnrollStyle.enrollInput, {width: '100%'}]}
              value={nickname}
              onChangeText={text => {
                setNickname(text);
              }}
            />
          </View>
        </View>
        <View style={EnrollStyle.enrollBox}>
          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>이름</Text>
          </View>

          <View
            style={[
              EnrollStyle.enrollInputBox,
              {backgroundColor: 'rgba(218, 218, 218, .3)', padding: 10},
            ]}>
            <Text>{name}</Text>
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
