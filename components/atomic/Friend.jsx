import React from 'react';
import {styles} from '../../styleSheets';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Friend = ({onPress, num, name, nickname, email}) => {
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

        <Icon
          name="gear"
          size={20}
          color="#9B9B9B"
          onPress={() => onPress({name, email, nickname})}
        />
      </View>
    </>
  );
};

export default Friend;
