import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/Colors';
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  headerbar: {
    backgroundColor: colors.blue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  listIcon: {
    flexDirection: 'row',
  },
  tabView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue,
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  titleTab: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  titleTabBot: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 15,
  },
  headPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  singlePost: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: -10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  follow: {
    color: colors.white,
    backgroundColor: colors.blue,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  followed: {
    color: colors.blue,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.blue,
    fontWeight: 'bold',
  },
  imagePost: {
    width: '100%',
    height: height / 3,
    marginVertical: 30,
  },
  blogNew: {
    flex: 1,
  },
});

export default styles;
