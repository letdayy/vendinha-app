import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StockScreen({ navigation, route }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    const addNewProduct = async () => {
      if (route.params?.newProduct) {
        try {
          const storedProducts = await AsyncStorage.getItem('products');
          const existingProducts = storedProducts ? JSON.parse(storedProducts) : [];
  
          const newProduct = {
            ...route.params.newProduct,
            id: Date.now().toString(),
          };
  
          const updatedProducts = [...existingProducts, newProduct];
          setProducts(updatedProducts);
          saveProducts(updatedProducts);
        } catch (error) {
          console.log('Erro ao adicionar produto:', error);
        }
      }
    };
  
    addNewProduct();
  }, [route.params?.newProduct]);
  

  const loadProducts = async () => {
    try {
      const storedProducts = await AsyncStorage.getItem('products');
      if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
      }
    } catch (error) {
      console.log('Erro ao carregar produtos:', error);
    }
  };

  const saveProducts = async (productToSave) => {
    try {
      await AsyncStorage.setItem('products', JSON.stringify(productToSave));
    } catch (error) {
      console.log('Erro ao salvar produtos', error);
    }
  };

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
