import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: 100,
    height: 100,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  subTouch: {
    height: 90,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
  },
});

export default styles;
