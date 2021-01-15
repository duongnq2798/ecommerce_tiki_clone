import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

// import CustomTabBars from '../components/Tab/CustomTabBar';
import Login from '../components/Authentication/Login';
import SignUp from '../components/Authentication/SignUp';
import images from '../constants/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import styles from './Styles/LoginScreenStyle';
const {width, height} = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.container}>
      <View style={styles.relate}>
        <TouchableOpacity
          style={styles.customClose}
          onPress={() => navigation.goBack()}>
          <Ionicons
            style={{marginLeft: 10, marginTop: 5}}
            name="ios-close"
            size={35}
            color="white"
          />
        </TouchableOpacity>
        <Image
          resizeMode="stretch"
          style={{width, height: height / 5}}
          source={{uri: images.Login}}
        />
      </View>
      <ScrollableTabView
        tabBarUnderlineStyle={{backgroundColor: '#fdb827', height: 3}}
        tabBarActiveTextColor="black"
        initialPage={0}>
        <Login tabLabel="Đăng Nhập" />
        <SignUp tabLabel="Đăng Ký" />
      </ScrollableTabView>
    </ScrollView>
  );
};

export default LoginScreen;
