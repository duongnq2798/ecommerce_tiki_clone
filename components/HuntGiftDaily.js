import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import img from '../constants/Images';
import styles from './Styles/HuntGiftDailyStyle';

const HuntGiftDaily = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Săn Thưởng Mỗi Ngày</Text>
      <Image
        resizeMode="stretch"
        style={styles.image}
        source={{
          uri: img.hunt,
        }}
      />
    </View>
  );
};

export default HuntGiftDaily;
