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
import AppText from '../AppText';

const ListManageProduct = () => {
  const navigation = useNavigation();
  let text = '';
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
      <View style={styles.item}>
        <View style={styles.boxContainer}>
          <View style={styles.boxChild}>
            <View style={styles.icon}>
              <Ionicons name={item.icon} size={25} color={colors.black} />
            </View>
            <View>
              {(() => {
                switch (item.id) {
                  case 1:
                    text = 'manageOrder';
                    break;
                  case 2:
                    text = 'purchasedProduct';
                    break;
                  case 3:
                    text = 'viewedProduct';
                    break;
                  case 4:
                    text = 'favorireProduct';
                    break;
                  case 5:
                    text = 'ratedProducts';
                    break;
                  case 6:
                    text = 'productPurchasedLater';
                    break;
                  case 7:
                    text = 'offersForBankCardHolders';
                    break;
                  case 8:
                    text = 'setting';
                    break;
                  case 9:
                    text = 'support';
                    break;
                  default:
                    text = '';
                }
              })()}
              <AppText style={styles.title} i18nKey={text} />
            </View>
          </View>
          <View>
            <MaterialIcons name={item.arrow} size={25} color={colors.comment} />
          </View>
        </View>
      </View>
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
