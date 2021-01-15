import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const stylesComponent = StyleSheet.create({
  backgroundModal: {
    backgroundColor: '#222831',
    height,
    opacity: 0.5,
  },
  modalContainer: {
    height: 450,
    width,
    position: 'absolute',
    zIndex: 5,
    top: 200,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageModal: {
    width: width / 2 + 100,
    height: '100%',
  },
  iconModal: {
    position: 'absolute',
    right: 25,
    top: -50,
  },
});

export default stylesComponent;
