import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Styles/HotDealItemStyle';
import AppText from './AppText';

const HotDealItem = ({item}) => {
  return (
    <View style={styles.cardView}>
      <Image
        resizeMode="stretch"
        style={styles.image}
        source={{uri: item.url}}
      />
      <Text style={styles.prices}>{item.price}</Text>
      <Text style={styles.discountPrice}>{item.discount}</Text>
      <View style={styles.buyEd}>
        <Text style={styles.buyText}>
          <AppText i18nKey={'sold'} /> {item.buy}
        </Text>
      </View>
    </View>
  );
};

export default HotDealItem;
