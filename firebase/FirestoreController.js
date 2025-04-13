import { collection, addDoc} from 'firebase/firestore'
import { db, LOCATIONS_REF } from './Config'

export const MoveLocation =async (cityName, description, stars)=>{
  try{
    await addDoc(collection(db, LOCATIONS_REF), {
      areaName: cityName,
      areaDesc: description,
      rating: stars
    })
  }catch (error) {
  }
}

