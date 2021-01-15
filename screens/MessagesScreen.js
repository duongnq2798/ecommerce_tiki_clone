import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  GiftedChat,
  Send,
  Bubble,
  SystemMessage,
  InputToolbar,
} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MessageHeader from '../components/MessageHeader';
import metrics from '../constants/metrics';
import colors from '../constants/Colors';

const MessagesScreen = ({route}) => {
  const [textList, setTextLists] = useState([]);
  const {thread} = route.params;
  const userAuth = auth().currentUser.toJSON();
  const [users, setUser] = useState([]);
  const [avtuser, setAvtUser] = useState('');

  async function handleSend(messages) {
    const text = messages[0].text;
    const userDisplayName = users.map((item, index) => {
      return item.displayName;
    });

    let getAvatar;
    const avartar = users.forEach((item) => {
      if (item.email == userAuth.email) {
        getAvatar = item.avatar;
        setAvtUser(item.avatar);
      }
    });
    // console.log(getAvatar);

    firestore()
      .collection('MESSAGE_THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .add({
        text,
        createAt: new Date().getTime(),
        user: {
          _id: userAuth.uid,
          email: userAuth.email,
          name: userDisplayName.toString(),
          avatar: `data:image/gif;base64,${getAvatar}`,
        },
      });

    await firestore()
      .collection('MESSAGE_THREADS')
      .doc(thread._id)
      .set(
        {
          latestMessage: {
            text,
            createdAt: new Date().getTime(),
          },
        },
        {merge: true},
      );
  }

  useEffect(() => {
    const subscriber = firestore()
      .collection('MESSAGE_THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .orderBy('createAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const texts = [];
        querySnapshot.forEach((documentSnapshot) => {
          texts.push({
            ...documentSnapshot.data(),
          });
        });
        setTextLists(texts);
      });

    const subscriberUser = firestore()
      .collection('users')
      .onSnapshot((querySnapshot) => {
        const user = [];
        querySnapshot.forEach((documentSnapshot) => {
          user.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setUser(user);
      });

    return () => {
      subscriber();
      subscriberUser();
    };
  }, []);

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6646ee" />
      </View>
    );
  }

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#6646ee',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  }

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6646ee" />
      </View>
    );
  }

  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <Ionicons name="ios-arrow-down-circle" size={25} color={colors.blue} />
      </View>
    );
  }

  function renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        wrapperStyle={styles.systemMessageWrapper}
        textStyle={styles.systemMessageText}
      />
    );
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <Ionicons
            name="ios-send-sharp"
            size={metrics.iconLarge}
            color={colors.blue}
            style={{marginBottom: 5, marginRight: 5}}
          />
        </View>
      </Send>
    );
  }

  const renderInputToolbar = (props) => {
    return (
      <InputToolbar {...props}>
        <TouchableOpacity style={{width: 50}}>
          <Ionicons
            name="ios-send-sharp"
            size={metrics.iconLarge}
            color={colors.blue}
            style={{marginBottom: 5, marginRight: 5}}
          />
        </TouchableOpacity>
      </InputToolbar>
    );
  };

  return (
    <View style={{flex: 1}}>
      <MessageHeader />
      <GiftedChat
        messages={textList}
        onSend={handleSend}
        user={{
          _id: userAuth.uid,
        }}
        showUserAvatar={true}
        showAvatarForEveryMessage={true}
        alwaysShowSend
        scrollToBottom={true}
        renderBubble={renderBubble}
        renderLoading={renderLoading}
        renderSend={renderSend}
        renderInputToolbar={renderInputToolbar}
        scrollToBottomComponent={scrollToBottomComponent}
        renderSystemMessage={renderSystemMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  systemMessageWrapper: {
    backgroundColor: '#6646ee',
    borderRadius: 4,
    padding: 5,
  },
  systemMessageText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MessagesScreen;
