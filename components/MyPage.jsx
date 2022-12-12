import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {SettingStyle, styles, EnrollStyle} from '../styleSheets';
import SettingHeader from './SettingHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuSmall from './atomic/MenuSmall';
import {getData} from '../config/asyncStorage';

const menu = [
  '프로필 설정',
  '스크랩',
  '보호자/피보호자 관리',
  '도움 요청 메시지',
  '회원 탈퇴',
  '설정',
];
const MyPage = ({navigation, route}) => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const onPress = text => {
    navigation.navigate(text);
  };

  const setUserInfo = async () => {
    const id = await getData('userId');
    const name = await getData('userName');
    const email = await getData('email');

    console.log(id, name, email);

    setUserId(id);
    setUserName(name);
    setUserEmail(email);
  };

  useEffect(() => {
    setUserInfo();
  }, []);

  return (
    <>
      <ScrollView style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="마이페이지" navigation={navigation} />

          <View style={styles.userInfoBox}>
            <View style={styles.userImgBox}>
              <Icon name="user" color="white" size={70} />
            </View>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.userId}>{userId}</Text>
            <Text style={styles.userId}>{userEmail}</Text>
          </View>

          <View style={{marginTop: 30}} />
          {menu.map((text, idx) => (
            <MenuSmall onPress={onPress} text={text} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default MyPage;
