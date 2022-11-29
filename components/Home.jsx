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

const Home = ({navigation, route}) => {
  const [provider, setProvider] = useState();
  const [input, setInput] = useState('');
  const [clickMenu, setClickMenu] = useState(false);

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

  const onPress = () => {
    setClickMenu(clickMenu ? false : true);
  };

  const onNavigate = text => {
    navigation.navigate(text);
    setClickMenu(false);
  };

  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to profile"
    //     onPress={() => navigation.navigate('Profile')}
    //   />
    // </View>
    <View style={HomeStyle.container}>
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
              <Text
                style={HomeStyle.menuItem}
                onPress={() => {
                  onNavigate('My page');
                }}>
                마이페이지
              </Text>
            </View>
            <View style={HomeStyle.menuItemBox}>
              <Text
                onPress={() => {
                  onNavigate('안심 서비스 설정');
                }}
                style={HomeStyle.menuItem}>
                안심 서비스 설정
              </Text>
            </View>
            <View style={HomeStyle.menuItemBox}>
              <Text style={HomeStyle.menuItem}>설정</Text>
            </View>
          </View>
        )}
      </TouchableOpacity>

      {/* <MapView
        style={{flex: 1}}
        provider={provider}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView> */}

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
