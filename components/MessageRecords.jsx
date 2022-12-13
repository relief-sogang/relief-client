import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {getData} from '../config/asyncStorage';
import client from '../config/axios';
import {EnrollStyle, SettingStyle, styles} from '../styleSheets';
import SettingHeader from './SettingHeader';
import Message from './atomic/Message';

const tmp1 = [
  {
    guardianName: '엄마',
    message: '도와주세요',
    date: '2022-12-01 14:00',
  },
  {
    guardianName: '아빠',
    message: '도와주세요',
    date: '2022-12-01 14:00',
  },
];

const tmp2 = [
  {
    messageId: 1,
    protegeName: '엄마',
    message:
      '도와주세요\nd\nd\nd\nd\nd\nd\nd\nd\nd\nd\nd\nd\ndd\nd\nd\nd\nd\nd\n',
    date: '2022-12-01 14:00',
    checkStatus: 'N',
  },
  {
    messageId: 2,
    protegeName: '아빠',
    message: '도와주세요',
    date: '2022-12-01 14:00',
    checkStatus: 'N',
  },
  {
    messageId: 3,
    protegeName: '짱구',
    message: '도와주세요',
    date: '2022-12-01 14:00',
    checkStatus: 'Y',
  },
];
const MessageRecords = ({navigation, route}) => {
  const [list, setList] = useState([]);
  // 발신 | 수신
  const target = route.params.target;

  const getSendList = async () => {
    const senderId = await getData('userId');
    await client
      .post('/api/query/help/send/list', {
        senderId,
      })
      .then(res => {
        setList(res.data.sendList);
      });
  };

  const getReceiveList = async () => {
    const receiverId = await getData('userId');
    await client
      .post('/api/query/help/receive/list', {
        receiverId,
      })
      .then(res => {
        setList(res.data.receiveList);
      });
  };

  useEffect(() => {
    // if(target === '발신'){
    //   getSendList();
    // } else {
    //   getReceiveList();
    // }
  }, [target]);

  const onPress = ({name, messageId, message, date, checkStatus}) => {
    navigation.navigate('메시지', {
      name,
      message,
      messageId,
      date,
      checkStatus,
      target,
    });
  };

  return (
    <>
      <ScrollView style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader
            text={`도움 요청 ${target} 내역`}
            navigation={navigation}
          />

          <View style={{marginTop: 20}} />

          {list.length === 0 ? (
            <Text
              style={{
                color: '#AAAAAA',
              }}>
              메시지 {target} 내역이 없습니다.
            </Text>
          ) : (
            <>
              {list.map((data, idx) => (
                <Message
                  key={idx}
                  data={data}
                  navigation={navigation}
                  target={target}
                  onPress={onPress}
                />
              ))}
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default MessageRecords;
