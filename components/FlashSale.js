import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import img from '../constants/Images';
import styles from './Styles/FlashSaleStyle';

const FlashSale = () => {
  return (
    <View>
      <Image
        resizeMode="stretch"
        style={styles.imageContainer}
        source={{
          uri: img.FlashSale,
        }}
      />
    </View>
  );
};

export default FlashSale;
