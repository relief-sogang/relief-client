import React, {useState} from 'react';
import {styles} from '../../styleSheets';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

const Friend = ({onPress, num, name, nickname, email, target}) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(toggle ? false : true);
  };
  return (
    <>
      <View style={styles.friendBox}>
        <View style={styles.friendWrap}>
          <View style={styles.friendNum}>
            <Text>{num}</Text>
          </View>
          <View>
            <Text style={styles.friendName}>{nickname}</Text>
          </View>
          <View>
            <Text style={styles.friendId}>{name}</Text>
          </View>
        </View>

        <View style={styles.friendIconWrap}>
          {target === '보호자' && (
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

          <Icon
            style={{marginLeft: 5}}
            name="gear"
            size={18}
            color="#9B9B9B"
            onPress={() => onPress({name, email, nickname})}
          />
        </View>
      </View>
    </>
  );
};

export default Friend;
