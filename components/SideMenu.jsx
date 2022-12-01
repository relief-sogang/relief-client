import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeStyle} from '../styleSheets';

const SideMenu = ({onNavigate}) => {
  const [clickMenu, setClickMenu] = useState(false);

  const onPress = e => {
    setClickMenu(clickMenu ? false : true);
  };
  const moveScreen = text => {
    onNavigate(text);
    setClickMenu(false);
  };

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
              <Text style={HomeStyle.menuItem}>피보호자 위치 확인</Text>
              <View style={HomeStyle.pushAlarmBox}>
                <Text style={HomeStyle.pushAlarm}>1</Text>
              </View>
            </View>
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
            </View>
            <View style={HomeStyle.menuItemBox}>
              <View style={HomeStyle.menuIcons}>
                <Icon name="heart-o" size={14} color="#9B9B9B" />
              </View>
              <Text style={HomeStyle.menuItem}>안심 서비스 소개</Text>
            </View>
            <View style={HomeStyle.menuItemBox}>
              <View style={HomeStyle.menuIcons}>
                <Icon name="gear" size={18} color="#9B9B9B" />
              </View>
              <Text style={HomeStyle.menuItem}>설정</Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </>
  );
};

export default SideMenu;