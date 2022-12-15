import React, {createContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {getData, setData} from '../config/asyncStorage';
import client from '../config/axios';
import {APIURL} from '../config/key';
import {EnrollStyle, SettingStyle, styles} from '../styleSheets';
import Friend from './atomic/Friend';
import SettingHeader from './SettingHeader';
import {useIsFocused} from '@react-navigation/native';

const CheckProtegeLocation = ({navigation, route}) => {
  const [friends, setFriends] = useState([
    {
      name: 'asdf',
      email: 'asdf@asdf',
      id: 'asdf',
      target: '피보호자',
    },
  ]);

  // 위치 확인 버튼 누르면, 서버에서 code를 받아와서 Home page에 props로 넘겨줍니다. 그 코드로 IF-29에 요청 보내서 위치 받아올게요.
  const onPress = async ({name, email, id}) => {
    console.log(name, email, id);
    const userId = await getData('userId');
    await client
      .post(`/api/query/spot/share/code`, {
        userId,
        protegeId: id,
      })
      .then(res => {
        const code = res.data.code;
        console.log('protege code: ', code);
        navigation.navigate('Home', {
          protegeName: name,
          protegeEmail: email,
          protegeId: id,
          protegeCode: code,
        });
      })
      .catch(err => {
        console.log('피보호자 위치 코드 받기 에러 : ', err);
      });
    // if (code !== '0') {
    //   // 성공
    //   navigation.navigate('Home', {
    //     protegeName: name,
    //     protegeEmail: email,
    //     protegeId: id,
    //     protegeCode: code
    //   })
    // } else {
    //   // 실패
    //   // alert('피보호자의 위치를 확인하는 데 실패했습니다.');
    // }
  };

  const getProtege = async () => {
    const id = await getData('userId');
    const token = await getData('accessToken');

    await client
      .post(`${APIURL}/api/query/protege/list`, {
        userId: id,
        status: 'SHARING',
      })
      .then(res => {
        console.log(res.data);
        setFriends(res.data.protegeList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const isFocused = useIsFocused();
  useEffect(() => {
    getProtege();
  }, [isFocused]);

  return (
    <>
      <ScrollView style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text={'피보호자 위치 확인'} navigation={navigation} />

          <View style={EnrollStyle.enrollBox}>
            <View style={EnrollStyle.enrollHeader}>
              <Text style={EnrollStyle.enrollText}>
                위치 공유중인 피보호자 목록
              </Text>
            </View>

            {friends.map((data, idx) => (
              <Friend
                key={idx}
                onPress={onPress}
                num={idx + 1}
                name={data.name}
                email={data.email}
                id={data.id}
                status={data.status}
                target={'피보호자 위치 확인'}
                navigate={navigation.navigate}
              />
            ))}

            {/* {friends.map((data, idx) => (
							<View style={styles.friendBox}>
								<View style={styles.friendWrap}>
									<View style={styles.friendNum}>
										<Text>{idx+1}</Text>
									</View>
									<View>
										<Text style={styles.friendName}>{data.name}</Text>
									</View>
									<View>
										<Text style={styles.friendId}>{data.id}</Text>
									</View>
								</View>
							</View>
            ))} */}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CheckProtegeLocation;
