import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {EnrollStyle} from '../../styleSheets';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MenuBig = ({onPress, text, count}) => {
  return (
    <>
      <View style={EnrollStyle.enrollBox}>
        <TouchableOpacity
          style={[
            EnrollStyle.enrollHeaderBox,
            {paddingLeft: 20, paddingRight: 20},
          ]}
          onPress={() => onPress(text)}>
          <View style={EnrollStyle.enrollTextBox}>
            <Text style={EnrollStyle.enrollText}>{text}</Text>

            {text === '도움 요청 수신 내역' && count != 0 &&(
              <View style={EnrollStyle.messageCount}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>{count}</Text>
              </View>
            )}
          </View>
          <Icon name="angle-right" size={24} color="#9B9B9B" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MenuBig;
