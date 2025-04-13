import { View, Text, TextInput,StyleSheet } from "react-native";
import { useState } from 'react';
import { Button } from 'react-native-paper';
import StarRating from 'react-native-star-rating-widget';


export function AddLocation({navigation}){
    return(
        <View>
            <Form navigation={navigation}></Form>
        </View>
    )
}
    function Form({navigation}){
    
    const [cityName, setCityName] = useState('')
    const [stars, setStars] = useState(0)
    const [description, setDescription] = useState('')


    return (
        <View style={styles.card}>
         <TextInput
            style={styles.input}
            onChangeText={setCityName}
            value={cityName}
            placeholder="Name"/>
          <TextInput
            style={styles.input}
            onChangeText={setDescription}
            value={description}
            placeholder="Description"/>
          <StarRating
            style={styles.starrating}
            rating={stars}
            onChange={setStars}/>
          <Button
            style={styles.button}
            mode='contained'>Add</Button>
        </View>
    )
}
    
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#d6e1e9',       
        padding: 24,
        gap: 12,
        borderRadius: 12,                
        margin: 20,
        justifyContent: 'center'
      },
      input: {
        backgroundColor: '#ffffff',
        height: 40,
        padding: 10,
        borderWidth: 1,
        fontSize: 14,
        borderRadius: 8,
        borderColor: '#738d9d'     
      },
      button: {
        backgroundColor: '#20284e',       
        padding: 6,
        borderRadius: 8
      },
      starrating: {
        backgroundColor: '#738d9d',
         paddingVertical: 13,
        paddingHorizontal: 20,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 8
        }
      });