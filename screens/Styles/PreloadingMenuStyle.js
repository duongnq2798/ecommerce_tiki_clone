import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preMenu: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  preBox: {
    width: 70,
    height: 50,
    backgroundColor: colors.grayA,
    margin: 10,
    borderRadius: 5,
  },
});

export default styles;
