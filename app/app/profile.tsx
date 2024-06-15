import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const ProfilePage = () => {
  const router = useRouter();
  const { email } = useLocalSearchParams();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submittedInfo, setSubmittedInfo] = useState({ fullName: '', phoneNumber: '' });

  const handleSubmit = () => {
    setSubmittedInfo({ fullName, phoneNumber });
    setFullName('');
    setPhoneNumber('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>User Profile</Text>
      <View style={styles.profileContainer}>
        <Text style={styles.label}>User email: {email}</Text>
        <Text style={styles.label}>User's Full Name:</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter your full name"
        />
        <Text style={styles.label}>User's Phone Number:</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
        <Button title="Submit" onPress={handleSubmit} color="#3498db" />
      </View>
      {submittedInfo.fullName || submittedInfo.phoneNumber ? (
        <View style={styles.submittedContainer}>
          <Text style={styles.submittedHeader}>User Information</Text>
          <Text style={styles.submittedText}>Full Name: {submittedInfo.fullName}</Text>
          <Text style={styles.submittedText}>Phone Number: {submittedInfo.phoneNumber}</Text>
        </View>
      ) : null}
      <View style={styles.buttonContainer}>
        <Text style={styles.button} onPress={() => router.push('/')}>
          Log out
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    color: '#fff',
    backgroundColor: '#4169E1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  submittedContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginTop: 20,
  },
  submittedHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  submittedText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProfilePage;
