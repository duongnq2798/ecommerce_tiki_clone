import React from 'react';
import {View} from 'react-native';
import styles from '../Styles/PreloadingMenuStyle';

const PreloadingMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.preMenu}>
        <View style={styles.preBox}></View>
        <View style={styles.preBox}></View>
        <View style={styles.preBox}></View>
        <View style={styles.preBox}></View>
        <View style={styles.preBox}></View>
        <View style={styles.preBox}></View>
        <View style={styles.preBox}></View>
        <View style={styles.preBox}></View>
        <View style={styles.preBox}></View>
      </View>
    </View>
  );
};

export default PreloadingMenu;
