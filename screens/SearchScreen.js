import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {commonStyles} from '../constants/Styles';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import colors from '../constants/Colors';
import text from '../constants/StaticText';
import styles from './Styles/SearchScreenStyle';
const SearchScreen = () => {
  const navigation = useNavigation();
  const [productLists, setProductLists] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    const subscriber = firestore()
      .collection('products')
      .onSnapshot((querySnapshot) => {
        const products = [];
        querySnapshot.forEach((documentSnapshot) => {
          products.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setProductLists(products.sort((a, b) => a.id - b.id));
      });
    return () => subscriber();
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
      }}
      onPress={() => navigation.navigate('ProductDetailt', {item: item})}
      activeOpacity={0.8}>
      <Ionicons name="ios-search" size={27} color="#3333" />
      <Text style={styles.renderItem}>{item.title}</Text>
    </TouchableOpacity>
  );
  const nonAccentVietnamese = (str) => {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    return str;
  };

  const filter = (textCheck) => {
    setValue(textCheck);
    let objectFill = productLists.filter((item) =>
      nonAccentVietnamese(item.title.toLowerCase()).includes(
        nonAccentVietnamese(textCheck.toLowerCase()),
      ),
    );
    setFilteredArr(objectFill);
  };
  return (
    <View style={styles.container}>
      <View style={[commonStyles.row, styles.header]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={27} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.textGroup}>
          <Ionicons name="ios-search" size={27} color="#3333" />
          <TextInput
            style={styles.textInput}
            placeholder={text.placeHolderSearch}
            numberOfLines={1}
            value={value}
            onChangeText={(textCheck) => {
              filter(textCheck);
            }}
          />
        </View>
      </View>

      <View style={styles.resultSearch}>
        <FlatList
          data={filteredArr.length > 0 ? filteredArr : productLists}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
