import React from 'react';
import {View, Text} from 'react-native';
import {SettingStyle} from '../styleSheets';

const SettingHeader = ({text}) => {
  return (
    <View style={SettingStyle.settingHeader}>
      <Text style={SettingStyle.settingTitle}>{text}</Text>
    </View>
  );
};

export default SettingHeader;
