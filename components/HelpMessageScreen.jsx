import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {EnrollStyle, SettingStyle} from '../styleSheets';
import SettingHeader from './SettingHeader';
import MenuBig from './atomic/MenuBig';

const menu = ['도움 요청 메시지 관리', '도움 요청 메시지 내역'];

const HelpMessageScreen = ({navigation, route}) => {
  const onPress = text => {
    navigation.navigate(text);
  };

  return (
    <>
      <View style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="도움 요청 메시지" navigation={navigation} />

          <View style={{marginTop: 30}} />
          {menu.map((text, idx) => (
            <MenuBig key={idx} onPress={onPress} text={text} />
          ))}
        </View>
      </View>
    </>
  );
};

export default HelpMessageScreen;
