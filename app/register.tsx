import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';

type RegisterPageNavigationProp = {
  navigate: (screen: string) => void;
};

const RegisterPage = () => {
  const navigation = useNavigation<RegisterPageNavigationProp>();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Validate form fields
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === '' ||
      email.trim() === '' ||
      contactNumber.trim() === '' ||
      location.trim() === ''
    ) {
      alert('Please fill in all the required fields.');
      return;
    }

    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (isNaN(parseInt(contactNumber))) {
      alert('Contact number must be a valid number.');
      return;
    }

    // Mark form as submitted
    setSubmitted(true);
  };

  const handleLogin = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.container}>
      {!submitted && <Text style={styles.title}>SIGN-UP</Text>}
      {!submitted ? (
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          <Text style={styles.passwordRequirements}>
            Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Create Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Verify Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            keyboardType="numeric"
            value={contactNumber}
            onChangeText={setContactNumber}
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.successContainer}>
          <Text style={styles.successMessage}>Congratulations! You have successfully registered.</Text>
    
          <View style={styles.createAccountContainer}>
            <Link href={'/'}>
              <Pressable style={[styles.createAccountButton, { backgroundColor: '#007AFF' }]}>
                <Text style={[styles.createAccountButtonText, { color: 'white' }]}>Go back to Login Page</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  passwordRequirements: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  successContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  successMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  createAccountContainer: {
    marginTop: 20,
  },
  createAccountButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  createAccountButtonText: {
    fontWeight: 'bold',
  },
});

export default RegisterPage;
