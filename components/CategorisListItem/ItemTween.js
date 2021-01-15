import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import {dataTween} from '../../data/tween';

const {width, height} = Dimensions.get('window');
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
const ItemTween = () => {
  const renderCardItem = ({item}) => (
    <TouchableOpacity activeOpacity={0.8}>
      {/* <Text>hoooo</Text> */}
      <CardItem title={item.title} url={item.url} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.headContainer}>
      <View style={styles.headTitle}>
        <View>
          <Text style={{fontSize: 15}}>Tã, Bỉm</Text>
        </View>
        <View>
          <Text>TẤT CẢ</Text>
          {/* <Ionicons name="ios-search" size={25} color="#3333" /> */}
        </View>
      </View>
      <View style={styles.bound}>
        <FlatList
          data={dataTween}
          keyExtractor={(item) => item.id}
          renderItem={renderCardItem}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          scrollEnabled={true}
          contentContainerStyle={{marginBottom: 20}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 3,

    padding: 7,
  },
  headTitle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bound: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardItem: {
    width: 75,
    margin: 10,
  },
  imageCardItem: {
    width: '100%',
    height: 70,
    borderRadius: 5,
  },
  titleItem: {
    textAlign: 'center',
  },
});

export default ItemTween;
