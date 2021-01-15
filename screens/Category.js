import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import HeadCategory from '../components/HeadCategory';
import PreLoadingCategory from './PreLoading/PreloadingCategory';
import CategoryDangHot from '../components/CategorisListItem/CategoryDangHot';
import ListLayoutTwo from '../components/CategorisListItem/ListLayoutTwo';
import PreloadingMenu from './PreLoading/PreloadingMenu';

import styles from './Styles/CategoryStyle';

const Categories = () => {
  const [productLists, setProductLists] = useState([]);
  const [categoryId, setCategoryId] = useState(1);

  useEffect(() => {
    const subscriber = firestore()
      .collection('products')
      .onSnapshot((querySnapshot) => {
        const product = [];
        querySnapshot.forEach((documentSnapshot) => {
          product.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setProductLists(product.sort((a, b) => a.id - b.id));
      });
    return () => subscriber();
  }, []);

  const Item = ({url, title}) => (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri: url,
        }}
      />
      <Text style={styles.titleItem}>{title}</Text>
    </View>
  );

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setCategoryId(parseInt(item.id))}>
      <Item title={item.title} url={item.url} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView>
      <HeadCategory />
      <View style={styles.boundary}>
        <View style={styles.recommence}>
          {(() => {
            if (productLists.length > 0) {
              <FlatList
                data={productLists}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
              />;
            } else {
              return <PreloadingMenu />;
            }
          })()}
          <FlatList
            data={productLists}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View showsVerticalScrollIndicator={false} style={styles.shopOnline}>
          {(() => {
            if (productLists.length > 0) {
              switch (categoryId) {
                case 1:
                  return <CategoryDangHot dataCategory={productLists} />;
                case 2:
                  return <ListLayoutTwo />;
                case 3:
                  return <PreLoadingCategory />;
                default:
                  return <Text>Empty</Text>;
              }
            } else {
              return <PreLoadingCategory />;
            }
          })()}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Categories;
