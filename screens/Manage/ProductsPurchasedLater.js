import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {DeleteProductPurchasedLater} from '../../Redux/actions';
import {bindActionCreators} from 'redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
const {width} = Dimensions.get('window');
const ProductsPurchasedLater = (props) => {
  const navigation = useNavigation();
  let ListCart = [];
  Object.keys(props.CartAfter).forEach(function (item) {
    ListCart.push(props.CartAfter[item]);
  });
  console.log(ListCart);
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
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
        <Text style={styles.textHeader}>Mua Sau</Text>
        <View></View>
      </View>

      <ScrollView>
        {ListCart.map((item, key) => {
          return (
            <View key={key}>
              <View style={styles.productContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    resizeMode="stretch"
                    style={styles.imgStyle}
                    source={{uri: item.url}}
                  />
                </View>

                <View style={styles.productContentContainer}>
                  <Text style={styles.productTitle}>{item.title}</Text>
                  <Text style={styles.productPrice}>{item.price} vnd</Text>
                  <TouchableOpacity>
                    <Text style={styles.productAddToCart}>
                      Thêm vào giỏ hàng
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.DeleteProductPurchasedLater(key)}
                    style={styles.buttonDelProduct}>
                    <Ionicons
                      name="ios-close"
                      size={23}
                      color={colors.comment}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
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
  productContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    width: width / 3,
    height: 120,
    backgroundColor: 'yellow',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  productContentContainer: {
    backgroundColor: 'white',
    width: width - width / 3 - 20,
    padding: 5,
  },
  productAddToCart: {
    color: colors.blue,
    marginTop: 5,
  },
  buttonDelProduct: {
    position: 'absolute',
    right: 10,
    top: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    CartAfter: state.ShopApp.CartAfter,
  };
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      DeleteProductPurchasedLater,
    },
    dispatch,
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsPurchasedLater);
