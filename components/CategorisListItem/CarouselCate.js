import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CarouselCateItem from './CarouselCateItem';

const CarouselCate = ({data}) => {
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
  });

  if (data && data.length) {
    return (
      <View style={{backgroundColor: 'white'}}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <CarouselCateItem item={item} />;
          }}
        />
      </View>
    );
  }

  console.log('Please provide Images');
  return null;
};

const styles = StyleSheet.create({
  dotView: {flexDirection: 'row', justifyContent: 'center'},
});

export default CarouselCate;
