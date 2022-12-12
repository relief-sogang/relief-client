import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {getData} from '../config/asyncStorage';
import client from '../config/axios';
import {APIURL} from '../config/key';
import {EnrollStyle, SettingStyle, styles} from '../styleSheets';
import Friend from './atomic/Friend';
import MenuBig from './atomic/MenuBig';
import SettingHeader from './SettingHeader';
import {useIsFocused} from '@react-navigation/native';

const FriendsList = ({navigation, route}) => {
  // {eamil, id, name, status}
  // status
  // REQUEST
  // ON
  // OFF
  // REJECT
  const [friends, setFriends] = useState([
    {
      name: 'asdf',
      email: 'asdf@asdf',
      id: 'asdf',
      target: '피보호자',
    },
  ]);
  const [requests, setRequests] = useState([]);

  const target = route.params.target;
  const onPress = ({name, email, id}) => {
    navigation.navigate('피보호자/보호자 정보', {
      name,
      email,
      id,
      target,
    });
  };

  const goEnroll = text => {
    navigation.navigate('보호자 등록');
  };

  const getGuardian = async () => {
    const id = await getData('userId');
    const token = await getData('accessToken');

    await client
      .post(`${APIURL}/api/query/guardian/list`, {
        userId: id,
      })
      .then(res => {
        console.log(res.data);
        setFriends(res.data.guardianList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getProtege = async () => {
    const id = await getData('userId');
    const token = await getData('accessToken');

    await client
      .post(`${APIURL}/api/query/protege/list`, {
        userId: id,
        status: 'ALL',
      })
      .then(res => {
        console.log(res.data);
        // setFriends(res.data.protegeList);

        const list = res.data.protegeList;
        const tmp1 = [];
        const tmp2 = [];
        for (let i = 0; i < list.length; i++) {
          if (list[i].status === 'REQUEST') {
            tmp2.push(list[i]);
          } else {
            tmp1.push(list[i]);
          }
        }
        setFriends(tmp1);
        setRequests(tmp2);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const isFocused = useIsFocused();
  useEffect(() => {
    if (target === '보호자') {
      getGuardian();
    } else if (target === '피보호자') {
      getProtege();
    }
  }, [isFocused]);

  return (
    <>
      <ScrollView style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text={`${target} 관리`} navigation={navigation} />

          {target === '보호자' && (
            <>
              <View style={{marginTop: 15}} />
              <MenuBig onPress={goEnroll} text="보호자 등록" />
            </>
          )}

          <View style={EnrollStyle.enrollBox}>
            <View style={EnrollStyle.enrollHeader}>
              <Text style={EnrollStyle.enrollText}>{target} 목록</Text>
            </View>

            {target === '보호자' && (
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: 12,
                  color: '#F34646',
                  width: '100%',
                }}>
                위치 공유/도움 메시지 보내기를 원하는 보호자를 설정하세요!
              </Text>
            )}

            {friends.map((data, idx) => (
              <Friend
                key={idx}
                onPress={onPress}
                num={idx + 1}
                name={data.name}
                email={data.email}
                id={data.id}
                status={data.status}
                target={target}
                navigate={navigation.navigate}
              />
            ))}
          </View>

          {target === '피보호자' && (
            <View style={[EnrollStyle.enrollBox, {marginTop: 30}]}>
              <View style={EnrollStyle.enrollHeader}>
                <Text style={EnrollStyle.enrollText}>피보호자 요청 대기</Text>
              </View>

              {requests.length === 0 ? (
                <Text
                  style={{
                    color: '#AAAAAA',
                  }}>
                  요청 대기 중인 피보호자가 없습니다.
                </Text>
              ) : (
                <>
                  {requests.map((data, idx) => (
                    <Friend
                      key={idx}
                      onPress={onPress}
                      num={idx + 1}
                      name={data.name}
                      email={data.email}
                      id={data.id}
                      status={data.status}
                      target={target}
                      navigate={navigation.navigate}
                    />
                  ))}
                </>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default FriendsList;
