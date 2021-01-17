import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './Styles/ListPamperItemStyle';
import AppText from './AppText';

const ListPamperItem = ({item}) => {
  const navigation = useNavigation();
  let text;
  switch (item.id) {
    case 1:
      text = 'discountCode';
      break;
    case 2:
      text = 'loadCard';
      break;
    case 4:
      text = 'refund';
      break;
    case 5:
      text = 'appointmentDeliveryInstallation';
      break;
    case 8:
      text = 'freshFood';
      break;
    case 9:
      text = 'partnerIncentives';
      break;
    case 10:
      text = 'beerAndWine';
      break;
    default:
      text = '';
  }
  return (
    <View style={styles.cardView}>
      <TouchableOpacity
        style={styles.subTouch}
        activeOpacity={0.6}
        onPress={() => navigation.navigate('ProductDetailt', {item})}>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={{uri: item.url}}
        />
        <AppText style={styles.title} i18nKey={text}>
          {item.title}
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default ListPamperItem;
