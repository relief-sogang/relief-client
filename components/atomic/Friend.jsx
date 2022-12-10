import React, {useState} from 'react';
import {styles} from '../../styleSheets';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import client from '../../config/axios';
import {getData} from '../../config/asyncStorage';

const Friend = ({onPress, num, name, id, email, target, status}) => {
  const [toggle, setToggle] = useState(false);

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

          <Icon
            style={{marginLeft: 5}}
            name="gear"
            size={18}
            color="#9B9B9B"
            onPress={() => onPress({name, email, id})}
          />
        </View>
      </View>
    </>
  );
};

export default Friend;
