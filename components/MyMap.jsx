import {useEffect, useState} from 'react';
import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polyline,
  Polygon,
} from 'react-native-nmap';
import {View, TouchableOpacity, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeStyle} from '../styleSheets';
import axios from 'axios';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import client from '../config/axios';
import {getData} from '../config/asyncStorage';
import HomeBtns from './HomeBtns';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PlaceDetail from './atomic/PlaceDetail';

function MyMap({navigation, protegeName, protegeEmail, protegeId, protegeCode}) {
  const sogang = {latitude: 37.5509442, longitude: 126.9410023};
  const [location, setLocation] = useState({
    latitude: '',
    longitude: '',
  });
  const [cctvs, setCctvs] = useState([]);
  const [places, setPlaces] = useState([]);
  const [showCctv, setShowCctv] = useState(false);
  const [showPlace, setShowPlace] = useState(false);
  // 위치 공유 코드
  const [code, setCode] = useState(0);
  // 장소 모달
  const [clickPlace, setClickPlace] = useState(null);
  // 위치를 공유중인 피보호자의 위치
  const [protegeLocation, setProtegeLocation] = useState({
    latitude: '',
    longitude: '',
  });

  const sharingLocation = async () => {
    if (code === 0) {
      return;
    } else {
      await client
        .post('/api/command/spot/share', {
          code,
          lat: location.latitude,
          lng: location.longitude,
        })
        .then(res => {
          console.log('sharing: ', res.data);
        })
        .catch(err => {
          console.log('sharing location err: ', err);
        });
    }
  };

  var sharing;
  const stopSharing = () => {
    console.log('end');
    clearInterval(sharing);
  };

  useEffect(() => {
    if (code !== 0) {
      sharingLocation();
      console.log('start');
      sharing = setInterval(() => {
        if (code !== 0) {
          sharingLocation();
        }
      }, 10000);
    }
  }, [code]);

  // 위치 추적 허가
  const requestPermission = async () => {
    const os = Platform.OS;
    try {
      if (os === 'android') {
        // return await PermissionsAndroid.requestMultiple([
        //   PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        //   PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        // ]);
        return await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
      }
      if (os === 'ios') {
        return await Geolocation.requestAuthorization('always');
      }
    } catch (e) {
      console.log(e);
    }
  };

  // 앱 진입 시 현재 위치 받아오기(사용자 위치 한 번만 받기)
  useEffect(() => {
    requestPermission().then(result => {
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          pos => {
            setLocation({
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
            console.log(pos.coords);
          },
          error => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 3600,
            maximumAge: 3600,
          },
        );
      }
    });
  }, []);

  const getCctvList = async () => {
    const res = await client.post(`/api/query/spot/cctv`, {
      xAxis: location.latitude,
      yAxis: location.longitude,
    });

    // console.log('cctv list: ', res.data.cctvList);
    setCctvs(res.data.cctvList);
  };

  const getPlaceList = async () => {
    await client
      .post('/api/query/spot/police', {
        lat: location.latitude,
        lng: location.longitude,
      })
      .then(res => {
        console.log('place: ', res.data.policeList);
        setPlaces(res.data.policeList);
      })
      .catch(err => {
        console.log('place err: ', err);
      });
  };

  useEffect(() => {
    if (location !== {}) {
      getCctvList();
      getPlaceList();
    }
  }, [location]);

  const onScrap = async () => {
    const userId = await getData('userId');
    await client
      .post('/api/command/spot/register', {
        userId,
        name: '서강대학교',
        lat: sogang.latitude,
        lng: sogang.longitude,
      })
      .then(res => {
        console.log('test scrap: ', res.data);
      })
      .catch(err => {
        console.log('scrap err: ', err);
      });
  };

  // 사용자 위치 계속 추적
  Geolocation.watchPosition(position => {
    const {latitude, longitude} = position.coords;
    setLocation({
      latitude,
      longitude,
    });
    // console.log(latitude, longitude);
  });

  useEffect(() => {
    if (protegeCode === undefined) return;
    const interval = setInterval(() => {
      getProtegeLocation();
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  
  const getProtegeLocation = async () => {
    await client.post('/api/query/spot/share/get', {
      code: protegeCode,
    })
    .then(res =>  {
      console.log(res.data);
      setProtegeLocation({
        latitude: res.data.lat,
        longitude: res.data.lng,
      });
    });
  };

  return (
    <View style={{position: 'relative'}}>
      {clickPlace !== null && (
        <PlaceDetail clickPlace={clickPlace} setClickPlace={setClickPlace} />
      )}

      {/* cctv, 주변 치안센터 보기 버튼 */}
      <View style={HomeStyle.mapBtnBox}>
        <TouchableOpacity
          style={HomeStyle.mapBtn}
          activeOpacity={0.5}
          onPress={() => setShowCctv(showCctv ? false : true)}>
          <Text style={HomeStyle.mapBtnText}>CCTV</Text>
          <Icon name="eye" color="white" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowPlace(showPlace ? false : true)}
          style={[HomeStyle.mapBtn, {backgroundColor: '#F48BD7'}]}
          activeOpacity={0.5}>
          <Text style={HomeStyle.mapBtnText}>치안센터</Text>
          <Icon name="search-location" color="white" size={20} />
        </TouchableOpacity>
      </View>

      <NaverMapView
        style={{width: '100%', height: '100%'}}
        showsMyLocationButton={true}
        center={{...sogang, zoom: 15}}
        onTouch={e => {
          // console.warn('onTouch', JSON.stringify(e.nativeEvent));
        }}
        // onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
        onMapClick={e => {
          // console.warn('onMapClick', JSON.stringify(e));
        }}>
        <Marker
          coordinate={sogang}
          onClick={() => console.warn('onClick! p0')}
        />

        {showCctv && cctvs.length !== 0 && (
          <>
            {cctvs.map((cctv, idx) => (
              <Marker
                key={idx}
                coordinate={{
                  latitude: cctv.xaxis,
                  longitude: cctv.yaxis,
                }}
                pinColor="red"
              />
            ))}
          </>
        )}

        {showPlace && places.length !== 0 && (
          <>
            {places.map((place, idx) => (
              <Marker
                key={idx}
                coordinate={{
                  latitude: Number(place.lat),
                  longitude: Number(place.lng),
                }}
                pinColor="blue"
                onClick={() => setClickPlace(place)}
              />
            ))}
          </>
        )}
        {/* <Path
        coordinates={[P0, P1]}
        onClick={() => console.warn('onClick! path')}
        width={10}
      />
      <Polyline
        coordinates={[P1, P2]}
        onClick={() => console.warn('onClick! polyline')}
      />
      <Circle
        coordinate={P0}
        color={'rgba(255,0,0,0.3)'}
        radius={200}
        onClick={() => console.warn('onClick! circle')}
      />
      <Polygon
        coordinates={[P0, P1, P2]}
        color={`rgba(0, 0, 0, 0.5)`}
        onClick={() => console.warn('onClick! polygon')}
      /> */}
        {protegeCode && (
          <Marker
            coordinate={protegeLocation}
            pinColor="blue"
            caption={{
              text: protegeName + '님의 위치',
            }}
          >
          </Marker>
        )}
      </NaverMapView>

      <HomeBtns
        stopSharing={stopSharing}
        navigation={navigation}
        setCode={setCode}
      />
    </View>
  );
}

export default MyMap;
