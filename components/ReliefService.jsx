import React from 'react';
import {View, Text, TouchableOpacity, Linking } from 'react-native';
import SettingHeader from './SettingHeader';
import {ReliefServiceStyles} from '../styleSheets';

const menu = [
    {
        title: '안심이앱',
        content: '여성안심귀가서비스 및 긴급신고, 귀가 모니터링',
        color: '#0CB927',
        androidURI: 'https://play.google.com/store/apps/details?id=kr.go.seoul.ansimi.woman',
        iosURI: 'https://apps.apple.com/kr/app/서울시-안심이/id1204100862'
    },
    {
        title: '성범죄자 알림e',
        content: '거주지 확인, 신상정보 모바일 고지',
        color: '#FFBBE4',
        androidURI: 'https://play.google.com/store/apps/details?id=com.mogef_android1.app',
        iosURI: 'https://apps.apple.com/kr/app/성범죄자-알림e/id896534884'},
    {
        title: '안심 택배함 위치',
        content: '근처의 안심 택배함 위치 확인',
        color: '#18A0FB',
        androidURI: 'https://play.google.com/store/apps/details?id=com.purplemint.fileFemSafeCrer',
        iosURI: 'https://apps.apple.com/kr/app/서울시-안심택배함/id1497249673'
    }
];

const ReliefService = ({navigation, route}) => {
    
    const onPress = (idx) => {
        const url = Platform.OS === 'ios' ? menu[idx].iosURI : menu[idx].androidURI
        Linking.openURL(url)
    }

  return (
    <View style={ReliefServiceStyles().container}>
        <SettingHeader text="안심 서비스" navigation={navigation} />

        <View style={{marginTop: 30}} />
        {menu.map((item, idx) => (
        <TouchableOpacity
            key={idx}
            style={ReliefServiceStyles(item.color).BtnWrap}
            onPress={() => onPress(idx)}
        >
            <Text style={ReliefServiceStyles().BtnTitle}>
                {item.title}
            </Text>
            <Text style={ReliefServiceStyles().BtnContent}>
                {item.content}
            </Text>
        </TouchableOpacity>
        ))}
    </View>
  );
};

export default ReliefService;
