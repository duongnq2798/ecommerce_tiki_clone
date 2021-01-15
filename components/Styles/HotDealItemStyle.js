import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: 100,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  prices: {
    textAlign: 'center',
    marginTop: 5,
  },
  discountPrice: {
    position: 'absolute',
    backgroundColor: colors.red,
    color: colors.white,
    left: 0,
    fontWeight: 'bold',
    paddingHorizontal: 9,
    paddingVertical: 2,
    borderRadius: 5,
    borderBottomRightRadius: 70,
  },
  buyEd: {
    width: '100%',
    marginTop: 5,
    backgroundColor: '#ff4646',
    borderRadius: 10,
  },
  buyText: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
