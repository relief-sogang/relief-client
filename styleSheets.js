import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';

export let chartHeight = Dimensions.get('window').height;
export let chartWidth = Dimensions.get('window').width;
// chartHeight = Math.ceil(chartHeight);
// chartWidth = Math.ceil(chartWidth);
chartHeight = chartHeight;
chartWidth = chartWidth;

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  searchContainer: {
    width: '100%',
    position: 'absolute',
    top: 20,
    left: 0,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: 'rgba(75, 75, 75, .5)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 10,
    shadowRadius: 3.84,
  },
  searchBar: {
    width: '90%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchInput: {
    // backgroundColor: 'orange',
    height: '100%',
    width: '90%',
  },
  searchBtn: {
    // backgroundColor: 'orange',
    // width: '10%',
  },
  menuIcon: {
    position: 'absolute',
    top: 75,
    right: 15,
    // backgroundColor: 'orange',
    width: 30,
    height: 30,
    zIndex: 10,
  },
  menuBar: {
    position: 'absolute',
    top: 35,
    right: 0,
    zIndex: 10,
    width: 220,
    // height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    paddingBottom: 50,
  },
  menuCloseBtn: {
    textAlign: 'right',
    width: '100%',
    // backgroundColor: 'orange',
    marginBottom: 10,
  },
  menuItemBox: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(72, 72, 72, .3)',
    width: '100%',
    marginBottom: 10,
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  menuIcons: {
    // backgroundColor: 'orange',
    width: 23,
    alignItems: 'center',
  },
  menuItem: {
    lineHeight: 30,
    // backgroundColor: 'aqua',
    color: '#6C6C6C',
    marginLeft: 5,
    marginRight: 5,
  },
  pushAlarmBox: {
    width: 12,
    height: 15,
    borderRadius: 6,
    backgroundColor: '#41C941',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pushAlarm: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    bottom: 30,
    zIndex: 10,
    justifyContent: 'space-evenly',
    width: '100%',
  },
  reliefBtn: {
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  shareLocationBox: {
    position: 'absolute',
    top: -58,
    right: 0,
    zIndex: 10,
    backgroundColor: '#EFA0A0',
    width: 150,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareLocationText: {
    fontWeight: 'bold',
    color: 'white',
  },
  sharingWrap: {
    position: 'absolute',
    left: 20,
    top: -100,
    zIndex: 10,
  },
  sharingBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 146,
    height: 41,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F461CB',
    backgroundColor: '#F461CB',
    marginBottom: 5,
    flexDirection: 'row',
  },
});

