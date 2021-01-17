import React from 'react';
import {View, Image, Text} from 'react-native';
import img from '../constants/Images';
import styles from './Styles/HuntGiftDailyStyle';
import AppText from './AppText';

const HuntGiftDaily = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <AppText i18nKey={'huntGiftDaily'} />
      </Text>
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
