import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {EnrollStyle, SettingStyle} from '../styleSheets';
import SettingHeader from './SettingHeader';
import MenuBig from './atomic/MenuBig';
import {getData} from '../config/asyncStorage';
import client from '../config/axios';

const menu = [
  '도움 요청 메시지 관리',
  '도움 요청 발신 내역',
  '도움 요청 수신 내역',
];

const HelpMessageScreen = ({navigation, route}) => {
  const [count, setCount] = useState(0);
  const onPress = text => {
    navigation.navigate(text);
  };

  const countHelpMessage = async () => {
    const userId = await getData('userId');

    await client
      .post('/api/query/help/receive/count', {
        receiverId: userId,
      })
      .then(res => {
        setCount(res.data.count);
      });
  };

  useEffect(() => {
    countHelpMessage();
  }, [])
  

  return (
    <>
      <View style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="도움 요청 메시지" navigation={navigation} />

          <View style={{marginTop: 30}} />

          {menu.map((text, idx) => (
            <MenuBig key={idx} onPress={onPress} text={text} count={count}/>
          ))}
        </View>
      </View>
    </>
  );
};

export default HelpMessageScreen;
