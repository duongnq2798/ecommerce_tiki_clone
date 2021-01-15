import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.blue,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  textGroup: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    flex: 1,
    borderRadius: 5,
    marginLeft: 20,
    paddingLeft: 5,
  },
  textInput: {
    height: 40,
  },
  renderItem: {
    margin: 10,
    fontSize: 15,
  },
});

export default styles;
