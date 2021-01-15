import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preTitle: {
    width: 200,
    height: 20,
    backgroundColor: '#cae4db',
    margin: 10,
    borderRadius: 4,
  },
  preContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
    flexWrap: 'wrap',
  },
  preBoxContent: {
    width: 70,
    height: 80,
    margin: 5,
    backgroundColor: '#e7e7de',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  preImage: {
    backgroundColor: '#fcf8e8',
    width: 60,
    height: 40,
    borderRadius: 4,
  },
  preText: {
    backgroundColor: '#fcf8e8',
    width: 60,
    height: 10,
    marginTop: 10,
    borderRadius: 4,
  },
});

export default styles;
