import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/Colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  textHeader: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    paddingHorizontal: 10,
    borderTopWidth: 0.7,
    borderTopColor: colors.comment,
    backgroundColor: colors.white,
  },
  footSum: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginVertical: 10,
  },
  buttonOrder: {
    backgroundColor: colors.red,
    marginBottom: 25,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  freeShip: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: 15,
  },
  boundaryImg: {
    width: width / 3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imgItem: {
    width: '60%',
    height: '70%',
    borderRadius: 5,
  },
  boundaryInfomationItem: {
    width: width - width / 3,
  },
  nameOfCost: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    width: '80%',
  },
  cost: {
    fontSize: 17,
    color: colors.red,
    fontWeight: 'bold',
  },
  groupInDe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  inCreaseDescrease: {
    flexDirection: 'row',
  },
  distant: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: colors.grayA,
  },
  emptyProduct: {
    alignItems: 'center',
    paddingTop: 10,
  },
  emptyProductImg: {
    width: width / 2 + 5,
    height: height / 4,
    marginRight: 10,
  },
  emptyButton: {
    backgroundColor: colors.red,
    width: width - 30,
    height: height / 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 5,
  },
  textEmptyButton: {
    fontSize: 18,
    color: colors.white,
  },
  emptyProductText: {
    marginTop: 15,
    fontSize: 16,
  },
});

export default styles;
