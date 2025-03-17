import { View, Text, Pressable } from "react-native";
import { Button } from "react-native-paper";

export function Locations({navigation}){
    return(
        <View>
            <Text>Locations test</Text>
            <Button Pressable onPress={() => navigation.navigate('Add location')}>Add Location</Button>
        </View>
    )
}