import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import ListPamperItem from './ListPamperItem';

const ListPamper = ({data}) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, []);

  if (data && data.length) {
    return (
      <View style={{marginBottom: 15}}>
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
            return <ListPamperItem item={item} />;
          }}
        />
      </View>
    );
  }
  return null;
};

export default ListPamper;
