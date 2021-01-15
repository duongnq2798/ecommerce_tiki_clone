import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import CarouselItem from './CarouselItem';

const Carousel = ({data}) => {
  const [dataList, setDataList] = useState(data);
  useEffect(() => {
    setDataList(data);
  });

  if (data && data.length) {
    return (
      <View style={{marginTop: 20}}>
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
            return <CarouselItem item={item} />;
          }}
        />
      </View>
    );
  }
  return null;
};

export default Carousel;
