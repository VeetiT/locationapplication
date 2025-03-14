import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, View } from 'react-native';
import { Button, IconButton, Text } from 'react-native-paper';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#8a6fdf'}}}>
        <Stack.Screen name={'Locations'} component={Locations}/>
        <Stack.Screen name={'Add location'} component={AddLocation}/>
        <Stack.Screen name={'Map view'} component={MapView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Locations(){

  const navigation = useNavigation();  

  return(
    <Pressable onPress={() => navigation.navigate('Add location')}>
      <Text variant='displayMedium'>Locations page</Text>
    </Pressable>
  );
}

function AddLocation(){
  const navigation = useNavigation(); 

  return(
    <View>
        <Button onPress={() => navigation.navigate('Map view')}>Map view</Button>
    </View>
  )
}

function MapView(){
  return(<Text variant='displayMedium'>Map view page</Text>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
