import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CarouselCate from './CarouselCate';
import ItemTween from './ItemTween';
import {datacate} from '../../data/datacate';

import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();

const ListLayoutTwo = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={{margin: 7, fontSize: 16}}>Đồ chơi - Me và Bé</Text>
      <View style={styles.carouselContainer}>
        <CarouselCate data={datacate} />
      </View>
      <ItemTween />
    </View>
  );
};
const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: 'red',
    width: 286,
    backgroundColor: 'blue',
  },
});

export default ListLayoutTwo;
