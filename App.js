import React, {useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';

export default function App() {
  const [products, setProducts] = useState([
    { id: '1', name: 'Arroz 5kg', amount: 10, price: 25.90},
    { id: '2', name: 'Feijão 1kg', amount: 15, price: 7.50},
    { id: '3', name: 'Óleo 900ml', amount: 8, price: 9.99},
    { id: '4', name: 'Açúcar 1kg', amount: 20, price: 4.20},
  ]);

  const renderItem = ({item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.details}>Quantidade: {item.amount}</Text>
      <Text style={styles.details}>Preço: R$ {item.price.toFixed(2)}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Estoque da Vendinha</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20
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
  details: {
    fontSize: 16,
  },
});
