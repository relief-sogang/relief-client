import React, {useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {EnrollStyle, SettingStyle, styles} from '../styleSheets';
import SettingHeader from './SettingHeader';

const AcceptGuardian = ({navigation, route}) => {
  return (
    <>
      <ScrollView style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text={'보호자 요청 수락'} navigation={navigation} />

          <View style={styles.unregisterBox}>
            <Text style={styles.unregisterDesc}>
              사용자님의 보호자 요청 수락 대기 목록입니다.
            </Text>
            <Text style={styles.unregisterDesc}>
              요청 수락을 하시면 해당 유저의 보호자가 됩니다.
            </Text>
          </View>

          <View style={styles.messageRecordBox}>
            <View style={styles.messageInfo}>
              <Text style={styles.messageLight}>이름</Text>
              <Text style={styles.messageBold}>홍길동</Text>
            </View>
            <View style={styles.messageInfo}>
              <Text style={styles.messageLight}>이메일</Text>
              <Text style={styles.messageBold}>gildong@naver.com</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default AcceptGuardian;
