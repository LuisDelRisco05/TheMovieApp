import { createStackNavigator } from '@react-navigation/stack'
import { DetailsScreen, LoginScreen, MoviesGenresScreen, RegisterScreen } from '../screens'
import BottomTab from './BottomTab'



const stack = createStackNavigator()

export const StackNavigation = () => {

  return (

      <stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { 
              backgroundColor: '#1F1C2C'
            }
          }} 
      >
        <stack.Screen name="RegisterScreen" component={ RegisterScreen } />
        <stack.Screen name="LoginScreen" component={ LoginScreen } />
        <stack.Screen name="BottomTab" component={ BottomTab } />
        <stack.Screen name="MoviesGenresScreen" component={ MoviesGenresScreen } />
        <stack.Screen name="DetailsScreen" component={ DetailsScreen } />


      </stack.Navigator>

  
    
  )
}
