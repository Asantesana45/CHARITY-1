import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CharitiesScreen from './CharitiesScreen';
import DonateScreen from './DonateScreen';

import { FontAwesome5 } from '@expo/vector-icons';

// Home Screen
const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Welcome to our Charity Management System</Text>
        <Text style={styles.heroDescription}>Discover and support local charities making a difference.</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionDescription}>Learn more about our mission and how we help charities.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Charity Organizations</Text>
        <Text style={styles.sectionDescription}>Browse our list of local charities and their campaigns.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Charities</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Donate</Text>
        <Text style={styles.sectionDescription}>Support the causes you care about with a donation.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Donate Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Volunteer</Text>
        <Text style={styles.sectionDescription}>Join our team of volunteers and make a difference.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Volunteer</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <View style={styles.contactContainer}>
          <View style={styles.contactRow}>
            <FontAwesome5 name="facebook" size={24} color="#4169E1" />
            <Text>Facebook: @charityorg</Text>
          </View>
          <View style={styles.contactRow}>
            <FontAwesome5 name="instagram" size={24} color="#4169E1" />
            <Text>Instagram: @charityorg</Text>
          </View>
          <View style={styles.contactRow}>
            <FontAwesome5 name="envelope" size={24} color="#4169E1" />
            <Text>Email: charity@organization.com</Text>
          </View>
          <View style={styles.contactRow}>
            <FontAwesome5 name="phone" size={24} color="#4169E1" />
            <Text>Phone: +1234567890</Text>
          </View>
        </View>
      </View>




    </ScrollView>
  );
};
export default HomeScreen

// Charity Organization Details Screen
const CharityOrganizationDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Charity Organization Name</Text>
        <Text style={styles.heroDescription}>Charity Organization Description</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Campaigns</Text>
        <View style={styles.campaignContainer}>
          <Text style={styles.campaignTitle}>Campaign 1</Text>
          <Text style={styles.campaignDescription}>Campaign 1 Description</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Donate</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.campaignContainer}>
          <Text style={styles.campaignTitle}>Campaign 2</Text>
          <Text style={styles.campaignDescription}>Campaign 2 Description</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Donate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// Navigation
const Stack = createStackNavigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  heroSection: {
    backgroundColor: '#4169E1',
    padding: 20,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  heroDescription: {
    fontSize: 16,
    color: '#fff',
  },
  sectionContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4169E1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  campaignContainer: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
  campaignTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  campaignDescription: {
    fontSize: 14,
    marginBottom: 10,
  },

  contactContainer: {
    marginTop: 10,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});


