import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SettingStyle} from '../styleSheets';

const SettingHeader = ({text, navigation}) => {
  const goHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={SettingStyle.settingHeader}>
      <Text style={SettingStyle.settingTitle}>{text}</Text>

      <TouchableOpacity
        onPress={goHome}
        style={SettingStyle.goHomeBtn}></TouchableOpacity>
    </View>
  );
};

export default SettingHeader;
