import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HotDealItem from './HotDealItem';
import styles from './Styles/HotDealStyle';
import colors from '../constants/Colors';
const HotDeal = ({data}) => {
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
  });

  if (data && data.length) {
    return (
      <View style={styles.hotdealContainer}>
        <View style={styles.headCounter}>
          <Text style={styles.titleList}>
            Giá Sốc
            <Ionicons name="ios-flash-outline" size={20} color="#e96c28" />
            Hôm Nay
          </Text>
          <TouchableOpacity style={styles.subCounter}>
            <Text style={styles.textCounter}>00</Text>
            <Text style={styles.textCounter}>00</Text>
            <Text style={styles.textCounter}>00</Text>
            <Ionicons
              style={{marginLeft: 5}}
              name="ios-arrow-forward"
              size={20}
              color={colors.grayA}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.supList}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            pagingEnabled
            scrollEnabled
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate={'fast'}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return <HotDealItem item={item} />;
            }}
          />
        </View>
      </View>
    );
  }
  return null;
};

export default HotDeal;
