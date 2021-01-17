import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Image,
} from 'react-native';

import colors from '../../constants/Colors';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import AppTextInput from '../AppTextInput';
import AppText from '../AppText';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Login = () => {
  const navigation = useNavigation();
  const [color, setColor] = useState('#333');
  const [color2, setColor2] = useState('#333');
  const [color3, setColor3] = useState('#333');
  const [color4, setColor4] = useState('#333');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [urlImage, setUrlImage] = useState('');

  const [filePath, setFilePath] = useState({});

  useEffect(() => {
    // console.log(urlImage);
  });

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        // console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        // console.log('base64 -> ', response.base64);
        // console.log('uri -> ', response.uri);
        // console.log('width -> ', response.width);
        // console.log('height -> ', response.height);
        // console.log('fileSize -> ', response.fileSize);
        // console.log('type -> ', response.type);
        // console.log('fileName -> ', response.fileName);
        // setFilePath(response);
      });
    }
  };

  const chooseFile = (type) => {
    let options = {
      title: 'Chọn hình ảnh',
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, (response) => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      // console.log('base64 -> ', response.base64);
      // console.log('uri -> ', response.uri);
      // setUrlImage(response.base64);
      setUrlImage(response.base64);
      // console.log(response.uri);
      // console.log('width -> ', response.width);
      // console.log('height -> ', response.height);
      // console.log('fileSize -> ', response.fileSize);
      // console.log('type -> ', response.type);
      // console.log('fileName -> ', response.fileName);
      // setFilePath(response);
    });
  };

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home');
        firestore().collection('users').add({
          email: email,
          displayName: name,
          phone: phone,
          avatar: urlImage,
        });
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

  return (
    <ScrollView style={styles.container}>
      <AppTextInput
        style={[styles.email, {borderBottomColor: color}]}
        i18nKey={'fullName'}
        placeholderTextColor={color}
        onFocus={() => setColor(colors.blue)}
        onBlur={() => setColor('#333')}
        value={name}
        onChangeText={(name) => setName(name)}
      />

      <AppTextInput
        style={[styles.email, {borderBottomColor: color2}]}
        i18nKey={'phoneNumber'}
        placeholderTextColor={color2}
        value={phone}
        onChangeText={(phone) => setPhone(phone)}
        onFocus={() => setColor2(colors.blue)}
        onBlur={() => setColor2('#333')}
        keyboardType="phone-pad"
      />
      <AppTextInput
        style={[styles.email, {borderBottomColor: color3}]}
        i18nKey={'email'}
        placeholderTextColor={color3}
        onFocus={() => setColor3(colors.blue)}
        onBlur={() => setColor3('#333')}
        autoCompleteType="tel"
        value={email}
        onChangeText={(email) => setEmail(email)}
        keyboardType="email-address"
      />
      <AppTextInput
        style={[styles.email, {borderBottomColor: color4}]}
        i18nKey={'password'}
        placeholderTextColor={color4}
        onFocus={() => setColor4(colors.blue)}
        onBlur={() => setColor4('#333')}
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <Image
        style={{width: 50, height: 50}}
        // source={{uri: urlImage ? urlImage : null}}
        source={{
          uri: `data:image/gif;base64,${urlImage}`
            ? `data:image/gif;base64,${urlImage}`
            : null,
        }}
      />
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonStyle}
        onPress={() => chooseFile('photo')}>
        <Text style={styles.textStyle}>Choose Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonStyle}
        onPress={() => chooseFile('video')}>
        <Text style={styles.textStyle}>Choose Video</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonStyle}
        onPress={() => captureImage('photo')}>
        <Text style={styles.textStyle}>Launch Camera for Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonStyle}
        onPress={() => captureImage('video')}>
        <Text style={styles.textStyle}>Launch Camera for Video</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.LoginButton} onPress={createUser}>
        <Text style={{color: 'white', fontSize: 17}}>
          <AppText i18nKey={'password'} />
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
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
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
export default Login;
