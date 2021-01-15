import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import MessageHeader from '../components/MessageHeader';
import colors from '../constants/Colors';
const CreateChatRoom = ({navigation}) => {
  const [roomName, setRoomName] = useState('');
  function handleButtonPress() {
    if (roomName.length > 0) {
      // create new thread using firebase & firestore
      firestore()
        .collection('MESSAGE_THREADS')
        .add({
          name: roomName,
          latestMessage: {
            text: `${roomName} đã tạo phòng`,
            createdAt: new Date().getTime(),
          },
        })
        .then((docRef) => {
          docRef.collection('MESSAGES').add({
            text: `${roomName}`,
            createdAt: new Date().getTime(),
            system: true,
          });
          navigation.navigate('ChatScreen');
        });
    }
  }
  return (
    <View style={styles.container}>
      <MessageHeader />
      <TextInput
        style={styles.nameRoom}
        placeholder="Tên phòng..."
        value={roomName}
        onChangeText={(roomName) => setRoomName(roomName)}
      />
      <TouchableOpacity
        style={styles.chatCreateButton}
        onPress={() => {
          handleButtonPress();
        }}>
        <Text style={styles.chatButtonText}>Create Chat Room</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => {
          navigation.navigate('ChatScreen');
        }}>
        <Text style={styles.chatButtonText}>Vào chat screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  nameRoom: {
    borderWidth: 2,
    borderColor: colors.blue,
    margin: 15,
    padding: 15,
    paddingLeft: 15,
    fontSize: 17,
    borderRadius: 30,
    fontWeight: 'bold',
  },
  chatButton: {
    backgroundColor: colors.red,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 25,
    borderRadius: 35,
  },
  chatButtonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  chatCreateButton: {
    backgroundColor: colors.blue,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 25,
    borderRadius: 35,
  },
});

export default CreateChatRoom;
