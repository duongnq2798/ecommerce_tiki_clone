import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';

import colors from '../constants/Colors';
import HeadPersonal from '../components/HeadPersonal';
import ListManageProduct from '../components/Personal/ListManageProduct';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import styles from './Styles/PersonalScreenStyles';

const PersonalScreen = () => {
  const navigation = useNavigation();
  const logoff = () => {
    auth()
      .signOut()
      .then(() => console.log('Người dùng đăng xuất : Personal Screen!'));
  };
  function LoginApp() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }

    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
      return (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <View style={styles.welcome}>
              <View>
                <Image
                  style={{width: 60, height: 60, marginRight: 10}}
                  source={{
                    uri:
                      'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
                  }}
                />
              </View>
              <View>
                <Text style={{color: '#333'}}>Chào mừng bạn đến với Tiki</Text>
                <Text style={{fontSize: 19, color: colors.blue}}>
                  Đăng nhập/Đăng ký
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <ListManageProduct />
        </View>
      );
    }

    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.welcome}>
            <View>
              <Image
                style={{width: 60, height: 60, marginRight: 10}}
                source={{
                  uri:
                    'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
                }}
              />
            </View>
            <View>
              <Text style={{color: '#333', width: '80%'}} numberOfLines={2}>
                Chào mừng {user.email} đến với Tiki
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <ListManageProduct />
        <TouchableOpacity style={styles.dangXuat} onPress={logoff}>
          <Text style={{color: colors.blue, fontSize: 17}}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HeadPersonal title="Cá Nhân" />
      <LoginApp />
    </ScrollView>
  );
};

export default PersonalScreen;
