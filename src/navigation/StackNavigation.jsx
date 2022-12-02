import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { DetailsScreen, MoviesGenresScreen } from '../screens'
import BottomTab from './BottomTab'



const stack = createStackNavigator()

export const StackNavigation = () => {

  return (

    <NavigationContainer
      theme={ DarkTheme }
    >

        <stack.Navigator
           screenOptions={{
              headerShown: false,
              cardStyle: { 
                backgroundColor: '#1F1C2C'
            }
           }} 
        >
      
          <stack.Screen name="BottomTab" component={ BottomTab } />
          <stack.Screen name="MoviesGenresScreen" component={ MoviesGenresScreen } />
          <stack.Screen name="DetailsScreen" component={ DetailsScreen } />


        </stack.Navigator>

    </NavigationContainer>
    
  )
}
