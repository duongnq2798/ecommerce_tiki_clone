import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/Colors';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    backgroundColor: colors.white,
    marginTop: 10,
    paddingBottom: 10,
  },
  headTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    color: 'black',
  },
  boundaryYon: {
    width,
    height: 240,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  boxYon: {
    width: width / 2,
    height: 120,
    padding: 5,
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 5,
  },
  gpContent: {
    height: '40%',
    backgroundColor: colors.blueA,
    paddingLeft: 10,
  },
  contentTilte: {
    fontSize: 15,
  },
  quatityProduct: {
    color: colors.grayA,
  },
});

export default styles;
