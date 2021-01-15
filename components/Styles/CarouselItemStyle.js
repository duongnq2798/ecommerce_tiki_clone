import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 5 - 20,
    marginLeft: 13,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  image: {
    width: width - 20,
    height: height / 5 - 20,
    borderRadius: 5,
  },
});

export default styles;
