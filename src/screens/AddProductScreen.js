import React from "react";
import { View, Text, Button, StyleSheet} from 'react-native';

export default function AddProductScreen({ navigation }) {
    return (
        <View>
            <Text>➕ Adicionar Produto</Text>
            <Text>Aqui futuramente ficará o formulário</Text>
            <Button title="Voltar para estoque" onPress={() => navigation.goBack()} />
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
});