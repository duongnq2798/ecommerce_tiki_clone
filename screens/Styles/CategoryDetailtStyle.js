import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#f4eeed',
    borderBottomWidth: 1,
  },
  headLeft: {
    flexDirection: 'row',
    width: width / 2,
  },
  headRight: {
    flexDirection: 'row',
    borderLeftColor: '#f4eeed',
    borderLeftWidth: 3,
    paddingLeft: 10,
  },
  tikinow: {
    width: 50,
    height: 30,
  },
  lisPItem: {
    width: width / 2 - 1,
    height: height / 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    marginBottom: 1,
    marginRight: 1,
    borderColor: '#333',
    borderWidth: 0.2,
  },
  imgProduct: {
    width: '80%',
    height: 150,
  },
});

export default styles;
