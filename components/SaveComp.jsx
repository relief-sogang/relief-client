import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SettingStyle} from '../styleSheets';

const SaveComp = ({text1, text2, navigation, method1, method2}) => {
  const onCancel = () => {
    navigation.pop();
  };
  return (
    <View style={SettingStyle.settingBtnWrap}>
      <TouchableOpacity
        style={[SettingStyle.settingBtnView, {backgroundColor: '#ADC2B0'}]}
        onPress={method1 ? method1 : onCancel}>
        <Text style={SettingStyle.settingBtnText}>{text1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={method2}
        style={[SettingStyle.settingBtnView, {backgroundColor: '#04BC00'}]}>
        <Text style={SettingStyle.settingBtnText}>{text2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SaveComp;
