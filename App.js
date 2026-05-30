import React, { useState } from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import Counter from './Counter';
import Profile from './Profile';

export default function App() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');
  const [submittedData, setSubmittedData] = useState({ 
    name: 'Anonymous', 
    age: 0 
  });

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => { // untuk mencegah anomali umur menjadi minus
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handlePassValue = () => {
    setSubmittedData({
      name: inputText.trim() === '' ? 'Anonymous' : inputText,
      age: count
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.card}>
          <Profile name={submittedData.name} age={submittedData.age} />
          <Counter 
            value={count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handlePassValue={handlePassValue}
          />
          <TextInput
            style={styles.input}
            placeholder="Input your name here..."
            placeholderTextColor="#9CA3AF"
            value={inputText}
            onChangeText={setInputText}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E5E7EB',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    maxWidth: 400,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1F2937',
    marginTop: 20,
    backgroundColor: '#F9FAFB',
  }
});