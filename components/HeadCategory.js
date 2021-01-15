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
const HeadCategory = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.groupInput}>
          <Ionicons name="ios-search" size={30} color="#3333" />
          <TextInput
            style={styles.textSearch}
            placeholderTextColor="#000"
            placeholder="Danh mục sản phẩm"
            // inlineImageLeft={()=><Ionicons name="ios-person" size={30} color="#4F8EF7" />}
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
