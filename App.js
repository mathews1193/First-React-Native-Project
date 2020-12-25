import React from 'react';
import { NativeRouter, Route, Switch} from "react-router-native";
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './src/components/Home/Home';
import Orders from './src/components/Orders/Order';
import Login from './src/components/Login/Login';
import ShoppingList from './src/components/Shopping List/ShoppingList';


export default function App() {
  return (
    <NativeRouter>
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/orders" component={Orders} />
          <Route path="/shopping-list" component={ShoppingList} />
        </Switch>

        <StatusBar style="auto" />
      </View>
    </NativeRouter>
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
