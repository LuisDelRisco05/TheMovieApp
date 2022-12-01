import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens'



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
      
          <stack.Screen name="HomeScreen" component={ HomeScreen } />   

        </stack.Navigator>

    </NavigationContainer>
    
  )
}
