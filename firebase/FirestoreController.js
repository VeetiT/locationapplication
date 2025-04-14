import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db, LOCATIONS_REF } from './Config'

export async function addLocationToFirestore(cityName, description, stars){
  try {
    await addDoc(collection(db, LOCATIONS_REF), {
      cityName,
      description,
      stars
    })
  } catch (error) {
  }
}

export async function fetchLocationsFromFirestore() {
  try {
    const snapshot = await getDocs(collection(db, LOCATIONS_REF))
    return snapshot.docs.map(doc=>({
      id: doc.id,
      ...doc.data()
    }))
  } catch (error) {
    return [];
  }
}
