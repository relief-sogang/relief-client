import React, {useEffect, useState} from 'react';
import {styles} from '../../styleSheets';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import client from '../../config/axios';
import {getData} from '../../config/asyncStorage';

const Friend = ({onPress, num, name, id, email, target, status, navigate}) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (status === 'ON') {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [id]);

  const guardianOnOff = async isActive => {
    const userId = await getData('userId');
    await client
      .post('/api/command/guardian/changestatus', {
        userId,
        guardianId: id,
        isActive,
      })
      .then(res => {
        console.log('on off: ', res.data);
      });
  };

  const onToggle = () => {
    if (toggle) {
      setToggle(false);
      guardianOnOff(false);
    } else {
      setToggle(true);
      guardianOnOff(true);
    }
  };

  const onIsAccept = async isAccept => {
    const userId = await getData('userId');

    await client
      .post('/api/command/guardian/accept', {
        userId,
        protegeId: id,
        protegeName: '',
        isAccept: isAccept,
      })
      .then(res => {
        console.log(res.data);
        if (res.data.code === 'ACCEPT') {
          alert('보호자 요청을 수락하였습니다.');
        } else {
          alert('보호자 요청을 거절하였습니다.');
        }
        navigate('피보호자/보호자 정보', {
          name,
          email,
          id,
          target,
        });
      });
  };
  return (
    <>
      <View style={styles.friendBox}>
        <View style={styles.friendWrap}>
          <View style={styles.friendNum}>
            <Text>{num}</Text>
          </View>
          <View>
            <Text style={styles.friendName}>{name}</Text>
          </View>
          <View>
            <Text style={styles.friendId}>{id}</Text>
          </View>
        </View>

        <View style={styles.friendIconWrap}>
          {target === '보호자' && (
            <>
              {status === 'REQUEST' ? (
                <Text style={styles.friendStatus}>수락 대기</Text>
              ) : status === 'REJECT' ? (
                <Text style={[styles.friendStatus, {color: '#F52929'}]}>
                  거절됨
                </Text>
              ) : (
                <>
                  {toggle ? (
                    <Icon5
                      onPress={onToggle}
                      name="toggle-on"
                      size={20}
                      color="#44C964"
                    />
                  ) : (
                    <Icon5
                      onPress={onToggle}
                      name="toggle-off"
                      size={20}
                      color="#ADADAD"
                    />
                  )}
                </>
              )}
            </>
          )}

          {target === '피보호자 위치 확인' && (
            <>
              <TouchableOpacity
                style={[styles.acceptBtn, {width: 80}]}
                onPress={() => onPress({name, email, id})} // todo: param 수정
              >
                <Text style={styles.acceptText}>위치 확인</Text>
              </TouchableOpacity>
            </>
          )}
          {target === '피보호자' && status === 'REQUEST' && (
            <>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={[styles.friendStatusBox, {backgroundColor: '#F52929'}]}
                  onPress={() => onIsAccept(false)}>
                  <Text
                    style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>
                    거절
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.friendStatusBox}
                  onPress={() => onIsAccept(true)}>
                  <Text
                    style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>
                    수락
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          {target !== '피보호자 위치 확인' && !(target === '피보호자' && status === 'REQUEST') && (
            <Icon
              style={{marginLeft: 5}}
              name="gear"
              size={18}
              color="#9B9B9B"
              onPress={() => onPress({name, email, id})}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default Friend;
