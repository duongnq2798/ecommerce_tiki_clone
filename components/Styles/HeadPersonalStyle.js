import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/Colors';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width,
    height: 50,
    backgroundColor: colors.blue,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  containt: {
    height: '100%',
    width: '58%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
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
});

export default styles;
