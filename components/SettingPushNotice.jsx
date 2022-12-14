<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
=======
import React, {useEffect, useState} from 'react';
>>>>>>> 9b3edbea06bb09165ad5d7bf9aead869d33dda8c
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {EnrollStyle, SettingStyle} from '../styleSheets';
import SettingHeader from './SettingHeader';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SaveComp from './SaveComp';
import client from '../config/axios';
import {getData} from '../config/asyncStorage';

const SettingPushNotice = ({navigation, route}) => {
  const [toggle, setToggle] = useState(false);

  const onToggleClick = () => {
    setToggle(toggle ? false : true);
  };

  const savePushSetting = async () => {
    //todo
    const userId = await getData('userId');
    await client
      .post('/api/command/pushalarm/status', {
        userId,
        status: toggle ? 'ON' : 'OFF',
      })
      .then(res => {
        console.log('res : ' + res);
        const code = res.data.code;
        console.log('code : ' + code);
        if (code === 'SUCCESS') {
          alert('저장되었습니다.');
          navigation.pop();
        }
      });
  };

<<<<<<< HEAD
  const getToggleState = async () => {
    const userId = await getData('userId');
=======
  const getPushStatus = async () => {
    const userId = await getData('userId');

>>>>>>> 9b3edbea06bb09165ad5d7bf9aead869d33dda8c
    await client
      .post('/api/query/pushalarm/getstatus', {
        userId,
      })
      .then(res => {
<<<<<<< HEAD
        console.log(res);
        const status = res.data.status;
        console.log('status : ' + status);
        if (status === 'ON') {
          setToggle(true);
        } else if (status === 'OFF') {
          setToggle(false);
        }
      })
  }

  useEffect(() => {
    getToggleState();
  }, [])

=======
        if (res.data.status === 'ON') {
          setToggle(true);
        } else {
          setToggle(false);
        }
      });
  };

  useEffect(() => {
    getPushStatus();
  }, []);
>>>>>>> 9b3edbea06bb09165ad5d7bf9aead869d33dda8c
  return (
    <ScrollView>
      <View style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="알림 설정" navigation={navigation} />

          <View style={EnrollStyle.enrollBox}>
            <View style={EnrollStyle.enrollHeader}>
              <Text style={EnrollStyle.enrollText}>푸시알림</Text>

              <TouchableOpacity onPress={onToggleClick}>
                {toggle ? (
                  <Icon name="toggle-on" size={20} color="#44C964" />
                ) : (
                  <Icon name="toggle-off" size={20} color="#ADADAD" />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <SaveComp
            text1={'취소'}
            text2={'저장'}
            navigation={navigation}
            method2={savePushSetting}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingPushNotice;
