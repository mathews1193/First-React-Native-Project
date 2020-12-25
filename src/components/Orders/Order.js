import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Order() {
    return (
        <div>
        <View style={styles.container}>
        <Text>Order</Text>
        <StatusBar style="auto" />
      </View>
        </div>
    )
}