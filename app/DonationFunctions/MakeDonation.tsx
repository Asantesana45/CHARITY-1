import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MakeDonationProps {
  campaignId: string;
}

const MakeDonation = ({ campaignId }: MakeDonationProps) => {
  const [amount, setAmount] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [inputBorderColor, setInputBorderColor] = useState('black');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const predefinedAmounts = [500, 1000, 2000, 5000];
  const controlNumber = '4111 1111 1111 1111'; // Example control number

  const formatAmount = (text: string) => {
    const numericText = text.replace(/\D/g, ''); // Remove non-numeric characters
    const formattedAmount = new Intl.NumberFormat().format(Number(numericText));
    return formattedAmount;
  };

  const handleAmountChange = (text: string) => {
    if (!/^\d*(,\d{3})*$/.test(text.replace(/,/g, ''))) {
      Alert.alert('Please enter a valid amount');
      setAmount('');
      setInputBorderColor('red');
    } else {
      const formattedText = formatAmount(text);
      setAmount(formattedText);
      setInputBorderColor('black');
    }
  };

  const handleFullNameChange = (text: string) => {
    if (!/^[a-zA-Z\s]+$/.test(text)) {
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
    const numericText = text.replace(/\D/g, '');
    setPhoneNumber(numericText);
  };

  const handleMakePayment = () => {
    setShowPasswordPrompt(true);
  };

  const handleSendPassword = () => {
    setShowPasswordPrompt(false);
    setShowConfirmation(true);
  };

  const handleAccept = async () => {
    setShowConfirmation(false);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); // Hide after 3 seconds

    try {
      const response = await fetch('http://localhost:3000/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          campaignId,
          amount: amount.replace(/,/g, ''), // Remove commas for numeric value
          fullName,
          email,
          phoneNumber,
          paymentGateway: 'Airtel', // Use the correct provider name
        }),
      });
      const data = await response.json();
      if (response.ok) {
        Alert.alert('Payment Successful', `Transaction ID: ${data.transactionId}`);
      } else {
        Alert.alert('Payment Failed', data.message);
      }
    } catch (error) {
      console.log('Payment Error', error.message);
    }

    setAmount('');
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
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
        keyboardType="numeric"
      />
      <Text style={styles.controlNumber}>Control Number: {controlNumber}</Text>
      <View style={styles.predefinedAmountsContainer}>
        {predefinedAmounts.map((amount) => (
          <TouchableOpacity key={amount} style={styles.predefinedAmountButton} onPress={() => setAmount(formatAmount(amount.toString()))}>
            <Text style={styles.predefinedAmountText}>{formatAmount(amount.toString())} TSH</Text>
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
        style={[styles.input, { borderColor: inputBorderColor }]}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        keyboardType="numeric"
        maxLength={15} // Assuming phone number length of up to 15 digits
      />
      <TouchableOpacity style={styles.makePaymentButton} onPress={handleMakePayment}>
        <Text style={styles.makePaymentText}>Make Payment</Text>
      </TouchableOpacity>
      {showPasswordPrompt && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={showPasswordPrompt}
          onRequestClose={() => setShowPasswordPrompt(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalHeader}>Enter Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
              <View style={styles.passwordButtonsContainer}>
                <TouchableOpacity style={styles.cancelButton} onPress={() => setShowPasswordPrompt(false)}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendButton} onPress={handleSendPassword}>
                  <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
      {showConfirmation && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={showConfirmation}
          onRequestClose={() => setShowConfirmation(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalHeader}>
                <Ionicons name="checkmark-circle" size={24} color="white" />
                Confirm Information
              </Text>
              <Text style={styles.uniqueFont}>Sending to: {controlNumber}</Text>
              <Text style={styles.uniqueFont}>From</Text>
              <Text style={styles.modalText}>Name: {fullName}</Text>
              <Text style={styles.modalText}>Phone Number: {phoneNumber}</Text>
              <Text style={styles.modalText}>Mobile Network: AIRTEL</Text>
              <Text style={styles.modalText}>Amount: {amount} TSH</Text>
              <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
                <Text style={styles.acceptButtonText}>ACCEPT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
      {showSuccessMessage && (
        <View style={styles.successMessageContainer}>
          <Text style={styles.successMessageText}>TRANSACTION SUCCESSFUL</Text>
        </View>
      )}
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
    marginBottom: 16,
  },
  campaignName: {
    fontSize: 16,
    marginBottom: 16,
  },
  input: {
    height: 48,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  controlNumber: {
    fontSize: 16,
    marginBottom: 16,
  },
  predefinedAmountsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  predefinedAmountButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 3,
    borderRadius: 8,
  },
  predefinedAmountText: {
    color: 'white',
    fontSize: 16,
  },
  makePaymentButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  makePaymentText: {
    color: 'white',
    fontSize: 16,
  },
  successMessageContainer: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  successMessageText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 8,
    width: '80%',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  passwordButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
  },
  uniqueFont: {
    fontSize: 15,
    marginBottom: 16,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
  },
  acceptButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  acceptButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
export default MakeDonation;
