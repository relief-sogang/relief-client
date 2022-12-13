import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {getData} from '../config/asyncStorage';
import client from '../config/axios';
import {EnrollStyle, SettingStyle, styles} from '../styleSheets';
import SettingHeader from './SettingHeader';

const MessageDetail = ({navigation, route}) => {
  const name = route.params.name;
  const date = route.params.date;
  const message = route.params.message;
  const messageId = route.params.messageId;
  const checkStatus = route.params.checkStatus;
  const target = route.params.target;

  const checkMessage = async () => {
    const receiverId = await getData('userId');

    await client
      .post('/api/command/help/receive/check', {
        receiverId,
        messageId,
      })
      .then(res => {
        console.log(res);
      });
  };

  useEffect(() => {
    if (target === '수신') {
      if (checkStatus === 'N') {
        checkMessage();
      }
    }
  }, []);

  return (
    <ScrollView style={SettingStyle.settingWrap}>
      <View style={SettingStyle.settingBox}>
        <SettingHeader navigation={navigation} text="메시지" />

        <View style={{marginTop: 30}} />

        <View style={styles.messageBox}>
          <View style={styles.messageName}>
            <View style={styles.messageLabel}>
              {target === '발신' ? (
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
                  받은 사람
                </Text>
              ) : (
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
                  보낸 사람
                </Text>
              )}
            </View>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>{name}</Text>
          </View>

          <View style={styles.messageDate}>
            <Text>{date}</Text>
          </View>

          <View style={styles.messageContents}>
            <Text style={{lineHeight: 20}}>{`${message}`}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MessageDetail;
