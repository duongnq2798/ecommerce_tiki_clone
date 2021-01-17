import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import colors from '../../constants/Colors';
// Authenication
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-community/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import AppTextInput from '../AppTextInput';
import AppText from '../AppText';

GoogleSignin.configure({
  webClientId:
    '689350675021-9m3g40qhg6hr4he7jj3bg298pcanff32.apps.googleusercontent.com',
});
async function onGoogleButtonPress() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

async function onFacebookButtonPress() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}

const Login = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const subcriber = firestore()
      .collection('users')
      .onSnapshot((querySnapshot) => {
        const users = [];
        querySnapshot.forEach((documentSnapshot) => {
          users.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setUsers(users);
      });
    return () => subcriber();
  }, []);

  const navigation = useNavigation();
  const loginApp = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('PersonalScreen');
        const user = users.find((user) => user.email === email);
        zzzz;
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const [color, setColor] = useState('#333');
  const [color2, setColor2] = useState('#333');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView style={styles.container}>
      <AppTextInput
        style={[styles.email, {borderBottomColor: color}]}
        i18nKey={'emailOrPhone'}
        placeholderTextColor={color}
        onFocus={() => setColor(colors.blue)}
        onBlur={() => setColor('#333')}
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <AppTextInput
        style={[styles.email, {borderBottomColor: color2}]}
        i18nKey={'password'}
        placeholderTextColor={color2}
        onFocus={() => setColor2(colors.blue)}
        onBlur={() => setColor2('#333')}
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.LoginButton}
        onPress={loginApp}>
        <Text style={{color: 'white', fontSize: 17}}>
          <AppText i18nKey={'login'} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.quenMatKhau}>
        <Text style={{color: colors.blue}}>
          <AppText i18nKey={'forgotPassword'} />
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: 100,
          marginVertical: 20,
        }}>
        <TouchableOpacity
          onPress={() =>
            onFacebookButtonPress().then(() =>
              console.log('Signed in with Facebook'),
            )
          }
          style={styles.buttonAuthFace}>
          <Text style={styles.textAuth}>F</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }
          style={styles.buttonAuthGoogle}>
          <Text style={styles.textAuth}>G</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  email: {
    borderBottomWidth: 1,
    fontSize: 15,
    marginBottom: 20,
  },
  LoginButton: {
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: '#e7413b',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  quenMatKhau: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonAuthFace: {
    width: 50,
    height: 50,
    backgroundColor: '#385898',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonAuthGoogle: {
    width: 50,
    height: 50,
    backgroundColor: '#e74133',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  textAuth: {
    color: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 17,
  },
});
export default Login;
