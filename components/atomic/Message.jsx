import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from '../../styleSheets';

const Message = ({navigation, data, target, onPress}) => {
  const [border, setBorder] = useState(false);

  useEffect(() => {
    if (target === '수신') {
      if (data.checkStatus === 'Y') {
        setBorder(false);
      } else {
        setBorder(true);
      }
    } else {
      setBorder(false);
    }
  }, [data]);

  const goDetail = () => {
    const name = target === '발신' ? data.guardianName : data.protegeName;
    const date = data.date;
    const message = data.message;
    const messageId = target === '발신' ? null : data.messageId;
    const checkStatus = target === '발신' ? null : data.checkStatus;

    onPress({name, date, message, messageId, checkStatus});
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.messageRecordBox, border && {borderColor: '#0CB927'}]}
        onPress={goDetail}>
        <View style={styles.messageInfo}>
          <Text style={styles.messageLight}>{data.date}</Text>
        </View>
        <View style={styles.messageInfo}>
          {target === '발신' ? (
            <>
              <Text style={styles.messageLight}>보호자</Text>
              <Text style={styles.messageBold}>{data.guardianName}</Text>
            </>
          ) : (
            <>
              <Text style={styles.messageLight}>피보호자</Text>
              <Text style={styles.messageBold}>{data.protegeName}</Text>
            </>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Message;
