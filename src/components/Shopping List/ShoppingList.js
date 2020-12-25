import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ShoppingList() {
    return (
        <div>
        <View style={styles.container}>
        <Text>ShoppingList</Text>
        <StatusBar style="auto" />
      </View>
        </div>
    )
}