import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function AddProductScreen({ navigation }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  const handleSave = () => {
    if (!name || !amount || !price) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }

    Alert.alert('Produto Adicionado!', `Nome: ${name}\nQuantidade: ${amount}\nPreço: R$ ${price}`);

    setName('');
    setAmount('');
    setPrice('');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>➕ Adicionar Produto</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Preço (R$)"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.textButton}>Salvar Produto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
