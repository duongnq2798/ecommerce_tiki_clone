import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
  postGroup: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
  imageNews: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  titlePost: {
    width: 250,
    fontSize: 17,
    fontWeight: '700',
  },
  content: {
    fontSize: 16,
    letterSpacing: 0.3,
    width: '100%',
  },
});

export default styles;
