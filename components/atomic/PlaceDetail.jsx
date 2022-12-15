import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {HomeStyle} from '../../styleSheets';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getData} from '../../config/asyncStorage';
import client from '../../config/axios';

const PlaceDetail = ({clickPlace, setClickPlace}) => {
  const [scrap, setScrap] = useState(false)
  const onPress = () => {
    setClickPlace(null);
  };

  const onScrap = async () => {
    const userId = await getData('userId');
    await client
      .post(`/api/command/spot/register`, {
        userId,
        name: clickPlace.name,
        lat: clickPlace.lat,
        lng: clickPlace.lng,
      })
      .then(res => {
        console.log('test scrap: ', res.data);
        if (res.data.code === 'SUCCESS') {
          alert('스크랩 되었습니다.');
          setScrap(!scrap);
        } else {
          alert('이미 스크랩 된 장소입니다.');
        }
      })
      .catch(err => {
        console.log('scrap err: ', err);
      });
  };
  const onDelete = async () => {
    const userId = await getData('userId');
    // type = register | delete
    await client
      .post(`/api/command/spot/delete`, {
        userId,
        name: clickPlace.name,
      })
      .then(res => {
        console.log('test scrap: ', res.data);
        if (res.data.code === 'SUCCESS') {
          alert('스크랩이 해제되었습니다.');
          setScrap(!scrap);
        }
      })
      .catch(err => {
        console.log('scrap err: ', err);
      });
  };

  const toggleScrap = () => {
    if (!scrap) onScrap();
    else onDelete();
  }

  useEffect(() => {
    setScrap(clickPlace.spot == 0 ? false : true);
  }, [])

  return (
    <>
      <View style={HomeStyle.placeModal}>
        <View style={HomeStyle.placeBox}>
          <View style={{display: "flex", marginLeft: "auto"}}>
            <Icon name="close" onPress={onPress}/>
          </View>

          <View style={HomeStyle.placeHeader}>
            <Text style={HomeStyle.placeName}>{clickPlace.name}</Text>
            <Icon name={scrap ? "heart" : "heart-o"} onPress={toggleScrap} size={30} color="red" />
          </View>
          <View style={HomeStyle.placeAddress}>
            <Text>{clickPlace.address}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default PlaceDetail;
