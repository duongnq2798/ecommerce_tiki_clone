import React from 'react';
import {View, Image} from 'react-native';
import styles from './Styles/CarouselItemStyle';

const CarouselItem = ({item}) => {
  return (
    <View style={styles.cardView}>
      <Image
        resizeMode="stretch"
        style={styles.image}
        source={{uri: item.url}}
      />
    </View>
  );
};

export default CarouselItem;
