import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import img from '../../constants/Images';
const {width, height} = Dimensions.get('window');
const WaitPayment = () => {
  return (
    <View style={{width}}>
      <View style={styles.groupsEmpty}>
        <Image
          style={{height: 150, width: 150}}
          source={{uri: img.emptyOrder}}
        />
        <Text>Chưa có đơn hàng nào</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  groupsEmpty: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200,
  },
});

export default WaitPayment;
