import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface iCounter {
  handleIncrement: () => void;
  handleDecrement: () => void;
  handlePassValue: () => void;
  value: number;
}

const Counter = ({ handleIncrement, handleDecrement, handlePassValue, value }: iCounter) => {
  return (
    <View style={styles.container}>
      <Text style={styles.valueText}>{value}</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text style={styles.buttonText}>INCREMENT</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, styles.btnOutline]} onPress={handleDecrement}>
          <Text style={styles.buttonOutlineText}>DECREMENT</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, styles.btnPass]} onPress={handlePassValue}>
          <Text style={styles.buttonText}>PASS VALUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 16,
  },
  valueText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  button: {
    backgroundColor: '#3B82F6',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  btnOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#3B82F6',
    elevation: 0,
    shadowOpacity: 0,
  },
  btnPass: {
    backgroundColor: '#10B981',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  buttonOutlineText: {
    color: '#3B82F6',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  }
});

export default Counter;