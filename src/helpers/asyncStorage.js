import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useAuthStore } from '../hooks/useAuthStore';


export const asyncStorage = () => {

    const { startGetStorageUpdate } = useAuthStore();

    const saveUserStorage = async(newUsers) => {

      try {

        await AsyncStorage.setItem('users', JSON.stringify(newUsers) )

      } catch (error) {
        console.log(error);
      }
    }

    const getUserStorage = async() => {

      // await AsyncStorage.clear()

      try {

          const usersStorage = await AsyncStorage.getItem('users') ?? []

          if( usersStorage.length > 0){
            
            console.log('usersStorage', usersStorage);
          
            startGetStorageUpdate(JSON.parse(usersStorage));
          }


      } catch (error) {
        console.log(error);
      }
    }



  return {
    saveUserStorage,
    getUserStorage
  }
}
