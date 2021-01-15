import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  imageContainer: {
    width: width - 20,
    height: height / 7 - 35,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 30,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default styles;
