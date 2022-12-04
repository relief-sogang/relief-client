import {useEffect, useState} from 'react';
import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polyline,
  Polygon,
} from 'react-native-nmap';
import axios from 'axios';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

function MyMap() {
  const [location, setLocation] = useState();
  const sogang = {latitude: 37.5509442, longitude: 126.9410023};
  const P0 = {latitude: 37.564362, longitude: 126.977011};
  const P1 = {latitude: 37.565051, longitude: 126.978567};
  const P2 = {latitude: 37.565383, longitude: 126.976292};

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
            // console.log(pos.coords);
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

  // useEffect(() => {
  //   const os = Platform.OS;

  //   if (os === 'ios') {
  //     console.log('ios location: ', location);
  //   } else if (os === 'android') {
  //     console.log('android location: ', location);
  //   }
  // }, [location]);

  // // 사용자 위치 계속 추적
  // Geolocation.watchPosition(position => {
  //   const {latitude, longitude} = position.coords;
  //   console.log(latitude, longitude);
  // });

  // if (!location) {
  //   return <></>;
  // }

  return (
    <NaverMapView
      style={{width: '100%', height: '100%'}}
      showsMyLocationButton={true}
      center={{...sogang, zoom: 16}}
      onTouch={e => {
        // console.warn('onTouch', JSON.stringify(e.nativeEvent));
      }}
      // onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
      onMapClick={e => {
        // console.warn('onMapClick', JSON.stringify(e));
      }}>
      <Marker coordinate={sogang} onClick={() => console.warn('onClick! p0')} />
      {/* <Marker
        coordinate={P1}
        pinColor="blue"
        onClick={() => console.warn('onClick! p1')}
      />
      <Marker
        coordinate={P2}
        pinColor="red"
        onClick={() => console.warn('onClick! p2')}
      /> */}
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
    </NaverMapView>
  );
}

export default MyMap;
