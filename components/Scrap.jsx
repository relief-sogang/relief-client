import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SettingStyle, styles} from '../styleSheets';
import SettingHeader from './SettingHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getData} from '../config/asyncStorage';
import client from '../config/axios';
import ScrapComp from './atomic/ScrapComp';

const Scrap = ({navigation, route}) => {
  // { lat, lng, name }
  const [scraps, setScraps] = useState([]);

  const getScrapList = async () => {
    const userId = await getData('userId');

    await client
      .post('/api/query/spot/list', {
        userId,
      })
      .then(res => {
        console.log('scrap list: ', res.data);
        setScraps(res.data.spotList);
      })
      .catch(err => {
        console.log('scrap list err: ', err);
      });
  };

  const onScrap = async () => {
    const userId = await getData('userId');
    // type = register | delete
    await client
      .post(`/api/command/spot/register`, {
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

  useEffect(() => {
    getScrapList();
  }, []);

  return (
    <>
      <ScrollView style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="스크랩" navigation={navigation} />

          <View style={{marginTop: 30}} />
          {/* <View style={styles.scrapBox}>
            <View style={styles.scrapWrap}>
              <View style={styles.scrapImgBox}>
                <View style={styles.scrapDescBox}>
                  <Text style={styles.scrapName}>서강대학교</Text>

                  <Icon name="heart" size={15} color="white" />
                </View>
              </View>
            </View>
            <View style={styles.scrapWrap}>
              <View style={styles.scrapImgBox}>
                <View style={styles.scrapDescBox}>
                  <Text style={styles.scrapName}>서강대학교</Text>

                  <Icon name="heart" size={15} color="white" />
                </View>
              </View>
            </View>
          </View> */}

          <View style={styles.scrapList}>
            {scraps.map((scrap, idx) => (
              <ScrapComp key={idx} data={scrap} />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Scrap;
