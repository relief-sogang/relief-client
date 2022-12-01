import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {EnrollStyle, SettingStyle, styles} from '../styleSheets';
import Friend from './atomic/Friend';
import MenuBig from './atomic/MenuBig';
import SettingHeader from './SettingHeader';

const frineds = [
  {
    nickname: '엄마',
    name: '봉미선',
    id: 'mother',
  },
  {
    nickname: '아빠',
    name: '신형만',
    id: 'fater',
  },
  {
    nickname: '철수',
    name: '김철수',
    id: 'gildong',
  },
];
const FriendsList = ({navigation, route}) => {
  const target = route.params.target;
  const onPress = ({name, email, nickname}) => {
    navigation.navigate('피보호자/보호자 정보', {
      name,
      email,
      nickname,
      target,
    });
  };

  const goEnroll = text => {
    navigation.navigate('보호자 등록');
  };

  return (
    <>
      <View style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text={`${target} 관리`} navigation={navigation} />

          {target === '보호자' && (
            <>
              <View style={{marginTop: 15}} />
              <MenuBig onPress={goEnroll} text="보호자 등록" />
            </>
          )}

          <View style={EnrollStyle.enrollBox}>
            <View style={EnrollStyle.enrollHeader}>
              <Text style={EnrollStyle.enrollText}>{target} 목록</Text>
            </View>

            {frineds.map((data, idx) => (
              <Friend
                key={idx}
                onPress={onPress}
                num={idx + 1}
                nickname={data.nickname}
                name={data.name}
                email={data.id}
              />
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default FriendsList;
