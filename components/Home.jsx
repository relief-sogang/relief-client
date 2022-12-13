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
  const [clickSharing, setClickSharing] = useState(false);
  const [loading, setLoading] = useState('');
  const [isSharing, setIsSharing] = useState(false);
  const [code, setCode] = useState('')

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

  if (isSharing) {
    setTimeout(() => {
      if (loading.length === 3) {
        setLoading('');
      } else {
        setLoading(loading + '.');
      }
    }, 500);
  }

  const onShare = async () => {
    const id = await getData('userId');

    console.log('id: ', id);
    const res = await client.post('/api/command/spot/share/start', {
      userId: id,
    });

    setCode(res.data.code);
    // console.log('sharing location: ', res.data);
  };

  const endShare = async () => {
    const id = await getData('userId');

    console.log('id: ', id);
    const res = await client.post('/api/command/spot/share/end', {
      userId: id,
    });
    const code = res.data.code;
    if (code === 'SUCCESS') {
      
    }
    // console.log('sharing location: ', res.data);
  };

  const onSharingClick = () => {
    if (isSharing) {
      setIsSharing(false);
      endShare();
    } else {
      setIsSharing(true);
      onShare();
    }

    setClickSharing(false);
  };

  const isFocused = useIsFocused();
  useEffect(() => {
    console.log('home focus');
  }, [isFocused]);

  const sendHelpRequest = async () => {
    const id = await getData('userId');

    console.log('id: ', id);
    const res = await client.post(`${APIURL}/api/command/spot/share/help`, {
      userId: id,
    });
    console.log('res: ', res)
    if (res.data.code === 'SUCCESS') {
      alert('도움을 요청했습니다.')
    } else if (res.data.code === 'FAIL') {
      alert('도움 요청에 실패했습니다.')
    }
  }

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
            <TouchableOpacity
              style={HomeStyle.shareLocationBox}
              onPress={onSharingClick}>
              <Text style={HomeStyle.shareLocationText}>
                {isSharing ? <>위치 공유 취소</> : <>위치 공유 하기</>}
              </Text>
              <Icon
                name="sort-desc"
                size={35}
                color="#EFA0A0"
                style={{position: 'absolute', right: 20, bottom: -13}}
              />
            </TouchableOpacity>
          )}
        </TouchableOpacity>

        {isSharing && (
          <View style={HomeStyle.sharingWrap}>
            <TouchableOpacity
              style={
                loading.length % 2 == 0
                  ? HomeStyle.sharingBox
                  : [HomeStyle.sharingBox, {borderColor: 'white'}]
              }>
              <Text style={HomeStyle.shareLocationText}>위치 공유 중</Text>
              <Text style={[HomeStyle.shareLocationText, {width: 17}]}>
                {loading}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                HomeStyle.sharingBox,
                {backgroundColor: '#04BC00', borderColor: '#04BC00'},
              ]}
              onPress={sendHelpRequest}>
              <Text style={HomeStyle.shareLocationText}>도움 요청</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Home;
