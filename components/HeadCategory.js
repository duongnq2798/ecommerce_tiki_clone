import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import styles from './Styles/HeadCategoryStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import AppTextInput from './AppTextInput';

const HeadCategory = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.groupInput}>
          <Ionicons name="ios-search" size={30} color="#3333" />
          <AppTextInput
            style={styles.textSearch}
            placeholderTextColor="#000"
            i18nKey={'categoryProduct'}
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

export default connect(mapStateToProps)(HeadCategory);
