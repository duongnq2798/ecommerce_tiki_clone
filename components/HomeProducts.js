import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {actFetchProductsRequest, AddViewProduct} from '../Redux/actions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from '../screens/Styles/CategoryDetailtStyle';
import colors from '../constants/Colors';

const HomeProducts = (props) => {
  useEffect(() => props.actFetchProductsRequest(), []);
  const products = props._products._products;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {(() => {
            return products.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate(
                      'ProductDetailt',
                      {item},
                      props.AddViewProduct(item),
                    )
                  }>
                  <View style={styles.lisPItem}>
                    <Image
                      resizeMode={'stretch'}
                      style={styles.imgProduct}
                      source={{
                        uri: item.url,
                      }}
                    />
                    <Text
                      style={{marginTop: 5, width: '70%'}}
                      numberOfLines={2}>
                      {item.title}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '70%',
                        alignItems: 'center',
                      }}>
                      <Ionicons name="ios-star" size={15} color="#ffc120" />
                      <Ionicons name="ios-star" size={15} color="#ffc120" />
                      <Ionicons name="ios-star" size={15} color="#ffc120" />
                      <Ionicons name="ios-star" size={15} color="#ffc120" />
                      <Text style={{marginLeft: 3, color: colors.comment}}>
                        ({item.comment})
                      </Text>
                    </View>
                    <Text style={{width: '70%'}}>{item.price} vnđ</Text>
                  </View>
                </TouchableOpacity>
              );
            });
          })()}
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    _products: state.ShopApp,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
    AddViewProduct: (item) => dispatch(AddViewProduct(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeProducts);
