import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../constants/Colors';
import img from '../constants/Images';
import styles from './Styles/SearchHotStyle';
import AppText from './AppText';

const SearchHot = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headTitle}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons
            style={{lineHeight: 30}}
            name="ios-search"
            size={25}
            color="black"
          />
          <Text style={styles.title}>
            <AppText i18nKey={'outstandingSearch'} />
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons
            style={{lineHeight: 30, marginRight: 5}}
            name="ios-reload"
            size={23}
            color={colors.blue}
          />
          <TouchableOpacity>
            <Text style={[styles.title, {color: colors.blue}]}>
              <AppText i18nKey={'viewMore'} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.boundaryYon}>
        <View style={styles.boxYon}>
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={{uri: img.searchHot1}}
          />
          <View style={styles.gpContent}>
            <Text style={styles.contentTilte}>nước hoa nam</Text>
            <Text style={styles.quatityProduct}>1k+ sản phẩm</Text>
          </View>
        </View>
        <View style={styles.boxYon}>
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={{uri: img.searchHot2}}
          />
          <View style={styles.gpContent}>
            <Text style={styles.contentTilte}>crep protect</Text>
            <Text style={styles.quatityProduct}>137 sản phẩm</Text>
          </View>
        </View>
        <View style={styles.boxYon}>
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={{uri: img.searchHot3}}
          />
          <View style={styles.gpContent}>
            <Text style={styles.contentTilte}>thước cặp điện tử</Text>
            <Text style={styles.quatityProduct}>112 sản phẩm</Text>
          </View>
        </View>
        <View style={styles.boxYon}>
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={{uri: img.searchHot4}}
          />
          <View style={styles.gpContent}>
            <Text style={styles.contentTilte}>móc treo</Text>
            <Text style={styles.quatityProduct}>436 sản phẩm</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchHot;
