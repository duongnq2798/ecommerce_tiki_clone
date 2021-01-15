import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './Styles/ListPamperItemStyle';

const ListPamperItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardView}>
      <TouchableOpacity
        style={styles.subTouch}
        activeOpacity={0.6}
        onPress={() => navigation.navigate('ProductDetailt', {item})}>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={{uri: item.url}}
        />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListPamperItem;
