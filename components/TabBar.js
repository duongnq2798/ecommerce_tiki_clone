import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/Colors';
import styles from './Styles/TabBarStyle';

const TabBar = (props) => {
  const {setActiveTab} = props;
  const [activeButtonNumber, setActiveButtonNumber] = useState(1);
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setActiveTab(1);
          setActiveButtonNumber(1);
        }}
        style={[
          styles.tab,
          {
            borderLeftWidth: 5,
            borderLeftColor:
              activeButtonNumber == 1 ? colors.blue : 'transparent',
          },
        ]}>
        <Ionicons name="home-sharp" size={27} color={colors.comment} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setActiveTab(2);
          setActiveButtonNumber(2);
        }}
        style={[
          styles.tab,
          {
            borderLeftWidth: 5,
            borderLeftColor:
              activeButtonNumber == 2 ? colors.blue : 'transparent',
          },
        ]}>
        <Entypo name="back-in-time" size={27} color={colors.comment} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setActiveTab(3);
          setActiveButtonNumber(3);
        }}
        style={[
          styles.tab,
          {
            borderLeftWidth: 5,
            borderLeftColor:
              activeButtonNumber == 3 ? colors.blue : 'transparent',
          },
        ]}>
        <MaterialCommunityIcons
          name="brightness-percent"
          size={27}
          color={colors.comment}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TabBar;
