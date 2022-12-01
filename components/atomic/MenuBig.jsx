import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {EnrollStyle} from '../../styleSheets';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MenuBig = ({onPress, text}) => {
  return (
    <>
      <View style={EnrollStyle.enrollBox}>
        <TouchableOpacity
          style={[
            EnrollStyle.enrollHeaderBox,
            {paddingLeft: 20, paddingRight: 20},
          ]}
          onPress={() => onPress(text)}>
          <Text style={EnrollStyle.enrollText}>{text}</Text>
          <Icon name="angle-right" size={24} color="#9B9B9B" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MenuBig;
