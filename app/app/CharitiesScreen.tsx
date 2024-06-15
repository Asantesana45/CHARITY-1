import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

const CharitiesScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>LIST OF CHARITY CAMPAIGNS</Text>
      </View>
      
      <View style={styles.campaignContainer}>
        <View style={styles.campaign}>
          <Text style={styles.title}>Humanitarian Campaign</Text>
          <Text style={styles.description}>Providing essential medical care and treatments for children suffering from illnesses and disabilities, giving them a chance at a healthier future.</Text>
          <Text style={styles.amount}>Amount Needed: TShs 1,900,000</Text>
          <Text style={styles.days}>Days Launched: 16</Text>
        </View>
      </View>
      
      <View style={styles.campaignContainer}>
        <View style={styles.campaign}>
          <Text style={styles.title}>Education for All</Text>
          <Text style={styles.description}>Help Us children by providing quality education</Text>
          <Text style={styles.amount}>Amount Needed: TShs 3,600,000</Text>
          <Text style={styles.days}>Days Launched: 27</Text>
        </View>
      </View>

      <View style={styles.campaignContainer}>
        <View style={styles.campaign}>
          <Text style={styles.title}>Medical Aid for Children</Text>
          <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</Text>
          <Text style={styles.amount}>Amount Needed: TShs 100,000</Text>
          <Text style={styles.days}>Days Launched: 5</Text>
        </View>
      </View>

      <View style={styles.campaignContainer}>
        <View style={styles.campaign}>
          <Text style={styles.title}>Supporting Orphaned Children</Text>
          <Text style={styles.description}>Offering care, education, and emotional support to orphaned children, helping them thrive despite the loss of parental care.</Text>
          <Text style={styles.amount}>Amount Needed: TShs 2,000,000</Text>
          <Text style={styles.days}>Days Launched: 15</Text>
        </View>
      </View>

      <View style={styles.campaignContainer}>
        <View style={styles.campaign}>
          <Text style={styles.title}>Shelter for the Homeless</Text>
          <Text style={styles.description}>Building shelters and providing support services for individuals and families experiencing homelessness, offering them a safe place to rebuild their lives.</Text>
          <Text style={styles.amount}>Amount Needed: TShs 100,000</Text>
          <Text style={styles.days}>Days Launched: 5</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingVertical: 20,
  },
  header: {
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  campaignContainer: {
    paddingVertical: 20,
  },
  campaign: {
    backgroundColor: '#e0f7fa', // Pale blue background
    
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  amount: {
    fontSize: 16,
    marginBottom: 5,
  },
  days: {
    fontSize: 16,
    color: '#666',
  },
});

export default CharitiesScreen;
