import React, {useState, useCallback} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {notificationMock} from '../data/notification';
import colors from '../constants/Colors';
import styles from './Styles/RightContentStyle';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
const Item = ({title, url, description, time}) => (
  <View style={{width: '85%'}}>
    <View style={styles.postGroup}>
      <View>
        <Image
          style={styles.imageNews}
          source={{
            uri: url,
          }}
        />
      </View>
      <View style={{marginLeft: 5}}>
        <Text style={styles.titlePost} numberOfLines={2}>
          {title}
        </Text>
        <Text>{time}</Text>
      </View>
    </View>
    <View
      style={{
        borderBottomWidth: 0.8,
        borderBottomColor: colors.comment,
        paddingnBottom: 5,
        paddingVertical: 10,
        width: '100%',
      }}>
      <Text style={styles.content}>{description}</Text>
    </View>
  </View>
);
const RightContent = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      url={item.url}
      description={item.description}
      time={item.time}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{width: '100%'}}
        data={notificationMock}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default RightContent;
