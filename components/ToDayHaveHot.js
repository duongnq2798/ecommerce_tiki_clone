import React from 'react';
import {View, Image, StyleSheet, Dimensions, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import img from '../constants/Images';
import styles from './Styles/ToDayHaveHotStyles';

const ToDayHaveHot = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Ionicons name="ios-flame" size={20} color="#e85b2a" />
        Hôm Nay Có Gì Hot
      </Text>
      <View style={styles.containerView}>
        <View style={styles.left}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={{uri: img.sale}}
          />
        </View>
        <View style={styles.right}>
          <View style={styles.box}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={{uri: img.sale1}}
            />
          </View>
          <View style={styles.box}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={{uri: img.sale2}}
            />
          </View>
          <View style={styles.box}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={{uri: img.sale3}}
            />
          </View>
          <View style={styles.box}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={{uri: img.sale4}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ToDayHaveHot;
