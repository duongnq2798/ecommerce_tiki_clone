import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/Colors';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  hotdealContainer: {
    width: width - 20,
    height: height / 4 + 30,
    marginLeft: 11,
    marginBottom: 15,
    marginTop: 20,
    paddingTop: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  headCounter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  subCounter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCounter: {
    marginLeft: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.red,
    color: colors.white,
    fontWeight: 'bold',
  },
  titleList: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fc8621',
    fontStyle: 'italic',
  },
  supList: {
    height: height / 5,
    paddingHorizontal: 10,
  },
});

export default styles;
