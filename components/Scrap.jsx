import React from 'react';
import {View, Text} from 'react-native';
import {SettingStyle, styles} from '../styleSheets';
import SettingHeader from './SettingHeader';
import Icon from 'react-native-vector-icons/FontAwesome';

const Scrap = ({navigation, route}) => {
  return (
    <>
      <View style={SettingStyle.settingWrap}>
        <View style={SettingStyle.settingBox}>
          <SettingHeader text="스크랩" navigation={navigation} />

          <View style={styles.scrapBox}>
            <View style={styles.scrapWrap}>
              <View style={styles.scrapImgBox}>
                <View style={styles.scrapDescBox}>
                  <Text style={styles.scrapName}>서강대학교</Text>

                  <Icon name="heart" size={15} color="white" />
                </View>
              </View>
            </View>
            <View style={styles.scrapWrap}>
              <View style={styles.scrapImgBox}>
                <View style={styles.scrapDescBox}>
                  <Text style={styles.scrapName}>서강대학교</Text>

                  <Icon name="heart" size={15} color="white" />
                </View>
              </View>
            </View>

            <View style={styles.scrapWrap}>
              <View style={styles.scrapImgBox}>
                <View style={styles.scrapDescBox}>
                  <Text style={styles.scrapName}>서강대학교</Text>

                  <Icon name="heart" size={15} color="white" />
                </View>
              </View>
            </View>
            {/* <View style={styles.scrapWrap}>
              <View style={styles.scrapImgBox}>
                <View style={styles.scrapDescBox}>
                  <Text style={styles.scrapName}>서강대학교</Text>

                  <Icon name="heart" size={15} color="white" />
                </View>
              </View>
            </View>
            <View style={styles.scrapWrap}>
              <View style={styles.scrapImgBox}>
                <View style={styles.scrapDescBox}>
                  <Text style={styles.scrapName}>서강대학교</Text>

                  <Icon name="heart" size={15} color="white" />
                </View>
              </View>
            </View> */}
            {/* <View style={styles.scrapWrap}>
              <View style={styles.scrapImgBox}>
                <View style={styles.scrapDescBox}>
                  <Text style={styles.scrapName}>서강대학교</Text>

                  <Icon name="heart" size={15} color="white" />
                </View>
              </View>
            </View>
            <View style={styles.scrapWrap}>
              <View style={styles.scrapImgBox}>
                <View style={styles.scrapDescBox}>
                  <Text style={styles.scrapName}>서강대학교</Text>

                  <Icon name="heart" size={15} color="white" />
                </View>
              </View>
            </View> */}
            {/* <View style={styles.scrapWrap}>
              <View style={styles.scrapImgBox}>
                <View style={styles.scrapDescBox}>
                  <Text style={styles.scrapName}>서강대학교</Text>

                  <Icon name="heart" size={15} color="white" />
                </View>
              </View>
            </View>
            <View style={styles.scrapWrap}>
              <View style={styles.scrapImgBox}>
                <View style={styles.scrapDescBox}>
                  <Text style={styles.scrapName}>서강대학교</Text>

                  <Icon name="heart" size={15} color="white" />
                </View>
              </View>
            </View> */}
          </View>
        </View>
      </View>
    </>
  );
};

export default Scrap;
