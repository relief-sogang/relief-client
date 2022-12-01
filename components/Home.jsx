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

  //   useEffect(() => {
  //     const os = Platform.OS;
  //     if (os === 'ios') {
  //       setProvider(PROVIDER_DEFAULT);
  //     } else {
  //       setProvider(PROVIDER_GOOGLE);
  //     }
  //   }, []);

  const onChange = e => {
    setInput(e);
  };

  const onNavigate = text => {
    navigation.navigate(text);
  };

  return (
    <View style={HomeStyle.container}>
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
      <SideMenu onNavigate={onNavigate} />

      <MyMap />

      <View style={HomeStyle.buttonContainer}>
        <View style={[HomeStyle.reliefBtn, {backgroundColor: '#EDADD3'}]}>
          <Icon name="heart" size={36} color="white" />
        </View>
        <View style={[HomeStyle.reliefBtn, {backgroundColor: '#2C67FF'}]}>
          <Icon name="address-book" size={36} color="white" />
        </View>
        <View style={[HomeStyle.reliefBtn, {backgroundColor: '#2C67FF'}]}>
          <Icon name="comment" size={36} color="white" />
        </View>
        <View style={[HomeStyle.reliefBtn, {backgroundColor: '#ED3D3D'}]}>
          <Icon name="map-marker" size={36} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Home;
