import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function StockScreen({ navigation, route }) {
  const [products, setProducts] = useState([
    { id: '1', name: 'Arroz 5kg', quantity: 10, price: 25.90 },
    { id: '2', name: 'Feijão 1kg', quantity: 15, price: 7.50 },
    { id: '3', name: 'Óleo 900ml', quantity: 8, price: 9.99 },
    { id: '4', name: 'Açúcar 1kg', quantity: 20, price: 4.20 },
  ]);

  useEffect(() => {
    if (route.params?.newProduct) {
      const newProduct = route.params.newProduct;
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...newProduct, id: (prevProducts.length + 1).toString() },
      ]);
    }
  }, [route.params?.newProduct]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>Quantidade: {item.quantity}</Text>
      <Text>Preço: R$ {parseFloat(item.price).toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Estoque da Vendinha</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Add Product')}
      >
        <Text style={styles.buttonText} >➕ Adicionar Produto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
