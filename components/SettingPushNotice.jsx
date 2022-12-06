import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {EnrollStyle, SettingStyle} from '../styleSheets';
import SettingHeader from './SettingHeader';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SaveComp from './SaveComp';

const SettingPushNotice = ({navigation, route}) => {
    const [toggle, setToggle] = useState(false);

    const onToggleClick = () => {
        setToggle(toggle ? false : true);
    };
  return (
    <ScrollView>
      <View style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="알림 설정" navigation={navigation} />

          <View style={EnrollStyle.enrollBox}>
            <View style={EnrollStyle.enrollHeader}>
                <Text style={EnrollStyle.enrollText}>푸시알림</Text>

                <TouchableOpacity onPress={onToggleClick}>
                {toggle ? (
                    <Icon name="toggle-on" size={20} color="#44C964" />
                ) : (
                    <Icon name="toggle-off" size={20} color="#ADADAD" />
                )}
                </TouchableOpacity>
            </View>
          </View>
        <SaveComp text1={'취소'} text2={'저장'} navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingPushNotice;