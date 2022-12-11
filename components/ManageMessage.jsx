import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {EnrollStyle, SettingStyle} from '../styleSheets';
import SettingHeader from './SettingHeader';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SaveComp from './SaveComp';
import {APIURL} from '../config/key';

const ManageMessage = ({navigation, route}) => {
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState('');

  const onToggleClick = () => {
    setToggle(toggle ? false : true);
  };

  const saveMessageInfo = async () => {
    // todo
    // '도움요청 시 경찰신고' 아직 처리 안함.
    const id = await getData('userId');

    console.log('id: ', id);
    const res = await client.post(`${APIURL}/api/command/message`, {
      userId: id,
      message
    });
    console.log('res: ', res)
    if (res.data.code === 'SUCCESS') {
      alert('저장했습니다.')
      navigation.pop()
    } else if (res.data.code === 'FAIL') {
      alert('저장에 실패했습니다.')
    }
  };

  return (
    <View style={SettingStyle.settingWrap}>
      <View style={SettingStyle.settingBox}>
        <SettingHeader text={'도움 요청 메시지 관리'} navigation={navigation} />

        <View style={EnrollStyle.enrollBox}>
          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>도움요청 시 경찰신고</Text>

            <TouchableOpacity onPress={onToggleClick}>
              {toggle ? (
                <Icon name="toggle-on" size={20} color="#44C964" />
              ) : (
                <Icon name="toggle-off" size={20} color="#ADADAD" />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={EnrollStyle.enrollBox}>
          <View style={EnrollStyle.enrollHeader}>
            <Text style={EnrollStyle.enrollText}>도움 요청 메시지</Text>
          </View>

          <View style={EnrollStyle.enrollInputBox}>
            <TextInput
              placeholder="설정하지 않으면, 현재 위치가 전송됩니다."
              style={EnrollStyle.enrollBigInput}
              multiline={true}
              value={message}
              onChangeText={text => setMessage(text)}
            />
          </View>
        </View>

        <SaveComp
          text1={'취소'}
          text2={'저장'}
          navigation={navigation}
          method2={saveMessageInfo}
        />
      </View>
    </View>
  );
};

export default ManageMessage;
