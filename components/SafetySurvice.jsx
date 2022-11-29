import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {EnrollStyle, SettingStyle} from '../styleSheets';
import SettingHeader from './SettingHeader';
const SafetySurvice = ({navigation, route}) => {
  return (
    <>
      <View style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="안심 서비스 설정" />

          <View style={[EnrollStyle.enrollBox, {marginTop: 30}]}>
            <TouchableOpacity
              style={EnrollStyle.enrollHeaderBox}
              onPress={() => navigation.navigate('보호자 등록')}>
              <Text style={EnrollStyle.enrollText}>보호자 등록</Text>
            </TouchableOpacity>
          </View>
          <View style={EnrollStyle.enrollBox}>
            <TouchableOpacity
              style={EnrollStyle.enrollHeaderBox}
              onPress={() => navigation.navigate('보호자 목록')}>
              <Text style={EnrollStyle.enrollText}>보호자 목록</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default SafetySurvice;
