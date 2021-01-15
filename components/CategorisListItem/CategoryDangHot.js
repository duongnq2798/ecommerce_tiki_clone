import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore';

const CardItem = ({url, title}) => (
  <View style={styles.cardItem}>
    <Image
      style={styles.imageCardItem}
      source={{
        uri: url,
      }}
    />
    <Text style={styles.titleItem}>{title}</Text>
  </View>
);
const CategoryDangHot = ({dataCategory}) => {
  const navigation = useNavigation();

  const renderCardItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('CategoryDetailt', {
          Gọi: 'Danh Mục Đang Hot ',
        })
      }>
      <CardItem title={item.title} url={item.url} />
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1, marginBottom: 150}}>
      <Text style={styles.titleRight}>Danh mục đang hot:</Text>
      <View style={styles.bound}>
        <FlatList
          data={dataCategory}
          keyExtractor={(item) => item.id}
          renderItem={renderCardItem}
          showsVerticalScrollIndicator={false}
          numColumns={3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleRight: {
    fontSize: 17,
    margin: 6,
  },
  bound: {
    flex: 1,
    alignItems: 'center',
  },
  titleItem: {
    textAlign: 'center',
  },
  cardItem: {
    width: 75,
    margin: 10,
  },
  imageCardItem: {
    width: '100%',
    height: 70,
  },
});

export default CategoryDangHot;
