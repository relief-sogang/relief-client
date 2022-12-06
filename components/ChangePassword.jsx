import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {EnrollStyle, SettingStyle} from '../styleSheets';
import SaveComp from './SaveComp';
import SettingHeader from './SettingHeader';

const ChangePassword = ({navigation, route}) => {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    
    // 새 비밀번호 == 새 비밀번호 확인

    
  return (
    <ScrollView>
      <View style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="비밀번호 변경" navigation={navigation} />

          <View style={EnrollStyle.enrollBox}>

            <View style={EnrollStyle.enrollInputBox}>
              <TextInput
                placeholder="현재 비밀번호"
                style={[EnrollStyle.enrollInput, {width: '100%', marginTop: 20}]}
                value={currentPassword}
                onChange={setCurrentPassword}
                secureTextEntry={true}
              />
            </View>
          </View>

          <View style={EnrollStyle.enrollBox}>

            <View style={EnrollStyle.enrollInputBox}>
              <TextInput
                placeholder="새 비밀번호"
                style={[EnrollStyle.enrollInput, {width: '100%', marginTop: 10}]}
                value={newPassword}
                onChange={setNewPassword}
                secureTextEntry={true}
              />
            </View>
          </View>
          
          <View style={EnrollStyle.enrollBox}>

            <View style={EnrollStyle.enrollInputBox}>
              <TextInput
                placeholder="새 비밀번호 확인"
                style={[EnrollStyle.enrollInput, {width: '100%', marginTop: 10}]}
                value={confirmNewPassword}
                onChange={setConfirmNewPassword}
                secureTextEntry={true}
              />
            </View>
          </View>

          <SaveComp text1={'취소'} text2={'변경'} navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ChangePassword;
