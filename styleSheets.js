import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

let chartHeight = Dimensions.get('window').height;
let chartWidth = Dimensions.get('window').width;
chartHeight = Math.ceil(chartHeight);
chartWidth = Math.ceil(chartWidth);

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
  },
  searchInput: {
    // backgroundColor: 'orange',
    height: '100%',
    width: '90%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchBtn: {
    backgroundColor: 'orange',
  },
  menuIcon: {
    position: 'absolute',
    top: 75,
    right: 15,
    backgroundColor: 'orange',
    width: 30,
    height: 30,
    zIndex: 10,
  },
  menuBar: {
    position: 'absolute',
    top: 35,
    right: 0,
    zIndex: 10,
    width: 150,
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
  },
  menuItem: {
    lineHeight: 30,
    // backgroundColor: 'aqua',
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
  },
});

export const SettingStyle = StyleSheet.create({
  settingWrap: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFBBE4',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  },
  settingBox: {
    width: '90%',
    minHeight: chartHeight * 0.8,
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'relative',
    paddingBottom: 50,
  },
  settingHeader: {
    width: '95%',
    // backgroundColor: 'orange',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(72, 72, 72, .3)',
    marginLeft: 'auto',
    marginRight: 'auto',
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
    // marginBottom: 30,
  },
  enrollHeader: {
    width: '100%',
  },
  enrollHeaderBox: {
    borderRadius: 10,
    borderColor: 'rgba(72, 72, 72, .4)',
    borderWidth: 1,
    width: '90%',
    marginBottom: 10,
  },
  enrollText: {
    lineHeight: 50,
    fontSize: 20,
    marginLeft: 30,
    fontWeight: 'bold',
  },
  enrollInputBox: {
    // borderColor: 'rgba(72, 72, 72, .3)',
    // borderWidth: 1,
    // borderRadius: 5,
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 34,
  },
  enrollInput: {
    fontSize: 12,
    width: '30%',
    borderColor: 'rgba(72, 72, 72, .3)',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  enrollBtn: {
    borderRadius: 5,
    backgroundColor: 'black',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const styles = StyleSheet.create({
  friendBox: {
    // backgroundColor: 'orange',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 5,
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
});
