import React from 'react';
import {View, Text} from 'react-native';
import {SvgUri} from 'react-native-svg';
import styles from './Styles/CardPolicyStyle';
const CardPolicy = ({infoPolicy, svgPhoto}) => {
  return (
    <View style={styles.container}>
      <SvgUri width={40} height={40} uri={svgPhoto} />
      <Text style={styles.title}>{infoPolicy}</Text>
    </View>
  );
};

export default CardPolicy;
