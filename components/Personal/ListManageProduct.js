import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ListItemManage} from '../../data/ListItemManage';
import {ListItemBot} from '../../data/ListItemManage';
import {support} from '../../data/ListItemManage';
import colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import ManageOrder from '../../screens/ManageOrder';

const ListItem = ({icon, title, arrow}) => (
  <View style={styles.item}>
    <View style={styles.boxContainer}>
      <View style={styles.boxChild}>
        <View style={styles.icon}>
          <Ionicons name={icon} size={25} color={colors.black} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View>
        <MaterialIcons name={arrow} size={25} color={colors.comment} />
      </View>
    </View>
  </View>
);

const ListManageProduct = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        if (item.id === 1) {
          navigation.navigate('ManageOrderScreen');
        } else if (item.id === 6) {
          navigation.navigate('ProductsPurchasedLaterScreen');
        } else if (item.id == 3) {
          navigation.navigate('ViewedProductsScreen');
        } else if (item.id == 8) {
          navigation.navigate('SettingScreen');
        }
      }}
      style={{backgroundColor: colors.white, marginBottom: 1.5}}>
      <ListItem title={item.title} icon={item.icon} arrow={item.arrow} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={{marginTop: 10}}
        data={ListItemManage}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle
      />
      <FlatList
        style={{marginTop: 10}}
        data={ListItemBot}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <FlatList
        style={{marginTop: 10}}
        data={support}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxChild: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    color: colors.black,
    letterSpacing: 0.5,
  },
});

export default ListManageProduct;
