import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import img from '../constants/Images';
import styles from './Styles/ViewBuyStyle';
import AppText from './AppText';

const ViewBuy = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        <Ionicons name="ios-heart" size={20} color="#612e96" />
        <AppText i18nKey={'seeBuyNow'} />
      </Text>
      <View style={styles.boundaryNi}>
        <View style={styles.boxNi}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={{uri: img.viewbuy1}}
          />
        </View>
        <View style={styles.boxNi}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={{uri: img.viewbuy2}}
          />
        </View>
      </View>
      <View style={styles.boundarySan}>
        <View style={styles.boxSan}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={{uri: img.viewbuy3}}
          />
        </View>
        <View style={styles.boxSan}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={{uri: img.viewbuy4}}
          />
        </View>
        <View style={styles.boxSan}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={{uri: img.viewbuy5}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewBuy;
