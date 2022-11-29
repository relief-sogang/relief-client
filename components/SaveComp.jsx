import React from 'react';
import {View, Text} from 'react-native';
import {SettingStyle} from '../styleSheets';

const SaveComp = ({text1, text2}) => {
  return (
    <View style={SettingStyle.settingBtnWrap}>
      <View style={[SettingStyle.settingBtnView, {backgroundColor: '#ADC2B0'}]}>
        <Text style={SettingStyle.settingBtnText}>{text1}</Text>
      </View>
      <View style={[SettingStyle.settingBtnView, {backgroundColor: '#04BC00'}]}>
        <Text style={SettingStyle.settingBtnText}>{text2}</Text>
      </View>
    </View>
  );
};

export default SaveComp;
