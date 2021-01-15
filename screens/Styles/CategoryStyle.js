import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  boundary: {
    width,
    height,
    flexDirection: 'row',
  },
  recommence: {
    width: width / 4,
    height,
    backgroundColor: 'white',
    // marginBottom: 150,
  },
  item: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderBottomColor: '#fbf6f0',
    borderBottomWidth: 3,
  },
  image: {
    width: '100%',
    height: 60,
    marginVertical: 5,
    borderRadius: 5,
  },
  titleItem: {
    textAlign: 'center',
  },
  shopOnline: {
    width,
    height,
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  titleRight: {
    fontSize: 17,
    margin: 6,
  },
});

export default styles;
