import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const ListPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.newsSection}>
        <Link href="https://www.bing.com/ck/a?!&&p=1ba7de16e4b901d8JmltdHM9MTcxODA2NDAwMCZpZ3VpZD0yODUyZjcyZS02MTRkLTYzNWItMmNmZi1lNDAyNjBkYjYyYzgmaW5zaWQ9NTIzNA&ptn=3&ver=2&hsh=3&fclid=2852f72e-614d-635b-2cff-e40260db62c8&psq=CHARITY+NEWS+IN+TANZANIA&u=a1aHR0cHM6Ly90YW56YW5pYS5zYXZldGhlY2hpbGRyZW4ubmV0L25ld3M&ntb=1" asChild>
          <TouchableOpacity style={styles.newsItem}>
            <Image source={require('../list/assets1/4.jpeg')} style={styles.newsImage} />
            <Text style={styles.newsTitle}>Charity Event a Huge Success!</Text>
            <Text style={styles.newsDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</Text>
          </TouchableOpacity>
        </Link>

        <Link href="https://www.bing.com/ck/a?!&&p=4423b334ee331ddfJmltdHM9MTcxODA2NDAwMCZpZ3VpZD0yODUyZjcyZS02MTRkLTYzNWItMmNmZi1lNDAyNjBkYjYyYzgmaW5zaWQ9NTIxMQ&ptn=3&ver=2&hsh=3&fclid=2852f72e-614d-635b-2cff-e40260db62c8&psq=BLOGS+ON+CHARITY+NEWS+IN+TANZANIA&u=a1aHR0cHM6Ly93d3cuc2lnaHRzYXZlcnMub3JnL3doZXJlLXdlLXdvcmsvdGFuemFuaWEv&ntb=1" asChild>
          <TouchableOpacity style={styles.newsItem}>
            <Image source={require('../list/assets1/3.jpeg')} style={styles.newsImage} />
            <Text style={styles.newsTitle}>New Partnership with Local School</Text>
            <Text style={styles.newsDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</Text>
          </TouchableOpacity>
        </Link>

        <Link href="https://www.bing.com/ck/a?!&&p=df70cd8f1d84fd25JmltdHM9MTcxODA2NDAwMCZpZ3VpZD0yODUyZjcyZS02MTRkLTYzNWItMmNmZi1lNDAyNjBkYjYyYzgmaW5zaWQ9NTM1MQ&ptn=3&ver=2&hsh=3&fclid=2852f72e-614d-635b-2cff-e40260db62c8&psq=BLOGS+ON+CHARITY+NEWS+IN+TANZANIA&u=a1aHR0cHM6Ly93d3cudGVtcGxldG9ud29ybGRjaGFyaXR5Lm9yZy9ibG9nL2NoYW5naW5nLXRoZS13b3JsZC13aXRoLWRyLWphbmUtZ29vZGFsbC1wb2RjYXN0&ntb=1" asChild>
          <TouchableOpacity style={styles.newsItem}>
            <Image source={require('../list/assets1/7.jpeg')} style={styles.newsImage} />
            <Text style={styles.newsTitle}>Charity Run Raises Over $10,000!</Text>
            <Text style={styles.newsDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20, // Added padding to the sides
  },
  newsSection: {
    paddingVertical: 20,
  },
  newsItem: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1, // Reduced shadow opacity for a softer shadow
    shadowRadius: 5,
    elevation: 5, // Added elevation for Android shadow
  },
  newsImage: {
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsDescription: {
    fontSize: 16,
    color: '#666',
  },
});

export default ListPage;
