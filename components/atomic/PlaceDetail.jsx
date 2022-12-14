import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {HomeStyle} from '../../styleSheets';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlaceDetail = ({clickPlace, setClickPlace}) => {
  const onPress = () => {
    setClickPlace(null);
  };

  return (
    <>
      <View style={HomeStyle.placeModal}>
        <View style={HomeStyle.placeBox}>
          <View style={HomeStyle.placeHeader}>
            <Text style={HomeStyle.placeName}>{clickPlace.name}</Text>
            <Icon name="heart" size={30} color="black" />
          </View>
          <View style={HomeStyle.placeAddress}>
            <Text>{clickPlace.address}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default PlaceDetail;
