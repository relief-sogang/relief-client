import React, {useRef, useState} from 'react';
import {TextInput, View, Text, Button, TouchableOpacity} from 'react-native';
import {EnrollStyle, SettingStyle, styles} from '../styleSheets';
import SaveComp from './SaveComp';
import SettingHeader from './SettingHeader';

const Unregister = ({navigation, route}) => {
  return (
    <View style={SettingStyle.settingWrap}>
      <View style={SettingStyle.settingBox}>
        <SettingHeader text="회원 탈퇴" navigation={navigation} />

        <View style={styles.unregisterBox}>
          <Text style={styles.unregisterDesc}>
            회원 탈퇴를 하면 모든 정보가 사라집니다.
          </Text>
          <Text style={styles.unregisterDesc}>
            회원 탈퇴를 원하시면 비밀번호 확인이 필요합니다.
          </Text>
        </View>

        <View style={EnrollStyle.enrollBox}>
          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>비밀번호</Text>
          </View>

          <View style={EnrollStyle.enrollInputBox}>
            <TextInput
              placeholder="등록할 보호자의 이름을 지정해주세요."
              style={[EnrollStyle.enrollInput, {width: '100%'}]}
            />
          </View>
        </View>
        <View style={EnrollStyle.enrollBox}>
          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>비밀번호 확인</Text>
          </View>

          <View style={EnrollStyle.enrollInputBox}>
            <TextInput
              placeholder="등록할 보호자의 이름을 지정해주세요."
              style={[EnrollStyle.enrollInput, {width: '100%'}]}
            />
          </View>
        </View>

        <SaveComp text1={'취소'} text2={'탈퇴'} navigation={navigation} />
      </View>
    </View>
  );
};

export default Unregister;
