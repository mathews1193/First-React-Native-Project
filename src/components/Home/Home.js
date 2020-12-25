import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
    return (
        <div>
        <View style={styles.container}>
        <Text>Home</Text>
        <StatusBar style="auto" />
      </View>
        </div>
    )
}
