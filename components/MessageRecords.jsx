import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {EnrollStyle, SettingStyle, styles} from '../styleSheets';
import SettingHeader from './SettingHeader';

const MessageRecords = ({navigation, route}) => {
  return (
    <ScrollView>
      <View style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="도움 요청 메시지 내역" navigation={navigation} />

          <View style={{marginTop: 20}} />

          <View style={styles.messageRecordBox}>
            <View style={styles.messageInfo}>
              <Text style={styles.messageLight}>2022-12-01 14:00</Text>
            </View>
            <View style={styles.messageInfo}>
              <Text style={styles.messageLight}>메시지 내용</Text>
              <Text style={styles.messageBold}>도와주세요</Text>
            </View>
            <View style={styles.messageInfo}>
              <Text style={styles.messageLight}>보호자</Text>
              <Text style={styles.messageBold}>엄마</Text>
            </View>
          </View>
          <View style={styles.messageRecordBox}>
            <View style={styles.messageInfo}>
              <Text style={styles.messageLight}>2022-12-01 14:00</Text>
            </View>
            <View style={styles.messageInfo}>
              <Text style={styles.messageLight}>메시지 내용</Text>
              <Text style={styles.messageBold}>도와주세요</Text>
            </View>
            <View style={styles.messageInfo}>
              <Text style={styles.messageLight}>보호자</Text>
              <Text style={styles.messageBold}>아빠</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MessageRecords;
