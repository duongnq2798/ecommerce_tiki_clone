import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/Colors';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginVertical: 7,
    backgroundColor: 'white',
    paddingLeft: 12,
    paddingVertical: 5,
  },
  title: {
    fontWeight: '500',
    marginTop: 7,
    marginBottom: 14,
    fontSize: 16,
    letterSpacing: 0.5,
    color: colors.blackd6,
  },
  containerView: {
    marginRight: 5,
    flexDirection: 'row',
    height: 260,
    flex: 1,
  },
  left: {
    width: 116,
    marginRight: 4,
  },
  right: {
    width: width - 140,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 50,
    marginRight: 6,
  },
  box: {
    width: '50%',
    height: 131,
    // padding: 4
    padding: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
});

export default styles;
