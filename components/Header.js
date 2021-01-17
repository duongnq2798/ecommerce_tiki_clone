import React, {useState} from 'react';
import styles from './Styles/HeaderStyle';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {changeLanguage} from '../Redux/actions';
import metrics from '../constants/metrics';
import colors from '../constants/Colors';
import AppTextInput from './AppTextInput';

const Header = ({iconSearch, placeHolder, numberCart, language}) => {
  const navigation = useNavigation();

  useState(() => {
    console.log(language);
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <TouchableOpacity activeOpacity={1} style={styles.groupInput}>
          <Ionicons
            name={iconSearch}
            size={metrics.iconMedium}
            color={colors.grayA}
          />
          <AppTextInput
            style={styles.textSearch}
            placeholderTextColor={colors.grayA}
            i18nKey={'whatAreYouLokingForToday'}
            onFocus={() => navigation.navigate('SearchScreen')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreateChatRoomScreen');
          }}
          style={styles.distanceIcon}>
          <Ionicons
            name="ios-chatbubbles-outline"
            size={metrics.iconMedium}
            color={colors.white}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
            <Ionicons
              name="ios-cart-outline"
              size={metrics.iconLarge}
              color={colors.white}
            />
            <Text style={styleCustom.badge}>{numberCart}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styleCustom = StyleSheet.create({
  badge: {
    position: 'absolute',
    height: 20,
    width: 20,
    backgroundColor: colors.orange,
    right: -7,
    borderRadius: 100,
    textAlign: 'center',
    color: colors.white,
    fontSize: 12,
    lineHeight: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    numberCart: state.ShopApp.numberCart,
    language: state.Language.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLanguage: (payload) => {
      dispatch(changeLanguage(payload));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
