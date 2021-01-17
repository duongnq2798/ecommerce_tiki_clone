import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/Colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonChange: {
    backgroundColor: colors.red,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default styles;
