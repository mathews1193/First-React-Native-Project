import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './src/components/Home/Home';
import Orders from './src/components/Orders/Order';
import Login from './src/components/Login/Login';
import ShoppingList from './src/components/Shopping List/ShoppingList';


export default function App() {
  return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Button
        color="green"
        title="Add"
        onPress={() => alert('Add')}
        />
        <Button
        color="red"
        title="Delete"
        onPress={() => alert('Delete')}
        />

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
