import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');
import colors from '../../constants/Colors';
const ProcessingOrder = ({navigation}) => {
  const [color, setColor] = useState('#333');
  const [color2, setColor2] = useState('#333');
  const [color3, setColor3] = useState('#333');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons
            style={{marginLeft: 5}}
            name="ios-close"
            size={32}
            color={colors.white}
          />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Địa Chỉ Nhận Hàng</Text>
        <View></View>
      </View>

      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.formGroups}>
          <Text style={{marginTop: 5, fontSize: 16}}>
            Nhập địa chỉ giao hàng
          </Text>
          <View>
            <Text style={styles.labelText}>Tên người nhận</Text>
            <TextInput
              style={{
                width: '99%',
                borderBottomWidth: 2,
                borderBottomColor: color,
              }}
              placeholder="Nhập họ & tên người nhận"
              placeholderTextColor={color}
              onFocus={() => setColor(colors.blue)}
              onBlur={() => setColor('#333')}
              value={email}
              onChangeText={(email) => setEmail(email)}
              keyboardType="email-address"
            />
            <Text style={styles.labelText}>Số điện thoại</Text>
            <TextInput
              style={{
                width: '99%',
                borderBottomWidth: 2,
                borderBottomColor: color2,
              }}
              placeholder="Nhập số điện thoại nhận hàng"
              placeholderTextColor={color2}
              onFocus={() => setColor2(colors.blue)}
              onBlur={() => setColor2('#333')}
              value={phone}
              onChangeText={(phone) => setPhone(phone)}
              keyboardType="phone-pad"
            />
            <Text style={styles.labelText}>Số điện thoại</Text>
            <TextInput
              style={{
                width: '99%',
                borderBottomWidth: 2,
                borderBottomColor: color3,
              }}
              placeholder="Nhập số nhà, tên đường..."
              placeholderTextColor={color3}
              onFocus={() => setColor3(colors.blue)}
              onBlur={() => setColor3('#333')}
              value={adress}
              onChangeText={(adress) => setAdress(adress)}
              keyboardType="default"
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View>
          <TouchableOpacity style={styles.buttonOrder}>
            <Text style={{color: colors.white, fontSize: 18}}>
              Giao đến địa chỉ này
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  textHeader: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  formGroups: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  labelText: {
    marginTop: 20,
  },
  footer: {
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
  buttonOrder: {
    backgroundColor: colors.red,
    marginBottom: 25,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 25,
  },
});

export default ProcessingOrder;
