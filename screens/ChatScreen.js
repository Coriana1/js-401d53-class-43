import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet } from 'react-native';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [typing, setTyping] = useState(false);

  const handleSendMessage = () => {
    if (message !== '') {
      const timestamp = new Date().toLocaleString();
      const newMessage = {
        id: chatMessages.length + 1,
        content: message,
        timestamp: timestamp,
        sender: 'user',
        delivered: false,
      };
      setChatMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');
      setTyping(false);
    }
  };

  const handleDeleteMessage = (id) => {
    setChatMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
  };

  const handleEditMessage = (id, content) => {
    setChatMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id ? { ...message, content: content } : message
      )
    );
  };

  const renderMessage = ({ item }) => {
    return (
      <View style={styles.messageContainer}>
        <View style={styles.messageInfo}>
          <Text style={styles.senderText}>{item.sender}</Text>
          <Text style={styles.timestampText}>{item.timestamp}</Text>
        </View>
        <View style={styles.messageContent}>
          <Text testID={`message-content-${item.id}`} style={styles.messageText}>
            {item.content}
          </Text>
          {item.delivered && (
            <Text testID={`delivery-status-${item.id}`} style={styles.checkmark}>
              ✔️
            </Text>
          )}
        </View>
        <View style={styles.messageActions}>
          <Text style={styles.actionText} onPress={() => handleDeleteMessage(item.id)}>
            Delete
          </Text>
          <Text style={styles.actionText} onPress={() => handleEditMessage(item.id, 'Edited message')}>
            Edit
          </Text>
        </View>
      </View>
    );
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chatContainer}>
        <FlatList
          data={chatMessages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.chatListContent}
          inverted
        />
        {typing && <Text style={styles.typingIndicator}>User is typing...</Text>}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={(text) => {
              setMessage(text);
              setTyping(text !== '');
            }}
            placeholder="Type your message"
            placeholderTextColor="#888888"
          />
          <Button title="Send" onPress={handleSendMessage} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  chatListContent: {
    paddingTop: 16,
    paddingBottom: 8,
  },
  messageContainer: {
    marginVertical: 4,
    paddingHorizontal: 12,
  },
  messageInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  senderText: {
    fontWeight: 'bold',
    color: '#6495ED',
  },
  timestampText: {
    color: '#888888',
  },
  messageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  messageText: {
    flex: 1,
    fontSize: 16,
    color: 'white',
  },
  checkmark: {
    fontSize: 14,
    marginLeft: 4,
    color: 'green',
    fontWeight: 'bold',
  },
  messageActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionText: {
    marginLeft: 16,
    color: '#6495ED',
  },
  typingIndicator: {
    alignSelf: 'center',
    color: '#888888',
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 8,
  },
  input: {
    flex: 1,
    marginRight: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
  },
});

export default ChatScreen;
