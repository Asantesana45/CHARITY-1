import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { setStatusBarBackgroundColor } from 'expo-status-bar'
import { Button } from 'react-native'

const StackLayout = () => {
    const router = useRouter();
  return (
    <Stack 
    screenOptions={{
        headerStyle: {
            backgroundColor: '#10101E',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }}>
        <Stack.Screen name= "index" options={{headerTitle: 'Login', headerShown: false}} />
        <Stack.Screen 
           name="register" 
           options={{
            headerTitle: 'Create account', 
            
        }} 
     />
   <Stack.Screen name= "modal" options={{ presentation: 'modal',
    headerRight: () => (
        <Button 
          title="Close" 
          onPress={ () => {
            router.back();
        }}
       />
      ),
   }} />

    <Stack.Screen name= " index" options={{headerShown: false,}} />
    </Stack>
  );
};

export default StackLayout