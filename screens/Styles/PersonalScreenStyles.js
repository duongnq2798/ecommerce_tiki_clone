import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  welcome: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  dangXuat: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.blue,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 15,
  },
});

export default styles;
