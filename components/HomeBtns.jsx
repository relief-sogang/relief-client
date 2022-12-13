import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {HomeStyle} from '../styleSheets';
import {getData} from '../config/asyncStorage';
import client from '../config/axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeBtns = ({navigation, location}) => {
  const [clickSharing, setClickSharing] = useState(false);
  const [loading, setLoading] = useState('');
  const [isSharing, setIsSharing] = useState(false);
  const [code, setCode] = useState('');
  const [messageCount, setMessageCount] = useState(0);

  const moveScreen = text => {
    navigation.navigate(text);
    // setClickMenu(false);
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
    await client
      .post('/api/command/spot/share/start', {
        userId: id,
      })
      .then(res => {
        console.log(res);
        setCode(res.data.code);
      })
      .catch(err => {
        console.log('sharing err: ', err);
      });

    // console.log('sharing location: ', res.data);
  };
  const endShare = async () => {
    const id = await getData('userId');

    console.log('id: ', id);
    await client
      .post('/api/command/spot/share/end', {
        userId: id,
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log('sharing err: ', err);
      });
  };
  const onSharingClick = () => {
    console.log('click: ', isSharing);
    if (isSharing) {
      setIsSharing(false);
      endShare();
    } else {
      setIsSharing(true);
      onShare();
    }

    setClickSharing(false);
  };
  const sendHelpRequest = async () => {
    const id = await getData('userId');

    console.log('id: ', id);
    const res = await client.post(`${APIURL}/api/command/spot/share/help`, {
      userId: id,
    });
    console.log('res: ', res);
    if (res.data.code === 'SUCCESS') {
      alert('도움을 요청했습니다.');
    } else if (res.data.code === 'FAIL') {
      alert('도움 요청에 실패했습니다.');
    }
  };
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
  const shareLocation = async () => {
    await client.post('/api/command/spot/share', {
      code,
      lat: location.latitude,
      lng: location.longitude,
    });
  };

  return (
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
        onPress={() => moveScreen('도움 요청 수신 내역')}
        style={[HomeStyle.reliefBtn, {backgroundColor: '#2C67FF'}]}>
        <Icon name="comment" size={36} color="white" />

        {messageCount != 0 && (
          <View style={HomeStyle.messageCount}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {messageCount}
            </Text>
          </View>
        )}
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
  );
};

export default HomeBtns;
