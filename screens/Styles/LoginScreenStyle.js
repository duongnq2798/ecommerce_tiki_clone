import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/Colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  relate: {
    position: 'relative',
  },
  customClose: {
    position: 'absolute',
    zIndex: 2,
  },
  tabLogin: {
    flexDirection: 'row',
    width,
    height: 50,
    backgroundColor: '#f1f1f1',
  },
  tabSingle: {
    width: width / 2,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  holderLogin: {
    color: 'black',
    fontSize: 18,
  },
});

export default styles;
