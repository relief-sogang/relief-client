import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Platform,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
// import MapView, {PROVIDER_GOOGLE, PROVIDER_DEFAULT} from 'react-native-maps';
import {HomeStyle} from '../styleSheets';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyMap from './MyMap';
import SideMenu from './SideMenu';
import client from '../config/axios';
import {getData} from '../config/asyncStorage';
import {useIsFocused} from '@react-navigation/native';
import {APIURL} from '../config/key';

const Home = ({navigation, route}) => {
  const [input, setInput] = useState('');
  const [clickMenu, setClickMenu] = useState(false);

  const onChange = e => {
    setInput(e);
  };

  const moveScreen = text => {
    navigation.navigate(text);
    setClickMenu(false);
  };

  const onClick = () => {
    setClickMenu(false);
  };

  const isFocused = useIsFocused();
  useEffect(() => {
    console.log('home focus');
  }, [isFocused]);

  return (
    <TouchableOpacity
      style={HomeStyle.container}
      onPress={onClick}
      activeOpacity={1}>
      {/* <TouchableOpacity
        style={[
          HomeStyle.sharingBox,
          {
            backgroundColor: '#336EFF',
            borderColor: '#336EFF',
            position: 'absolute',
            left: 20,
            top: 80,
            zIndex: 20,
            width: 200,
          },

          loading.length % 2 == 0 && {borderColor: 'white'},
        ]}>
        <Text style={HomeStyle.shareLocationText}>신짱구님의 위치 찾기</Text>
        <Text style={[HomeStyle.shareLocationText, {width: 17}]}>
          {loading}
        </Text>
      </TouchableOpacity> */}

      {/* search bar */}
      <View style={HomeStyle.searchContainer}>
        <View style={HomeStyle.searchBar}>
          <TextInput
            placeholder="지역 / 근처 CCTV / 치안 센터 / 경찰서 etc."
            style={HomeStyle.searchInput}
            onChangeText={onChange}
          />
          <View style={HomeStyle.searchBtn}>
            <Icon name="search" size={24} color="#D9D9D9" />
          </View>
        </View>
      </View>

      {/* menu bar */}
      <SideMenu
        clickMenu={clickMenu}
        setClickMenu={setClickMenu}
        moveScreen={moveScreen}
      />

      <MyMap navigation={navigation} />
    </TouchableOpacity>
  );
};

export default Home;
