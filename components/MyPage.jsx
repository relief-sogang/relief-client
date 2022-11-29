import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SettingStyle, styles, EnrollStyle} from '../styleSheets';
import SettingHeader from './SettingHeader';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyPage = ({navigation, route}) => {
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

          <View style={[EnrollStyle.enrollBox, {marginTop: 30}]}>
            <TouchableOpacity
              style={EnrollStyle.enrollHeaderBox}
              onPress={() => navigation.navigate('프로필 설정')}>
              <Text style={styles.myPageText}>프로필 설정</Text>
            </TouchableOpacity>
          </View>
          <View style={EnrollStyle.enrollBox}>
            <TouchableOpacity
              style={EnrollStyle.enrollHeaderBox}
              onPress={() => navigation.navigate('스크랩')}>
              <Text style={styles.myPageText}>스크랩</Text>
            </TouchableOpacity>
          </View>
          <View style={EnrollStyle.enrollBox}>
            <TouchableOpacity
              style={EnrollStyle.enrollHeaderBox}
              onPress={() => navigation.navigate('안심 서비스 설정')}>
              <Text style={styles.myPageText}>안심 서비스 설정</Text>
            </TouchableOpacity>
          </View>
          <View style={EnrollStyle.enrollBox}>
            <TouchableOpacity
              style={EnrollStyle.enrollHeaderBox}
              onPress={() => navigation.navigate('보호자 목록')}>
              <Text style={styles.myPageText}>안심 서비스 내역</Text>
            </TouchableOpacity>
          </View>
          <View style={EnrollStyle.enrollBox}>
            <TouchableOpacity
              style={EnrollStyle.enrollHeaderBox}
              onPress={() => navigation.navigate('회원 탈퇴')}>
              <Text style={styles.myPageText}>회원 탈퇴</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default MyPage;
