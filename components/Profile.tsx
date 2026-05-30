import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProfileProps {
  name: string;
  age: number;
}

const Profile = ({ name, age }: ProfileProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>
        Halo nama ku, <Text style={styles.highlight}>{name}</Text>!
      </Text>
      <Text style={styles.ageText}>
        Umur ku, <Text style={styles.highlight}>{age}</Text> tahun
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    width: '100%',
  },
  greetingText: {
    fontSize: 18,
    color: '#374151',
    marginBottom: 4,
  },
  ageText: {
    fontSize: 16,
    color: '#4B5563',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#2563EB',
  }
});

export default Profile;