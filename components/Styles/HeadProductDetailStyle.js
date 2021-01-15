import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#519fff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  groupInput: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 9,
  },
  textSearch: {
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: 'white',
    fontSize: 15,
  },
  distanceIcon: {
    paddingHorizontal: 20,
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
