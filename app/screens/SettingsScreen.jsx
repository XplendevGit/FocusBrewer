import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Linking } from 'react-native';

const SettingsScreen = () => {
  const [name, setName] = useState('');

  const handleDonation = () => {
    const paypalLink = 'https://www.paypal.com/donate?hosted_button_id=XXXXXX'; // Reemplaza con tu link de PayPal
    Linking.openURL(paypalLink);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Configuraciones</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '100%', paddingLeft: 8 }}
        placeholder="Introduce tu nombre"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity onPress={handleDonation} style={{ padding: 20, backgroundColor: '#00D1B2', borderRadius: 10 }}>
        <Text style={{ color: 'white', fontSize: 20 }}>Donar y Desbloquear Skin 10</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
