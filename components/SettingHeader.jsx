import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SettingStyle} from '../styleSheets';
import Icon from 'react-native-vector-icons/FontAwesome';
import SideMenu from './SideMenu';
const SettingHeader = ({text, navigation}) => {
  const goHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={SettingStyle.settingHeader}>
      <Text style={SettingStyle.settingTitle}>{text}</Text>

      <TouchableOpacity onPress={goHome} style={SettingStyle.goHomeBtn}>
        <Icon name="home" size={30} color={'#333'} />
      </TouchableOpacity>
    </View>
  );
};

export default SettingHeader;
