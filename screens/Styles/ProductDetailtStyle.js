import {StyleSheet, Dimensions} from 'react-native';
import {color} from 'react-native-reanimated';
import colors from '../../constants/Colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  containt: {
    backgroundColor: colors.white,
  },
  iconList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: 'absolute',
    zIndex: 100000,
    width: '100%',
  },
  ionIcon: {
    margin: 5,
    width: 35,
    height: 35,
    backgroundColor: '#000000b5',
    textAlign: 'center',
    lineHeight: 35,
    borderRadius: 50,
  },
  iconLeft: {
    flexDirection: 'row',
  },
  img: {
    width: '100%',
    height: height / 2,
  },
  title: {
    width,
    paddingHorizontal: 20,
  },
  locationInfomation: {
    marginTop: 10,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  headInfoLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  shipProduct: {
    marginTop: 15,
    marginBottom: 15,
    borderColor: colors.comment,
    borderWidth: 1 / 2,
    padding: 15,
    borderRadius: 5,
  },
  special: {
    color: colors.black,
    marginTop: -25,
    backgroundColor: colors.white,
    width: 120,
  },
  buttonBuy: {
    backgroundColor: colors.white,
    width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderColor: colors.grayA,
  },
  chat: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    backgroundColor: colors.white,
    width: 60,
    height: 45,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.blueBold,
  },
  traGop: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: 130,
    height: 45,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.blueBold,
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
    width: 120,
    height: 45,
    borderRadius: 4,
  },
  textContent: {
    color: colors.blueBold,
  },
  selectBuy: {
    color: colors.white,
  },
  titlePoptup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popInchi: {
    flexDirection: 'row',
  },
  popBody: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    marginVertical: 15,
  },
  viewCart: {
    backgroundColor: colors.red,
    height: 45,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCartText: {
    color: colors.white,
  },
  badge: {
    position: 'absolute',
    height: 20,
    width: 20,
    backgroundColor: colors.orange,
    right: 0,
    borderRadius: 100,
    textAlign: 'center',
    color: colors.white,
    fontSize: 12,
    lineHeight: 20,
  },
  policyImg: {
    width: 45,
    height: 45,
  },
  policy: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginVertical: 5,
    paddingVertical: 15,
  },
});

export default styles;
