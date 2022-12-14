import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import client from '../config/axios';
import {HomeStyle} from '../styleSheets';
import {getData} from '../config/asyncStorage';

const SideMenu = ({clickMenu, setClickMenu, moveScreen}) => {
  const [sharingCount, setSharingCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);

  const onPress = e => {
    setClickMenu(clickMenu ? false : true);
  };

  const getProtegeSharingCount = async () => {
    const id = await getData('userId');

    await client
      .post('/api/query/protege/list', {
        userId: id,
        status: 'SHARING',
      })
      .then(res => {
        console.log(res.data);
        setSharingCount(res.data.protegeList.length());
      })
      .catch(err => {
        console.log(err);
      });
  }

  const getMessageCount = async () => {
    const id = await getData('userId');
    await client
      .post('/api/query/help/receive/count', {
        receiverId: id,
      })
      .then(res => {
        console.log('count: ', res.data.count);
        setMessageCount(res.data.count);
      });
  };

  useEffect(() => {
    getProtegeSharingCount();
    getMessageCount();
  }, [])
  

  return (
    <>
      <TouchableOpacity style={HomeStyle.menuIcon} onPress={onPress}>
        <Icon name="align-justify" size={30} color="#333" />
        {clickMenu && (
          <View style={HomeStyle.menuBar}>
            <TouchableOpacity onPress={() => setClickMenu(false)}>
              <Text style={HomeStyle.menuCloseBtn}>
                <Icon name="times-circle" size={20} color="#333" />
              </Text>
            </TouchableOpacity>
            <View style={HomeStyle.menuItemBox}>
              <View style={HomeStyle.menuIcons}>
                <Icon name="user-circle-o" size={18} color="#9B9B9B" />
              </View>
              <Text
                style={HomeStyle.menuItem}
                onPress={() => {
                  moveScreen('My page');
                }}>
                마이페이지
              </Text>
            </View>
            <View style={HomeStyle.menuItemBox}>
              <View style={HomeStyle.menuIcons}>
                <Icon name="map-marker" size={18} color="#9B9B9B" />
              </View>
              <Text
                style={HomeStyle.menuItem}
                onPress={() => {
                  moveScreen('피보호자 위치 확인');
                }}>
                피보호자 위치 확인
              </Text>
              {sharingCount != 0 && 
                <View style={HomeStyle.pushAlarmBox}>
                  <Text style={HomeStyle.pushAlarm}>{sharingCount}</Text>
                </View>
              }
            </View>
            {/* <View style={HomeStyle.menuItemBox}>
              <View style={HomeStyle.menuIcons}>
                <Icon name="bell" size={16} color="#9B9B9B" />
              </View>
              <Text style={HomeStyle.menuItem}>피보호자 도움 요청 확인</Text>
              <View style={HomeStyle.pushAlarmBox}>
                <Text style={HomeStyle.pushAlarm}>1</Text>
              </View>
            </View> */}
            <View style={HomeStyle.menuItemBox}>
              <View style={HomeStyle.menuIcons}>
                <Icon name="address-book-o" size={18} color="#9B9B9B" />
              </View>
              <Text
                onPress={() => {
                  moveScreen('보호자/피보호자 관리');
                }}
                style={HomeStyle.menuItem}>
                보호자/피보호자 관리
              </Text>
            </View>
            <View style={HomeStyle.menuItemBox}>
              <View style={HomeStyle.menuIcons}>
                <Icon name="comment" size={14} color="#9B9B9B" />
              </View>
              <Text
                style={HomeStyle.menuItem}
                onPress={() => {
                  moveScreen('도움 요청 메시지');
                }}>
                도움 요청 메시지
              </Text>
              {messageCount != 0 && (
                <View style={HomeStyle.pushAlarmBox}>
                  <Text style={HomeStyle.pushAlarm}>{messageCount}</Text>
                </View>
              )}
            </View>
            <View style={HomeStyle.menuItemBox}>
              <View style={HomeStyle.menuIcons}>
                <Icon name="heart-o" size={14} color="#9B9B9B" />
              </View>
              <Text
                style={HomeStyle.menuItem}
                onPress={() => {
                  moveScreen('안심 서비스 소개');
                }}>
                안심 서비스 소개
              </Text>
            </View>
            <View style={HomeStyle.menuItemBox}>
              <View style={HomeStyle.menuIcons}>
                <Icon name="gear" size={18} color="#9B9B9B" />
              </View>
              <Text
                style={HomeStyle.menuItem}
                onPress={() => {
                  moveScreen('설정');
                }}>
                설정
              </Text>
            </View>
            <View style={HomeStyle.menuItemBox}>
              <View style={HomeStyle.menuIcons}>
                <Icon name="comment" size={14} color="#9B9B9B" />
              </View>
              <Text
                style={HomeStyle.menuItem}
                onPress={() => {
                  moveScreen('로그인');
                }}>
                로그인(임시)
              </Text>
            </View>
            <View style={HomeStyle.menuItemBox}>
              <View style={HomeStyle.menuIcons}>
                <Icon name="comment" size={14} color="#9B9B9B" />
              </View>
              <Text
                style={HomeStyle.menuItem}
                onPress={() => {
                  moveScreen('회원가입');
                }}>
                회원가입(임시)
              </Text>
            </View>
            <View style={HomeStyle.menuItemBox}>
              <View style={HomeStyle.menuIcons}>
                <Icon name="comment" size={14} color="#9B9B9B" />
              </View>
              <Text
                style={HomeStyle.menuItem}
                onPress={() => {
                  moveScreen('카카오로그아웃');
                }}>
                카카오로그아웃(임시)
              </Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </>
  );
};

export default SideMenu;
