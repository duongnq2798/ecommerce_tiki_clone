import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import MaskTabBar from 'react-native-scrollable-tab-view-mask-bar';
import colors from '../constants/Colors';
import AllOrder from '../components/ManageOrder/AllOrder';
import WaitPayment from '../components/ManageOrder/WaitPayment';
import Handling from '../components/ManageOrder/Handling';
import Shipping from '../components/ManageOrder/Shipping';
import Ordered from '../components/ManageOrder/Ordered';
const {width} = Dimensions.get('window');
const ManageOrder = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons
            style={{marginLeft: 5}}
            name="ios-close"
            size={32}
            color={colors.white}
          />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Đơn Hàng Của Tôi</Text>
        <View></View>
      </View>
      <ScrollableTabView
        renderTabBar={() => <MaskTabBar showMask={true} maskMode="light" />}
        tabBarUnderlineStyle={{backgroundColor: '#111d5e', height: 3}}
        initialPage={0}>
        <AllOrder tabLabel="Tất cả đơn hàng" />
        <WaitPayment tabLabel="Chờ thành toán" />
        <Handling tabLabel="Đang xử lý" />
        <Shipping tabLabel="Đang vận chuyển" />
        <Ordered tabLabel="Đã giao" />
      </ScrollableTabView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  textHeader: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ManageOrder;
