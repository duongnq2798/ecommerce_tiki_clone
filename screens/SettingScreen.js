import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {changeLanguage} from '../Redux/actions';
import HeadPersonal from '../components/HeadPersonal';
import styles from './Styles/SettingScreenStyle';

const SettingScreen = (props) => {
  const isVNLang = props.language === 'vi' ? true : false;

  const setLanguageHook = (lang) => {
    props.setLanguage(lang);
  };
  return (
    <View>
      <HeadPersonal title="setting" />
      <View style={styles.chanegGroup}>
        <TouchableOpacity
          onPress={() => setLanguageHook('vi')}
          style={styles.buttonChange}>
          <Text
            style={[
              {color: isVNLang ? 'white' : 'grey', fontSize: 20},
              styles.buttonText,
            ]}>
            Việt Nam
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setLanguageHook('en')}
          style={styles.buttonChange}>
          <Text
            style={[
              {color: !isVNLang ? 'white' : 'grey', fontSize: 20},
              styles.buttonText,
            ]}>
            English
          </Text>
        </TouchableOpacity>
      </View>
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
