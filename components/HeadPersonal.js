import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import styles from './Styles/HeadPersonalStyle';
import AppText from './AppText';

const HeadPersonal = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containt}>
        <Text style={styles.title}>
          <AppText i18nKey={props.title} />
        </Text>
        <TouchableOpacity
          style={{marginRight: 5}}
          onPress={() => navigation.navigate('CartScreen')}>
          <Ionicons
            style={{marginRight: 10}}
            name="cart-outline"
            size={30}
            color="white"
          />
          <Text style={styles.badge}>{props.numberCart}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    numberCart: state.ShopApp.numberCart,
  };
};

export default connect(mapStateToProps)(HeadPersonal);
