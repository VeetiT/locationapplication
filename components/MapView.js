import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import { Button, TextInput } from 'react-native-paper';




export function ViewMap({}) {
  
    const [loc, setLoc] = useState({lat: 65.0800, lon: 25.4800});
    const [place, setPlace] = useState('');
  
    useEffect(()=>{
      getLocation();
      async function getLocation(){
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted'){
          console.log('No permission granted');
          return;
        }
  
        const location = await Location.getCurrentPositionAsync({accuray: Location.Accuracy.Lowest})
        setLoc({lat: location.coords.latitude, lon: location.coords.longitude})
      }
    }, []);
  
    async function search(){
      let coords = await Location.geocodeAsync(place);
      if(coords[0]){
        setLoc({lat: coords[0].latitude, lon: coords[0].longitude})
      }else{
        Alert.alert('Location not found!')
      }
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <TextInput value={place} onChangeText={setPlace}/>
        <Button onPress={search}>Search</Button>
        <MapView
          style={styles.map}
          region={{
            latitude: loc?.lat,
            longitude: loc?.lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
        { place !== '' &&
          <Marker
          title={place}
          coordinate={{latitude: loc.lat, longitude: loc.lon}}
          />
        }
  
        </MapView>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    map: {
      width: '100%',
      height: '100%'   
    }
  });