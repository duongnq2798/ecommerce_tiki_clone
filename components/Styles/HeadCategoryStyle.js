import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#519fff',
    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  groupInput: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 3,
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
