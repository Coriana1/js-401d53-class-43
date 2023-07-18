import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ChatScreen from '../screens/ChatScreen';

describe('ChatScreen', () => {
  test('renders messages correctly', () => {
    const messages = [
      { id: 1, content: 'Hello', timestamp: '10:00 AM', sender: 'user', delivered: true },
      { id: 2, content: 'Hi there', timestamp: '10:01 AM', sender: 'bot', delivered: true },
    ];

    const { getByTestId } = render(<ChatScreen />);
    
    messages.forEach((message) => {
      const messageContent = getByTestId(`message-content-${message.id}`);
      expect(messageContent).toBeTruthy();
    });
  });

  test('sends a message and adds it to the chat list', () => {
    const { getByPlaceholderText, getByText } = render(<ChatScreen />);
    const inputField = getByPlaceholderText('Type your message');
    const sendButton = getByText('Send');

    fireEvent.changeText(inputField, 'Hello, this is a test message');
    fireEvent.press(sendButton);

    const sentMessage = getByText('Hello, this is a test message');
    expect(sentMessage).toBeTruthy();
  });

  test('deletes a message and removes it from the chat list', () => {
    const { getByText, queryByText } = render(<ChatScreen />);
    const deleteButton = getByText('Delete');

    fireEvent.press(deleteButton);

    const deletedMessage = queryByText('Hello, this is a test message');
    expect(deletedMessage).toBeNull();
  });

  test('edits a message and updates it in the chat list', () => {
    const { getByText, getByPlaceholderText } = render(<ChatScreen />);
    const editButton = getByText('Edit');
    const inputField = getByPlaceholderText('Type your message');
    const sendButton = getByText('Send');

    fireEvent.press(editButton);
    fireEvent.changeText(inputField, 'Edited message');
    fireEvent.press(sendButton);

    const updatedMessage = getByText('Edited message');
    expect(updatedMessage).toBeTruthy();
  });

  test('displays typing indicator when user is typing', () => {
    const { getByText, getByPlaceholderText } = render(<ChatScreen />);
    const inputField = getByPlaceholderText('Type your message');

    fireEvent.changeText(inputField, 'Hello');

    const typingIndicator = getByText('User is typing...');
    expect(typingIndicator).toBeTruthy();
  });

  test('displays delivery status checkmark for delivered messages', () => {
    const messages = [
      { id: 1, content: 'Hello', timestamp: '10:00 AM', sender: 'user', delivered: true },
      { id: 2, content: 'Hi there', timestamp: '10:01 AM', sender: 'bot', delivered: false },
    ];

    const { getByTestId } = render(<ChatScreen />);
    
    messages.forEach((message) => {
      const deliveryStatus = getByTestId(`delivery-status-${message.id}`);
      const messageContent = getByTestId(`message-content-${message.id}`);

      if (message.delivered) {
        expect(deliveryStatus).toBeTruthy();
      } else {
        expect(deliveryStatus).toBeNull();
      }

      expect(messageContent).toBeTruthy();
    });
  });
});