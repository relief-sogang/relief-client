import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {EnrollStyle, SettingStyle} from '../styleSheets';
import SettingHeader from './SettingHeader';
import MenuBig from './atomic/MenuBig';

const menu = [
  '보호자 등록',
  '보호자 관리',
  '피보호자 관리',
  // '보호자 요청 수락',
];

const SafetySurvice = ({navigation, route}) => {
  const onPress = text => {
    navigation.navigate(text);
  };
  return (
    <>
      <View style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="보호자/피보호자 관리" navigation={navigation} />

          <View style={{marginTop: 30}} />
          {menu.map((text, idx) => (
            <MenuBig key={idx} onPress={onPress} text={text} />
          ))}
        </View>
      </View>
    </>
  );
};

export default SafetySurvice;
