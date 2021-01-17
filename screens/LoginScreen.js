import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Login from '../components/Authentication/Login';
import SignUp from '../components/Authentication/SignUp';
import images from '../constants/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import styles from './Styles/LoginScreenStyle';
import {connect} from 'react-redux';
const {width, height} = Dimensions.get('window');

const LoginScreen = ({language}) => {
  const navigation = useNavigation();
  const [enLg, setEnLg] = useState('Đăng Nhập');
  const [enSi, setEnSi] = useState('Đăng Ký');
  let englishLogin = 'Login',
    englishSignup = 'Sign Up',
    vietnameLogin = 'Đăng Nhập',
    vietSignup = 'Đăng ký';

  useEffect(() => {
    if (language === 'en') {
      setEnLg(englishLogin);
      setEnSi(englishSignup);
    } else if (language === 'vn') {
      setEnLg(vietnameLogin);
      setEnSi(vietSignup);
    }
  }, []);
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
        <Login tabLabel={enLg} />
        <SignUp tabLabel={enSi} />
      </ScrollableTabView>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.Language.language,
  };
};

export default connect(mapStateToProps, null)(LoginScreen);
