import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

interface MakeDonationProps {
  campaignId: string;
}

const MakeDonation = ({ campaignId }: MakeDonationProps) => {
  const [amount, setAmount] = useState('');
  const [paymentGateway, setPaymentGateway] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [inputBorderColor, setInputBorderColor] = useState('black');

  const predefinedAmounts = [500, 1000, 2000, 5000];
  const paymentGateways = ['M-Pesa', 'Tigo Pesa', 'Airtel Money', 'Visa'];

  const handleAmountChange = (text: string) => {
    // Check if the entered value is a valid number
    if (!/^\d+$/.test(text)) {
      // If it is not a valid number, display an error message and change the border color of the input field to red
      Alert.alert('Please enter a valid amount');
      setAmount('');
      setInputBorderColor('red');
    } else {
      setAmount(text);
      setInputBorderColor('black');
    }
  };

  const handlePaymentGatewayChange = (gateway: string) => {
    setPaymentGateway(gateway);
  };

  const handleFullNameChange = (text: string) => {
    // Check if the entered value contains only letters and spaces
    if (!/^[a-zA-Z\s]+$/.test(text)) {
      // If it is not valid, display an error message and change the border color of the input field to red
      Alert.alert('Please enter a valid full name');
      setFullName('');
      setInputBorderColor('red');
    } else {
      setFullName(text);
      setInputBorderColor('black');
    }
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePhoneNumberChange = (text: string) => {
    // Check if the entered value is a valid phone number
    if (!/^[0-9]+$/.test(text)) {
      // If it is not a valid phone number, display an error message and change the border color of the input field to red
      Alert.alert('Please enter a valid phone number');
      setPhoneNumber('');
      setInputBorderColor('red');
    } else {
      setPhoneNumber(text);
      setInputBorderColor('black');
    }
  };

  const handleMakePayment = () => {
    // Call payment gateway API to make payment
    console.log(`Making payment of ${amount} TSH to campaign ${campaignId} via ${paymentGateway}`);
    //...
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Make a Donation</Text>
      <Text style={styles.campaignName}>Campaign: {campaignId}</Text>
      <TextInput
        style={[styles.input, { borderColor: inputBorderColor }]}
        placeholder="Enter Amount (TSH)"
        value={amount}
        onChangeText={handleAmountChange}
      />
      <View style={styles.predefinedAmountsContainer}>
        {predefinedAmounts.map((amount) => (
          <TouchableOpacity key={amount} style={styles.predefinedAmountButton} onPress={() => setAmount(amount.toString())}>
            <Text style={styles.predefinedAmountText}>{amount} TSH</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.paymentGatewayLabel}>Choose Payment Gateway</Text>
      <View style={styles.paymentGatewaysContainer}>
        {paymentGateways.map((gateway) => (
          <TouchableOpacity key={gateway} style={styles.paymentGatewayButton} onPress={() => handlePaymentGatewayChange(gateway)}>
            <Text style={styles.paymentGatewayText}>{gateway}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={handleFullNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
      />
      <TouchableOpacity style={styles.makePaymentButton} onPress={handleMakePayment}>
        <Text style={styles.makePaymentText}>Make Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    padding: 24,
    paddingBottom: 48, // Additional padding for the bottom button
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  campaignName: {
    fontSize: 16,
    marginBottom: 16
  },
  input: {
    height: 48,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16
  },
  predefinedAmountsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24 // Increased spacing between predefined amounts
  },
  predefinedAmountButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 3,
    borderRadius: 8
  },
  predefinedAmountText: {
    color: 'white',
    fontSize: 16
  },
  paymentGatewayLabel: {
    fontSize: 16,
    marginBottom: 8
  },
  paymentGatewaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24 // Increased spacing between payment gateways
  },
  paymentGatewayButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 15
  },
  paymentGatewayText: {
    color: 'white',
    fontSize: 16
  },
  makePaymentButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center'
  },
  makePaymentText: {
    color: 'white',
    fontSize: 16
  }
});
export default MakeDonation;
