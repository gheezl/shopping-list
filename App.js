import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import appStyles from "./App-styling.js"

import Introduction from "./components/introduction/introduction.jsx"

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="enter-name" component={Introduction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;