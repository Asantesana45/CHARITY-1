// CampaignPage.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  CampaignPage: { campaignId: string };
};

type CampaignPageRouteProp = RouteProp<RootStackParamList, 'CampaignPage'>;

type CampaignPageNavigationProp = StackNavigationProp<RootStackParamList, 'CampaignPage'>;

type Props = {
  route: CampaignPageRouteProp;
  navigation: CampaignPageNavigationProp;
};

const CampaignPage: React.FC<Props> = ({ route, navigation }) => {
  const { campaignId } = route.params;
  
  return (
    <View>
      <Text>Campaign Page for Campaign ID: {campaignId}</Text>
    </View>
  );
};

export default CampaignPage;
