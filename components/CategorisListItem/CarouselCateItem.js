import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const CarouselCateItem = ({item}) => {
  return (
    <Image resizeMode="stretch" style={styles.image} source={{uri: item.url}} />
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: 200,
    height: 130,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width: 286,
    height: 130,
    borderRadius: 10,
  },
});

export default CarouselCateItem;
