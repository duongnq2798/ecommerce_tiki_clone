import React from 'react';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import styles from './Styles/HeadProductDetailStyle';

const MessageHeader = (props) => {
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
        <View>
          <Text style={{fontSize: 19, color: 'white'}}>Chat</Text>
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

export default connect(mapStateToProps)(MessageHeader);
