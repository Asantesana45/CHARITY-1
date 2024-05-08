import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DonateScreen from '../app/DonateScreen';
import MakeDonation from '../DonationFunctions/MakeDonation';

type RootStackParamList = {
  DonateScreen: undefined;
  MakeDonation: { campaignId: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DonateScreen" component={DonateScreen} />
      <Stack.Screen name="MakeDonation" component={MakeDonation} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
