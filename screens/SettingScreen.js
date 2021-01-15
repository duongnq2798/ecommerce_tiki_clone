import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {changeLanguage} from '../Redux/actions';
import HeadPersonal from '../components/HeadPersonal';

const SettingScreen = (props) => {
  const isVNLang = props.language === 'vi' ? true : false;

  const setLanguageHook = (lang) => {
    props.setLanguage(lang);
    // console.log(lang);H
  };
  return (
    <View>
      <HeadPersonal title="Cài đặt" />
      <TouchableOpacity
        onPress={() => setLanguageHook('vi')}
        style={{marginLeft: 20}}>
        <Text style={{color: isVNLang ? 'blue' : 'grey', fontSize: 50}}>
          Việt Nam
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setLanguageHook('en')}
        style={{marginLeft: 5}}>
        <Text style={{color: !isVNLang ? 'blue' : 'grey', fontSize: 50}}>
          English
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.Language.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLanguage: (language) => {
      dispatch(changeLanguage(language));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);
