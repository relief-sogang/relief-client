import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {EnrollStyle, SettingStyle, styles} from '../../styleSheets';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MenuSmall = ({onPress, text}) => {
  return (
    <View style={EnrollStyle.enrollBox}>
      <TouchableOpacity
        style={EnrollStyle.enrollHeaderBox}
        onPress={() => onPress(text)}>
        <Text style={styles.myPageText}>{text}</Text>
        <Icon name="angle-right" size={18} color="#9B9B9B" />
      </TouchableOpacity>
    </View>
  );
};

export default MenuSmall;
