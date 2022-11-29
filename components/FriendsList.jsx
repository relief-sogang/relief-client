import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {EnrollStyle, SettingStyle, styles} from '../styleSheets';
import SettingHeader from './SettingHeader';

const frineds = [
  {
    name: '엄마',
    id: 'mother',
  },
  {
    name: '아빠',
    id: 'fater',
  },
  {
    name: '길동이',
    id: 'gildong',
  },
];
const FriendsList = ({navigation, route}) => {
  return (
    <>
      <View style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="보호자 목록" />

          <View style={[EnrollStyle.enrollBox, {marginTop: 15}]}>
            <TouchableOpacity
              style={EnrollStyle.enrollHeaderBox}
              onPress={() => navigation.navigate('보호자 등록')}>
              <Text style={EnrollStyle.enrollText}>보호자 등록</Text>
            </TouchableOpacity>
          </View>

          <View style={EnrollStyle.enrollBox}>
            <View style={EnrollStyle.enrollHeader}>
              <Text style={EnrollStyle.enrollText}>보호자 목록</Text>
            </View>

            {frineds.map((data, idx) => (
              <View style={styles.friendBox} key={idx}>
                <View style={styles.friendNum}>
                  <Text>{idx + 1}</Text>
                </View>
                <View>
                  <Text style={styles.friendName}>{data.name}</Text>
                </View>
                <View>
                  <Text style={styles.friendId}>{data.id}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default FriendsList;
