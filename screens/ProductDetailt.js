import React, {useRef, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {AddCart} from '../Redux/actions';
import {connect} from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../constants/Colors';
import font from '../constants/Font';
import Lightbox from 'react-native-lightbox';

import styles from './Styles/ProductDetailtStyle';
import CardPolicy from '../components/CardPolicy';
import img from '../constants/Images';

const ProductDetailt = (props) => {
  const navigation = useNavigation();
  const {item} = props.route.params;

  const sheetRef = useRef(null);
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 300,
      }}>
      <View style={styles.titlePoptup}>
        <View style={styles.popInchi}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="ios-checkmark-done-circle-outline"
            size={15}
            color={colors.success}
          />
          <Text style={{color: colors.success, marginLeft: 5}}>
            Sản phẩm đã được thêm vào giỏ hàng
          </Text>
        </View>
        <TouchableOpacity onPress={() => sheetRef.current.snapTo(1)}>
          <Ionicons name="ios-close" size={20} color={colors.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.popBody}>
        <Image
          style={{width: 60, height: 80, borderRadius: 5}}
          source={{uri: item.url}}
        />

        <View style={{marginLeft: 15}}>
          <Text style={{fontSize: 17}} numberOfLines={2}>
            {item.title}
          </Text>
          <Text>Cung cấp bởi Tiki Trading</Text>
          <Text>{item.price}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('CartScreen')}
        style={styles.viewCart}>
        <Text style={styles.viewCartText}>Xem giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <View style={styles.iconList}>
        <View>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="ios-arrow-back"
            size={30}
            color="white"
            style={styles.ionIcon}
          />
        </View>
        <View style={styles.iconLeft}>
          <Ionicons
            style={styles.ionIcon}
            name="ios-search"
            size={30}
            color="white"
          />
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Ionicons
              style={styles.ionIcon}
              name="ios-home-outline"
              size={30}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
            <Ionicons
              style={styles.ionIcon}
              name="ios-cart-outline"
              size={30}
              color="white"
            />
            <Text style={styles.badge}>{props.numberCart}</Text>
          </TouchableOpacity>

          <Ionicons
            style={styles.ionIcon}
            name="ios-home-outline"
            size={30}
            color="white"
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.containt}>
          <View style={{justifyContent: 'center', flexDirection: 'column'}}>
            <View style={styles.watchList}>
              <Lightbox backgroundColor="#222831" navigator={props.navigator}>
                <Image
                  resizeMode="stretch"
                  style={styles.img}
                  source={{
                    uri: item.url,
                  }}
                />
              </Lightbox>
              <View style={styles.title}>
                <Text style={{fontSize: 17}} numberOfLines={2}>
                  {item.title}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '70%',
                  }}>
                  <Ionicons name="ios-star" size={15} color="#ffc120" />
                  <Ionicons name="ios-star" size={15} color="#ffc120" />
                  <Ionicons name="ios-star" size={15} color="#ffc120" />
                  <Ionicons name="ios-star" size={15} color="#ffc120" />
                  <Text style={{marginLeft: 3, color: colors.comment}}>
                    (Xem {item.comment} đánh giá)
                  </Text>
                </View>
                <Text style={{width: '70%', fontSize: font.price}}>
                  {item.price}
                  <Text
                    style={{
                      letterSpacing: 1,
                      textDecorationLine: 'line-through',
                      fontSize: font.priceDiscount,
                    }}>
                    110.000
                  </Text>
                </Text>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    resizeMode="stretch"
                    style={{width: 60, height: 30}}
                    source={{
                      uri:
                        'https://salt.tikicdn.com/ts/upload/7b/17/f7/4860983e93ea3c264ae0d932c58ec4f7.png',
                    }}
                  />
                  <Text style={{marginLeft: 15}}>
                    Hoàn tiên 15% tối đa 600k/tháng
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.locationInfomation}>
          <View style={styles.headInfoLocation}>
            <Text style={{fontSize: 17, width: '90%'}} numberOfLines={1}>
              Giao đến Quận 12, P.Thạnh Xuân, Hồ Chí Minh, Việt Nam
            </Text>
            <Ionicons name="arrow-forward-outline" size={25} color="black" />
          </View>
          <View style={{marginBottom: 15}}>
            <Text style={{fontSize: 17}}>Nhà bán Vadata</Text>
            <View style={styles.shipProduct}>
              <View>
                <Text style={styles.special}>GIAO TIÊU CHUẨN</Text>
                <Text style={{color: 'green', fontWeight: 'bold'}}>
                  Thứ 7, ngày 12 tháng 12
                </Text>
                <Text>Vận chuyển: 35.000 đ</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.policy}>
          <CardPolicy
            infoPolicy="Hoàn tiền 111% nếu giả"
            svgPhoto={img.policyImg1}
          />
          <CardPolicy
            infoPolicy="Mở hộp kiểm tra nhận hàng"
            svgPhoto={img.policyImg2}
          />
          <CardPolicy
            infoPolicy="Đổi trả trong 30 ngày nếu sp lỗi"
            svgPhoto={img.policyImg3}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonBuy}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChatScreen');
          }}
          activeOpacity={0.5}
          style={styles.chat}>
          <Ionicons
            name="ios-chatbubbles-outline"
            size={20}
            color={colors.blueBold}
          />
          <Text style={styles.textContent}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.traGop}>
          <Text style={styles.textContent}>Trả Góp</Text>
          <Text style={styles.textContent}>1.498.33 đ/tháng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            sheetRef.current.snapTo(0);
            props.AddCart(item);
          }}
          activeOpacity={0.9}
          style={styles.button}>
          <Text style={styles.selectBuy}>Chọn Mua</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
        ref={sheetRef}
        initialSnap={1}
        snapPoints={[200, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    _products: state.ShopApp,
    numberCart: state.ShopApp.numberCart,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    AddCart: (item) => dispatch(AddCart(item)),
    AddViewProduct: (item) => dispatch(AddViewProduct(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailt);
