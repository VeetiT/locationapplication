import { View, Text, StyleSheet } from 'react-native';
import { useState, useCallback } from 'react';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { useFocusEffect } from '@react-navigation/native';

let selectedPlace = '';

export const setSelectedPlace=(place) => {
  selectedPlace = place;
}
export const getSelectedPlace = () => selectedPlace;

export function ViewMap() {
  const [location, setLocation] = useState(null);
  const [place, setPlace] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  useFocusEffect(
    useCallback(() => {
      const selected = getSelectedPlace();

      setPlace(selected);

      const fetchCoordinates = async () => {
        try {
          const geocodedLocation = await Location.geocodeAsync(selected);
          if (geocodedLocation.length > 0) {
            setLocation(geocodedLocation[0]);
            setErrorMsg(null);
          } else {
            setErrorMsg('Location not found');
          }
        } catch (error) {
          setErrorMsg('Error getting location');
        }
      }

      fetchCoordinates();
    }, [])
  )

  if (errorMsg) {
    return (
      <View>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View>
        <Text>{place || '...'}...</Text>
      </View>
    );
  }

  return (
    <MapView
      style={styles.map}
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      <Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        title={place}/>
    </MapView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: '100%',
    height: '100%'   
  }
});
