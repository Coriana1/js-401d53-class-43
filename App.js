import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import ChatScreen from './screens/ChatScreen';
import Header from './Components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
      <ChatScreen />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;