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
import HeadProductDetail from '../components/HeadProductDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from './Styles/CategoryDetailtStyle';
import colors from '../constants/Colors';

const CategoryDetailt = (props) => {
  useEffect(() => props.actFetchProductsRequest(), []);
  const products = props._products._products;

  // useEffect(() => {
  //   console.log(products);
  // });
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <HeadProductDetail />
      <View style={styles.head}>
        <View style={styles.headLeft}>
          <Ionicons name="ios-flag-outline" size={25} color="black" />
          <Text style={{fontSize: 15, marginLeft: 6}} numberOfLines={1}>
            Quận 1, Thành Phố Hồ Chí Minh, Việt Nam
          </Text>
        </View>
        <View style={styles.headRight}>
          <Image
            style={styles.tikinow}
            source={{
              uri:
                'https://salt.tikicdn.com/ts/banner/33/ba/89/54c02d2475983f93a024c0cd13f238e4.png',
            }}
          />
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? 'blue' : '#fff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.head}>
        <View>
          <Text style={{fontSize: 15}}>Quận 1</Text>
        </View>
        <View style={styles.headRight}>
          <Ionicons name="ios-funnel-outline" size={25} color="black" />
          <Text style={{fontSize: 16, marginLeft: 10}}>Lọc</Text>
        </View>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetailt);