export const SettingStyle = StyleSheet.create({
  settingWrap: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFBBE4',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  },
  settingBox: {
    width: '90%',
    minHeight: chartHeight * 0.8,
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'relative',
    paddingBottom: 70,
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  settingHeader: {
    width: '95%',
    // backgroundColor: 'orange',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(72, 72, 72, .3)',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  },
  goHomeBtn: {
    position: 'absolute',
    top: 15,
    right: 10,
    zIndex: 10,
    width: 30,
    height: 30,
    // backgroundColor: 'aqua',
  },
  settingTitle: {
    lineHeight: 60,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  settingBtnWrap: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    width: '100%',
    // backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  settingBtnView: {
    width: 140,
    borderRadius: 30,
  },
  settingBtnText: {
    color: 'white',
    fontSize: 15,
    lineHeight: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export const EnrollStyle = StyleSheet.create({
  enrollBox: {
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 20,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  enrollHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  enrollHeaderBox: {
    borderRadius: 10,
    borderColor: 'rgba(72, 72, 72, .4)',
    borderWidth: 1,
    // width: '90%',
    width: '100%',
    marginBottom: 10,
    // backgroundColor: 'orange',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  enrollText: {
    lineHeight: 50,
    fontSize: 20,
    // marginLeft: 20,
    fontWeight: 'bold',
  },
  enrollInputBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height: 34,
    // borderColor: 'rgba(72, 72, 72, .3)',
    // borderWidth: 1,
    borderRadius: 5,
    // paddingLeft: 10,
    // paddingRight: 10,
    // padding: 10,
    alignItems: 'center',
  },
  enrollInput: {
    fontSize: 12,
    width: '30%',
    borderColor: 'rgba(72, 72, 72, .3)',
    borderWidth: 1,
    borderRadius: 5,
    // lineHeight: 30,
    padding: 10,
  },
  enrollBtn: {
    borderRadius: 5,
    backgroundColor: 'black',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  enrollBigInput: {
    width: '100%',
    // backgroundColor: 'orange',
    height: 200,
    textAlignVertical: 'top',
    borderColor: 'rgba(72, 72, 72, .3)',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export const styles = StyleSheet.create({
  friendBox: {
    // backgroundColor: 'orange',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  friendWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    // backgroundColor: 'aqua',
  },
  friendNum: {
    height: '100%',
    width: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(72, 72, 72, .4)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  friendName: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  friendId: {
    color: '#9E9E9E',
  },
  friendIconWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoBox: {
    alignItems: 'center',
  },
  userImgBox: {
    width: 115,
    height: 115,
    backgroundColor: '#D9D9D9',
    borderRadius: 115 / 2,
    marginTop: 20,
    marginBottom: 15,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImgBtn: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    zIndex: 10,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userId: {
    color: '#7D7D7D',
  },
  myPageText: {
    fontSize: 16,
    lineHeight: 35,
    // marginLeft: 10,
  },
  profileText: {
    lineHeight: 32,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5F5F5F',
    width: '85%',
  },
  unregisterBox: {
    width: '85%',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  unregisterDesc: {
    color: '#CD4444',
    fontSize: 12,
    lineHeight: 20,
  },
  scrapBox: {
    flexWrap: 'wrap',
    width: '90.001%',
    flexDirection: 'row',
    // backgroundColor: 'orange',
    marginTop: 30,
  },
  scrapWrap: {
    // width: '50%',
    width: chartWidth * 0.9 * 0.9 * 0.5,
    height: chartWidth * 0.9 * 0.9 * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'aqua',
  },
  scrapImgBox: {
    backgroundColor: '#D9D9D9',
    width: '90%',
    height: '90%',
    borderRadius: 5,
    overflow: 'hidden',
    position: 'relative',
  },
  scrapDescBox: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 10,
    // backgroundColor: 'orange',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrapName: {
    color: 'white',
    fontWeight: 'bold',
  },
  messageRecordBox: {
    width: '90%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(72, 72, 72, .4)',
    padding: 10,
    marginBottom: 10,
    position: 'relative',
  },
  messageInfo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
    // backgroundColor: 'orange',
  },
  messageLight: {
    color: '#ABABAB',
    // lineHeight: 30,
    fontSize: 12,
  },
  messageBold: {
    fontWeight: 'bold',
    fontSize: 16,
    // paddingTop: 10,
    // paddingBottom: 10,
  },
  acceptBox: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  acceptBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 28,
    width: 65,
    backgroundColor: '#0CB927',
    marginLeft: 3,
    marginRight: 3,
  },
  acceptText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export const LoginPageStyles = StyleSheet.create({
  Rectangle1: {
    // flex: 1,
    width: '100%',
    minHeight: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
    position: 'relative',
  },
  Rectangle2: {
    width: '100%',
    alignItems: 'center',
    // backgroundColor: 'orange',
    paddingTop: chartHeight * 0.1,
    paddingBottom: chartHeight * 0.1,
  },
  loginBox: {
    borderWidth: 1,
    borderColor: 'rgba(72, 72, 72, .5)',
    borderRadius: 20,
    width: 200,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'rgba(75, 75, 75, .5)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 30,
    shadowRadius: 3.84,
    marginTop: 50,
  },
  Text1: {
    color: '#747474',
    // fontFamily: 'Inter, sans-serif',
    fontSize: 24,
  },
  LoginButton: {
    marginTop: 60,
    width: 290,
    height: 46,
  },
  KakaoView: {
    marginTop: 30,
    width: 290,
    height: 46,
    backgroundColor: '#f7e600',
    alignItems: 'center',
    flexDirection: 'row',
  },
  FacebookView: {
    marginTop: 12,
    width: 290,
    height: 46,
    backgroundColor: '#1877f2',
    alignItems: 'center',
    flexDirection: 'row',
  },
  NaverView: {
    marginTop: 12,
    width: 290,
    height: 46,
    backgroundColor: '#1ec800',
    alignItems: 'center',
    flexDirection: 'row',
  },
  GoogleView: {
    marginTop: 12,
    width: 290,
    height: 46,
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Text2: {
    color: '#000000',
    // fontFamily: 'Inter, sans-serif',
    fontSize: 16,
  },
  Text3: {
    color: '#ffffff',
    // fontFamily: 'Inter, sans-serif',
    fontSize: 16,
  },
  Rectangle3: {
    width: 290,
    height: 46,
    backgroundColor: '#000000',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
    width: 30,
    height: 30,
  },
  registerBox: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(72, 72, 72, .5)',
    shadowColor: 'rgba(75, 75, 75, .5)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 30,
    shadowRadius: 3.84,
    width: '80%',
    alignItems: 'center',
    paddingBottom: 100,
    marginTop: 20,
    position: 'relative',
  },
  registerTextBox: {
    width: '100%',
    height: 50,
    backgroundColor: '#F461CB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  registerBtn: {
    backgroundColor: 'black',
    width: '85%',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '7.5%',
    bottom: 20,
  },
  registerText: {
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkValidId: {
    borderWidth: 0.5,
    borderColor: 'rgba(72, 72, 72, .5)',
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5,
  },
  checkValidIdText: {
    color: 'rgba(72, 72, 72, .5)',
    fontSize: 12,
  },
});

export const ReliefServiceStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingBottom: 30,
  },
  BtnWrap: {
    marginBottom: 12,
    width: '90%',
    borderRadius: 20,
    position: 'relative',
    paddingBottom: 70,
  },
  BtnTitle: {
    marginTop: 10,
    lineHeight: 60,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
    color: 'white',
  },
  BtnContent: {
    lineHeight: 30,
    fontSize: 15,
    marginLeft: 15,
    color: 'white',
  },
});
