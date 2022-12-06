import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {EnrollStyle, SettingStyle} from '../styleSheets';
import SettingHeader from './SettingHeader';
import MenuBig from './atomic/MenuBig';

const menu = ['비밀번호 변경', '알림 설정'];

const SafetySurvice = ({navigation, route}) => {
  const onPress = text => {
    navigation.navigate(text);
  };
  return (
    <>
      <View style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="설정" navigation={navigation} />

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
