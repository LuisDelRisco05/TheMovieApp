import { createStackNavigator } from '@react-navigation/stack'
import { useAuthStore } from '../hooks/useAuthStore'
import { DetailsScreen, LoginScreen, MoviesGenresScreen, RegisterScreen, SplashScreen } from '../screens'
import BottomTab from './BottomTab'
// import { DrawerNavigation } from './DrawerNavigation'



const stack = createStackNavigator()

export const StackNavigation = () => {

  const { status } = useAuthStore()

  return (

      <stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { 
              backgroundColor: '#1F1C2C'
            }
          }} 
          initialRouteName="SplashScreen"
      >
        {
          status !== 'authenticated' 
          ? 
            (
              <>
                <stack.Screen name="SplashScreen" component={ SplashScreen } />
                <stack.Screen name="RegisterScreen" component={ RegisterScreen } />
                <stack.Screen name="LoginScreen" component={ LoginScreen } />
              </>
            )
          :
            (
              <>
                {/* <stack.Screen name="BottomTab" component={ DrawerNavigation } /> */}
                <stack.Screen name="BottomTab" component={ BottomTab } />
                <stack.Screen name="MoviesGenresScreen" component={ MoviesGenresScreen } />
                <stack.Screen name="DetailsScreen" component={ DetailsScreen } />
              </>
              
            )
        }


      </stack.Navigator>

  
    
  )
}
