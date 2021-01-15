import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import MessageHeader from '../components/MessageHeader';
import colors from '../constants/Colors';
const ChatScreen = ({navigation}) => {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('MESSAGE_THREADS')
      .orderBy('latestMessage.createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const threads = querySnapshot.docs.map((documentSnapshot) => {
          return {
            _id: documentSnapshot.id,
            name: '',
            latestMessage: {text: ''},
            ...documentSnapshot.data(),
          };
        });

        setThreads(threads);
        if (loading) {
          setLoading(false);
        }
      });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#555" />;
  }

  return (
    <View style={styles.container}>
      <MessageHeader />
      <FlatList
        data={threads}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (
          <View>
            <View style={styles.row}>
              <View style={styles.content}>
                <View style={styles.header}>
                  <Text style={styles.nameText}>{item.name}</Text>
                </View>
                <Text style={styles.contentText}>
                  {item.latestMessage.text.slice(0, 90)}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MessagesScreen', {thread: item})
                }
                style={styles.chatButton}>
                <Text style={styles.chatTextButton}>Chat</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        // ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '500',
  },
  row: {
    paddingRight: 10,
    paddingLeft: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flexShrink: 1,
    marginVertical: 20,
    paddingLeft: 10,
  },
  header: {
    flexDirection: 'row',
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
  },
  dateText: {},
  contentText: {
    color: '#949494',
    fontSize: 16,
    marginTop: 2,
  },
  chatButton: {
    backgroundColor: colors.red,
    width: 100,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatTextButton: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatScreen;
