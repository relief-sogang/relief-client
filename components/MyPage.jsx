import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SettingStyle, styles, EnrollStyle} from '../styleSheets';
import SettingHeader from './SettingHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuSmall from './atomic/MenuSmall';

const menu = [
  '프로필 설정',
  '스크랩',
  '보호자/피보호자 관리',
  '도움 요청 메시지',
  '회원 탈퇴',
  '설정',
];
const MyPage = ({navigation, route}) => {
  const onPress = text => {
    navigation.navigate(text);
  };
  return (
    <>
      <View style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="마이페이지" navigation={navigation} />

          <View style={styles.userInfoBox}>
            <View style={styles.userImgBox}>
              <Icon name="user" color="white" size={70} />
            </View>
            <Text style={styles.userName}>홍길동</Text>
            <Text style={styles.userId}>gildong</Text>
          </View>

          <View style={{marginTop: 30}} />
          {menu.map((text, idx) => (
            <MenuSmall onPress={onPress} text={text} />
          ))}
        </View>
      </View>
    </>
  );
};

export default MyPage;
