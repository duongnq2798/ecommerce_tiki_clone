import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const CustomTabBar = () => {
  return (
    <View style={styles.tabLogin}>
      <View style={styles.tabSingle}>
        <Text style={styles.holderLogin}>Đăng nhập</Text>
      </View>
      <View style={styles.tabSingle}>
        <Text style={styles.holderLogin}>Đăng ký</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabLogin: {
    flexDirection: 'row',
    width,
    height: 50,
    backgroundColor: '#f1f1f1',
  },
  tabSingle: {
    width: width / 2,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  holderLogin: {
    color: 'black',
    fontSize: 18,
  },
});
export default CustomTabBar;
