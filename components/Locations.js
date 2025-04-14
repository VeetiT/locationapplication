import { View, Pressable, StyleSheet, FlatList } from "react-native";
import { Text } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fetchLocationsFromFirestore } from '../firebase/firestoreController';
import { setSelectedPlace } from './MapView';

export function Locations({ navigation }) {
  const [locations, setLocations] = useState([])

  const loadLocations= async()=> {
    const data = await fetchLocationsFromFirestore()
    setLocations(data)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', ()=> {
      loadLocations()
    })
    return unsubscribe
  },[navigation])

  const handleMapOpen=(item)=>{
    setSelectedPlace(item.cityName)
    navigation.navigate('Map view')
  }

  return (
    <View style={styles.background}>
      <FlatList
        data={locations}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Pressable style={styles.iconWrapper} onPress={()=> handleMapOpen(item)}>
              <Icon name="map-marker" size={26} style={styles.icon}/>
            </Pressable>
            <Text style={styles.title}>{item.cityName}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.starrating}>
              <StarRatingDisplay rating={item.stars} starSize={24}/>
            </View>
          </View>
        )}/>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#d6e1e9',
    flex: 1,
    padding: 10
  },
  card: {
    backgroundColor: '#738d9d',
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center'
  },
  title: {
    color: '#ffff',
    fontSize: 25,
    marginBottom: 10
  },
  description: {
    color: '#ffff',
    fontSize: 14,
    marginBottom: 10
  },
  starrating: {
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8
  },
  iconWrapper: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  icon: {
    color: '#20284e'
  }
})


