import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddProductScreen from "../screens/AddProductScreen";
import StockScreen from "../screens/StockScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Stock" component={StockScreen} />
                <Stack.Screen name="Add Product" component={AddProductScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}