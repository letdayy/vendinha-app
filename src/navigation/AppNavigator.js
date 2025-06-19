import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StorageScreen from "../screens/StorageScreen";
import AddProductScreen from "../screens/AddProductScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Estoque" component={StorageScreen} />
                <Stack.Screen name="Adicionar Produto" component={AddProductScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}