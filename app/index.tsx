import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const firebaseConfig = {
  apiKey: "AIzaSyCHGQDQ7IBjfVcZ88fECCnsFaYoMEyeQXM",
  authDomain: "charity-app-e954f.firebaseapp.com",
  projectId: "charity-app-e954f",
  storageBucket: "charity-app-e954f.appspot.com",
  messagingSenderId: "1041692105361",
  appId: "1:1041692105361:web:6e3b41a4f7cca72826bd30",
  measurementId: "G-HPVCJHFSLB"
};

const app = initializeApp(firebaseConfig);

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // Track user authentication state
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false); // Track password visibility
  const [errorMessage, setErrorMessage] = useState(''); // Track error message

  const auth = getAuth(app);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      if (user) {
        // If user is already authenticated, log out
        console.log('User logged out successfully!');
        await signOut(auth);
      } else {
        // Sign in or sign up
        if (isLogin) {
          // Sign in
          await signInWithEmailAndPassword(auth, email, password);
          console.log('User signed in successfully!');
        } else {
          // Sign up
          await createUserWithEmailAndPassword(auth, email, password);
          console.log('User created successfully!');
        }
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
      setErrorMessage('Incorrect email or password, try again..');
      setTimeout(() => setErrorMessage(''), 3000); // Clear error message after 3 seconds
    }
  };

  const handleNavigationToHome = () => {
    router.replace('/app/home');
  };

  const handleNavigationToProfile = () => {
    router.push({
      pathname: './app/profile',
      params: { email: user?.email }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user ? (
        // Show user's email if user is authenticated
        <View style={styles.authContainer}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.emailText}>{user.email}</Text>
          <Button title="Logout" onPress={handleAuthentication} color="#e74c3c" />

          <View style={styles.buttonGap} />

          <Button title="Navigate to Home Page" onPress={handleNavigationToHome} color="#3498db" />

          <View style={styles.buttonGap} />

          <Button title="Navigate to Profile Page" onPress={handleNavigationToProfile} color="#3498db" />
        </View>
      ) : (
        // Show sign-in or sign-up form if user is not authenticated
        <View style={styles.authContainer}>
          <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            autoCapitalize="none"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={24} color="gray" />
            </TouchableOpacity>
          </View>
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
          <View style={styles.buttonContainer}>
            <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
          </View>

          <View style={styles.bottomContainer}>
            <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  authContainer: {
    width: '100%', // Make the auth container take full width
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emailText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  buttonGap: {
    height: 25,
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16, // Increased font size for better readability
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingRight: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16, // Increased font size for better readability
  },
  eyeIcon: {
    padding: 10,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 10,
  },
  bottomContainer: {
    marginTop: 20,
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
  },
});

export default LoginPage;
