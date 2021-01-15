import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import styles from './Styles/HeadProductDetailStyle';

const HeadProductDetail = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Ionicons
          onPress={() => navigation.goBack()}
          style={{marginRight: 15, marginLeft: 5}}
          name="ios-arrow-back"
          size={30}
          color="white"
        />
        <View style={styles.groupInput}>
          <Ionicons
            onPress={() => navigation.navigate('Category')}
            name="ios-search"
            size={30}
            color="#3333"
          />
          <TextInput
            style={styles.textSearch}
            placeholderTextColor="#000"
            placeholder="Danh sách kỹ năng làm việc"
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
            <Ionicons
              style={{marginLeft: 10, marginRight: 5}}
              name="ios-cart-outline"
              size={30}
              color="white"
            />
            <Text style={styles.badge}>{props.numberCart}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    numberCart: state.ShopApp.numberCart,
  };
};

export default connect(mapStateToProps)(HeadProductDetail);
