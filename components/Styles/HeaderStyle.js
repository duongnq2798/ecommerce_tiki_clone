import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';

export default StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.blue,
    paddingTop: 7,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupInput: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  textSearch: {
    width: '90%',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 15,
    height: 45,
    fontWeight: 'bold',
  },
  distanceIcon: {
    paddingHorizontal: 15,
  },
});
