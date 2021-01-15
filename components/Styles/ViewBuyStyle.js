import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    backgroundColor: 'white',
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 15,
    marginLeft: 5,
    marginTop: 10,
  },
  boundaryNi: {
    width,
    height: 180,
    flexDirection: 'row',
  },
  boxNi: {
    width: '50%',
    height: '100%',
    padding: 5,
    backgroundColor: '#f6ecf0',
  },
  boundarySan: {
    width,
    height: 130,
    flexDirection: 'row',
  },
  boxSan: {
    width: '33.33%',
    height: '100%',
    padding: 5,
    backgroundColor: '#f6ecf0',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
});

export default styles;
