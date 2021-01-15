import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    letterSpacing: 1,
    margin: 10,
    color: colors.blackd6,
  },
  image: {
    width: width - 20,
    height: height / 5,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default styles;
