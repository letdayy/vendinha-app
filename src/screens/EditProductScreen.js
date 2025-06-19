import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditProductScreen({ route, navigation }) {
  const { product, products } = route.params;

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setQuantity(String(product.quantity));
      setPrice(String(product.price));
    }
  }, [product]);

  const handleSave = async () => {
    if (!name || !quantity || !price) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos');
      return;
    }

    const updatedProducts = products.map((p) =>
      p.id == product.id
        ? { ...p, name, quantity, price }
        : p
    );

    try {
      await AsyncStorage.setItem('products', JSON.stringify(updatedProducts));
      Alert.alert('Sucesso', 'Produto atualizado com sucesso!');
      navigation.navigate('Stock', { updatedProducts });
    } catch (error) {
      console.log('Erro ao salvar alterações:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✏️ Editar Produto</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantity}
        onChangeText={setQuantity}
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
        <Text style={styles.textButton}>Salvar Alterações</Text>
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
