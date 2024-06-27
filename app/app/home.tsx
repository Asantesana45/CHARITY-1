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
        <Text style={styles.heroDescription}>Explore, support, and join the change!</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionDescription}>Our mission is to connect compassionate individuals with local charities that are making a real difference. We aim to support various causes, from education and healthcare to environmental sustainability. By fostering a strong network of volunteers and donors, we strive to amplify the efforts of these organizations and create a lasting impact.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Charity Campaigns</Text>
        <Text style={styles.sectionDescription}>Browse through various campaigns organized by our charity partners. Each campaign is designed to address specific issues and needs, allowing you to support the causes that matter most to you. Learn about the goals, beneficiaries, and progress of each campaign.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Campaigns</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Donate</Text>
        <Text style={styles.sectionDescription}>Support the causes you care about with a donation. Your contribution can make a significant impact in the lives of those in need. Choose a campaign and donate any amount to help us reach our goals.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Donate Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Our Team</Text>
        <Text style={styles.sectionDescription}>Meet the dedicated team behind our organization. Our team consists of passionate individuals committed to making a difference. Learn about their roles, experiences, and what drives them to work towards our mission.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Meet the Team</Text>
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
export default HomeScreen;

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
const Stack = createStackNavigator();

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


