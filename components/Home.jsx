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

const Home = ({navigation, route}) => {
  const [input, setInput] = useState('');
  const [clickMenu, setClickMenu] = useState(false);
  const [clickSharing, setClickSharing] = useState(false);

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

  return (
    <TouchableOpacity
      style={HomeStyle.container}
      onPress={onClick}
      activeOpacity={1}>
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

      <MyMap />

      <View style={HomeStyle.buttonContainer}>
        <TouchableOpacity
          onPress={() => moveScreen('스크랩')}
          style={[HomeStyle.reliefBtn, {backgroundColor: '#EDADD3'}]}>
          <Icon name="heart" size={36} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => moveScreen('보호자/피보호자 관리')}
          style={[HomeStyle.reliefBtn, {backgroundColor: '#2C67FF'}]}>
          <Icon name="address-book" size={36} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => moveScreen('도움 요청 메시지')}
          style={[HomeStyle.reliefBtn, {backgroundColor: '#2C67FF'}]}>
          <Icon name="comment" size={36} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setClickSharing(clickSharing ? false : true)}
          style={[HomeStyle.reliefBtn, {backgroundColor: '#ED3D3D'}]}>
          <Icon name="map-marker" size={36} color="white" />

          {clickSharing && (
            <TouchableOpacity style={HomeStyle.shareLocationBox}>
              <Text style={HomeStyle.shareLocationText}>위치 공유하기</Text>
              <Icon
                name="sort-desc"
                size={35}
                color="#EFA0A0"
                style={{position: 'absolute', right: 20, bottom: -13}}
              />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Home;
