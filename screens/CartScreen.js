import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
  AddCartAfter,
} from '../Redux/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import staticText from '../constants/StaticText';
import styles from './Styles/CartScreenStyles';
import formatMoney from '../constants/utils';
const Cart = (props) => {
  const navigation = useNavigation();
  useEffect(() => {
    // console.log(props.items);
  });
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(props.items.Carts).forEach(function (item) {
    TotalCart +=
      props.items.Carts[item].quantity * props.items.Carts[item].price;
    ListCart.push(props.items.Carts[item]);
  });
  function TotalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString('en-US');
  }

  // Create handleIncrement event handler
  return (
    <View style={styles.container}>
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
        <Text style={styles.textHeader}>Giỏ hàng ({props.numberCart})</Text>
        <View></View>
      </View>

      <ScrollView>
        <View style={styles.freeShip}>
          <Ionicons
            style={{marginLeft: 5}}
            name="ios-gift"
            size={20}
            color={colors.success}
          />
          <Text style={{color: colors.success, marginLeft: 5}}>
            Bạn được miễn phí giao hàng
          </Text>
        </View>

        {ListCart.length > 0 ? (
          ListCart.map((item, key) => {
            return (
              <View
                key={key}
                style={{flexDirection: 'row', backgroundColor: 'white'}}>
                <View style={styles.boundaryImg}>
                  <Image style={styles.imgItem} source={{uri: item.url}} />
                </View>

                <View style={styles.boundaryInfomationItem}>
                  <View style={styles.nameOfCost}>
                    <View style={styles.name}>
                      <Text style={{fontSize: 15}} numberOfLines={2}>
                        {item.title}
                      </Text>
                      <Text style={styles.cost}>{item.price} vnđ</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        props.DeleteCart(key);
                      }}>
                      <Ionicons
                        style={{marginRight: 5}}
                        name="ios-close"
                        size={25}
                        color={colors.comment}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.groupInDe}>
                    <View style={styles.inCreaseDescrease}>
                      <TouchableOpacity
                        style={styles.distant}
                        onPress={() => props.DecreaseQuantity(key)}>
                        <Text style={{fontSize: 17}}>-</Text>
                      </TouchableOpacity>
                      <Text
                        style={[
                          styles.distant,
                          {backgroundColor: colors.white},
                        ]}>
                        {item.quantity}
                      </Text>
                      <TouchableOpacity
                        style={styles.distant}
                        onPress={() => props.IncreaseQuantity(key)}>
                        <Text style={{fontSize: 16}}>+</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        props.AddCartAfter(item), props.DeleteCart(key);
                      }}>
                      <Text
                        style={{
                          color: colors.blue,
                          fontSize: 16,
                          marginTop: 4,
                          marginRight: 4,
                        }}>
                        Mua sau
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })
        ) : (
          <View style={styles.emptyProduct}>
            <Image
              style={styles.emptyProductImg}
              source={require('../assets/Cart/emptyProduct.png')}
            />
            <Text style={styles.emptyProductText}>
              {staticText.emptyProductText}
            </Text>
            <TouchableOpacity
              style={styles.emptyButton}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.textEmptyButton}>Tiếp tục mua sắm</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <View>
          <View style={styles.footSum}>
            <Text style={{fontSize: 16}}>Thành tiền</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: colors.red}}>
              {formatMoney(TotalCart)} vnđ
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProcessingOrderScreen')}
            style={styles.buttonOrder}>
            <Text style={{color: colors.white, fontSize: 18}}>
              Tiến Hành Đặt Hàng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    numberCart: state.ShopApp.numberCart,
    items: state.ShopApp,
  };
};
// AddCartAfter: (item) => dispatch(AddCartAfter(item)),
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      IncreaseQuantity,
      DecreaseQuantity,
      DeleteCart,
      AddCartAfter: (item) => dispatch(AddCartAfter(item)),
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  // {
  // IncreaseQuantity,
  // DecreaseQuantity,
  // DeleteCart,
  // mapDispatchToProps,
  // },
  mapDispatchToProps,
)(Cart);
