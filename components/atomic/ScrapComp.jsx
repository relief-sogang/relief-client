import React, {useState} from 'react';
import {styles} from '../../styleSheets';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getData} from '../../config/asyncStorage';
import client from '../../config/axios';

const ScrapComp = ({data}) => {
  const [isScrap, setIsScrap] = useState(true);

  const onScrap = async () => {
    const userId = await getData('userId');
    await client
      .post(`/api/command/spot/register`, {
        userId,
        name: data.name,
        lat: data.lat,
        lng: data.lng,
      })
      .then(res => {
        console.log('test scrap: ', res.data);
        if (res.data.code === 'SUCCESS') {
          alert('스크랩 되었습니다.');
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
        name: data.name,
      })
      .then(res => {
        console.log('test scrap: ', res.data);
        if (res.data.code === 'SUCCESS') {
          alert('스크랩이 해제되었습니다.');
        }
      })
      .catch(err => {
        console.log('scrap err: ', err);
      });
  };

  const onPress = flag => {
    setIsScrap(flag);
    if (flag) {
      //scrap
      onScrap();
    } else {
      onDelete();
    }
  };

  return (
    <>
      <View style={styles.scrapEl}>
        <Text style={styles.spotName}>{data.name}</Text>
        {isScrap ? (
          <Icon
            onPress={() => onPress(false)}
            name="heart"
            size={24}
            color="#F92525"
          />
        ) : (
          <Icon
            onPress={() => onPress(true)}
            name="heart-o"
            size={24}
            color="#B6B6B6"
          />
        )}
      </View>
    </>
  );
};

export default ScrapComp;
