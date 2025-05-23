import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Locations } from './components/Locations';
import { AddLocation } from './components/AddLocation';
import { ViewMap } from './components/MapView';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Tab = createBottomTabNavigator();

const YOURLOCATIONS = "Locations";
const LOCATION = "Add Location";
const MAP = "Map view";
const icons = {
  [YOURLOCATIONS]: 'book',
  [LOCATION]: 'form',
  [MAP]: 'enviromento'
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#ffff'},
          tabBarStyle: {height: 60},
          tabBarLabelStyle: {fontSize: 11}
        }}>
        <Tab.Screen
          name={YOURLOCATIONS}
          component={Locations}
          options={{tabBarIcon: ()=> <AntDesign name={icons[YOURLOCATIONS]} size={21}/>}}
        />
        <Tab.Screen
          name={LOCATION}
          component={AddLocation}
          options={{tabBarIcon: ()=> <AntDesign name={icons[LOCATION]} size={21}/>}}
        />
        <Tab.Screen
          name={MAP}
          component={ViewMap}
          options={{tabBarIcon: ()=> <AntDesign name={icons[MAP]} size={21}/>}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}