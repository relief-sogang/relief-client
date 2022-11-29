import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {EnrollStyle, SettingStyle, styles} from '../styleSheets';
import SaveComp from './SaveComp';
import SettingHeader from './SettingHeader';

const SettingProfile = ({navigation, route}) => {
  const onChange = (name, text) => {};
  return (
    <>
      <View style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="프로필 설정" navigation={navigation} />

          <View style={styles.userInfoBox}>
            <View style={styles.userImgBox}>
              <View style={styles.userImgBtn}></View>
            </View>
          </View>

          <View style={EnrollStyle.enrollBox}>
            <View style={EnrollStyle.enrollHeader}>
              <Text style={styles.profileText}>이름</Text>
            </View>

            <View style={EnrollStyle.enrollInputBox}>
              <TextInput
                placeholder="이름을 작성해주세요."
                style={[EnrollStyle.enrollInput, {width: '100%'}]}
                onChangeText={text => onChange('name', text)}
              />
            </View>
          </View>
          <View style={EnrollStyle.enrollBox}>
            <View style={EnrollStyle.enrollHeader}>
              <Text style={styles.profileText}>성별</Text>
            </View>

            <View style={EnrollStyle.enrollInputBox}>
              <TextInput
                placeholder="성별을 작성해주세요."
                style={[EnrollStyle.enrollInput, {width: '100%'}]}
                onChangeText={text => onChange('name', text)}
              />
            </View>
          </View>
          <View style={EnrollStyle.enrollBox}>
            <View style={EnrollStyle.enrollHeader}>
              <Text style={styles.profileText}>생년월일</Text>
            </View>

            <View style={EnrollStyle.enrollInputBox}>
              <TextInput style={EnrollStyle.enrollInput} />
              <TextInput style={EnrollStyle.enrollInput} />
              <TextInput style={EnrollStyle.enrollInput} />
            </View>
          </View>
          <View style={EnrollStyle.enrollBox}>
            <View style={EnrollStyle.enrollHeader}>
              <Text style={styles.profileText}>주소</Text>
            </View>

            <View style={EnrollStyle.enrollInputBox}>
              <TextInput
                placeholder="주소를 작성해주세요."
                style={[EnrollStyle.enrollInput, {width: '100%'}]}
                onChangeText={text => onChange('name', text)}
              />
            </View>
          </View>
          <View style={EnrollStyle.enrollBox}>
            <View style={EnrollStyle.enrollHeader}>
              <Text style={styles.profileText}>전화번호</Text>
            </View>

            <View style={EnrollStyle.enrollInputBox}>
              <TextInput style={EnrollStyle.enrollInput} />
              <TextInput style={EnrollStyle.enrollInput} />
              <TextInput style={EnrollStyle.enrollInput} />
            </View>
          </View>

          <SaveComp text1={'취소'} text2={'저장'} navigation={navigation} />
        </View>
      </View>
    </>
  );
};

export default SettingProfile;
