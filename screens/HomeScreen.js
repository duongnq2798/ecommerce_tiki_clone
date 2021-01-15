import React, {useState} from 'react';
import {
  View,
  Image,
  Modal,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import ListPamper from '../components/ListPamper';
import HotDeal from '../components/HotDeal';
import FlashSale from '../components/FlashSale';
import ToDayHaveHot from '../components/ToDayHaveHot';
import HuntGiftDaily from '../components/HuntGiftDaily';
import HomeProducts from '../components/HomeProducts';
import ViewBuy from '../components/ViewBuy';
import SearchHot from '../components/SearchHot';
import {dummyData} from '../data/data';
import {pamperData} from '../data/pamper';
import {hotdealData} from '../data/hotdeal';
import colors from '../constants/Colors';
import icons from '../constants/Icons';
import text from '../constants/StaticText';
import img from '../constants/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import stylesComponent from './Styles/HomeScreenStyle';

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={colors.blue} />
      <ParallaxScrollView
        showsVerticalScrollIndicator={false}
        parallaxHeaderHeight={50}
        renderFixedHeader={() => (
          <Header iconSearch={icons.iconSearch} placeHolder={text.textSearch} />
        )}>
        <View style={{backgroundColor: colors.blue}}>
          <Carousel data={dummyData} />
          <HotDeal data={hotdealData} />
          <FlashSale />
        </View>
        <View style={{backgroundColor: 'white'}}>
          <ListPamper data={pamperData} />
        </View>
        <View style={{backgroundColor: colors.backgroundScreen}}>
          <ToDayHaveHot />
          <HuntGiftDaily />
          <ViewBuy />
          <SearchHot />
          <HomeProducts />
        </View>
      </ParallaxScrollView>
      <Modal transparent={true} visible={isVisible}>
        <View style={stylesComponent.modalContainer}>
          <Image
            resizeMode="stretch"
            style={stylesComponent.imageModal}
            source={{uri: img.modalHome}}
          />
          <TouchableOpacity
            onPress={() => {
              setIsVisible(false);
            }}
            style={stylesComponent.iconModal}>
            <Ionicons name="close-circle-outline" size={50} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsVisible(false);
          }}
          activeOpacity={0}
          style={stylesComponent.backgroundModal}></TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Home;
