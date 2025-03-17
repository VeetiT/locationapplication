import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, View } from 'react-native';
import { Button, IconButton, Text } from 'react-native-paper';
import { Locations } from './components/Locations';
import { AddLocation } from './components/AddLocation';
import { ViewMap } from './components/MapView';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#8a6fdf'}}}>
        <Stack.Screen name={'Map view'} component={ViewMap}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
} 