import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import StudyPage from './Education';
import MedicalPage from './Health';
import FoodPage from '../Food';
import CampaignPage from '../CampaignPage';
import MakeDonation from '../DonationFunctions/MakeDonation';


type RootParamList = {
  DonateScreen: undefined;
  StudyPage: undefined;
  MedicalPage: undefined;
  FoodPage: undefined;
  CampaignPage: { campaignId: string };
  MakeDonation: { campaignId: string };
};

type DonateScreenNavigationProp = StackNavigationProp<RootParamList, 'DonateScreen'>;

const Stack = createStackNavigator<RootParamList>();

interface Campaign {
  id: string;
  imageUrl: string;
  founderName: string;
  description: string;
  goalAmount: number;
  daysLaunched: number;
}

const DonateScreen = ({ navigation }: { navigation: DonateScreenNavigationProp }) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: '1',
      imageUrl: 'https://example.com/campaign1.jpg',
      founderName: 'Zara Charity',
      description: 'Support education for underprivileged children',
      goalAmount: 1000000,
daysLaunched: 5
    },
    {
      id: '2',
      imageUrl: 'https://example.com/campaign2.jpg',
      founderName: 'Tanzania Development Trust',
      description: 'Provide medical care for the elderly',
      goalAmount: 2000000,
      daysLaunched: 17
    },
    {
      id: '3',
      imageUrl: 'https://example.com/campaign3.jpg',
      founderName: 'Global Giving',
      description: 'Feed the hungry in our community',
      goalAmount: 1500000,
      daysLaunched: 12
    },
    {
      id: '4',
      imageUrl: 'https://example.com/campaign3.jpg',
      founderName: 'Anna Hathaway',
      description: 'Help Provide Study Materials to Children',
      goalAmount: 1800000,
      daysLaunched: 10
    },
    {
      id: '5',
      imageUrl: 'https://example.com/campaign3.jpg',
      founderName: 'WaterAid',
      description: 'Help Provide Clean Water to those in need',
      goalAmount: 900000,
      daysLaunched: 2
    },
    {
      id: '6',
      imageUrl: 'https://example.com/campaign3.jpg',
      founderName: 'Elrha',
      description: 'Support Us in addressing Humanitarian problems',
      goalAmount: 1900000,
      daysLaunched: 16
    },
    {
      id: '7',
      imageUrl: 'https://example.com/campaign3.jpg',
      founderName: 'CR HOPE Foundation',
      description: 'Help Us children by providing quality education',
      goalAmount: 36000000,
      daysLaunched: 7
    },

  ]);

  const handleCategoryPress = (category: keyof RootParamList) => {
    navigation.push(category, { campaignId: '' });
  };

  const handleCampaignPress = (campaignId: string) => {
    navigation.navigate('MakeDonation', { campaignId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryItem} onPress={() => handleCategoryPress('StudyPage')}>
          <FontAwesome5 name="graduation-cap" size={24} color="white" />
          <Text style={styles.categoryText}>Study</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem} onPress={() => handleCategoryPress('MedicalPage')}>
          <FontAwesome5 name="medkit" size={24} color="white" />
          <Text style={styles.categoryText}>Medical</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem} onPress={() => handleCategoryPress('FoodPage')}>
          <FontAwesome5 name="utensils" size={24} color="white" />
          <Text style={styles.categoryText}>Food</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={styles.campaignContainer}>
        {campaigns.map((campaign) => (
          <TouchableOpacity
            key={campaign.id}
            style={styles.campaignItem}
            onPress={() => handleCampaignPress(campaign.id)}
          >
            <Image source={{ uri: campaign.imageUrl }} style={styles.campaignImage} />
            <Text style={styles.campaignFounder}>{campaign.founderName}</Text>
            <Text style={styles.campaignDescription}>{campaign.description}</Text>
            <View style={styles.campaignDetails}>
              <Text style={styles.campaignGoal}>Tsh{campaign.goalAmount}</Text>
              <Text style={styles.campaignDays}>{campaign.daysLaunched} days ago</Text>
            </View>
          </TouchableOpacity>
))}
      </ScrollView>
      
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#007bff',
    paddingVertical: 16
  },
  categoryItem: {
    alignItems: 'center'
  },
  categoryText: {
    color: 'white',
    marginTop: 8
  },
  campaignContainer: {
    marginVertical: 16
  },
  campaignItem: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  campaignImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  campaignFounder: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginHorizontal: 12
  },
  campaignDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    marginHorizontal: 12
  },
  campaignDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginHorizontal: 12,
    marginBottom: 12
  },
  campaignGoal: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  campaignDays: {
    fontSize: 14,
    color: '#666'
  },backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20
  },
  backButtonText: {
    color: 'white',
    marginLeft: 8
 }
});

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DonateScreen" component={DonateScreen} />
      <Stack.Screen name="StudyPage" component={StudyPage} />
      <Stack.Screen name="MedicalPage" component={MedicalPage} />
      <Stack.Screen name="FoodPage" component={FoodPage} />
      <Stack.Screen name="CampaignPage" component={CampaignPage} />
      <Stack.Screen name="MakeDonation" component={MakeDonation} />
    </Stack.Navigator>
  );
};

export default AppNavigator;