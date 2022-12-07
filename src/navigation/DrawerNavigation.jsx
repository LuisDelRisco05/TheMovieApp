
import { createDrawerNavigator } from "@react-navigation/drawer";

import Icon from 'react-native-vector-icons/Ionicons';

import { StackNavigation } from './StackNavigation';
import { AllScreen, ProfileScreen, SearchScreen } from '../screens';



const Drawer = createDrawerNavigator();

export const DrawerNavigation =() => {
  return (     
        <Drawer.Navigator
            screenOptions={{
              headerTitle:'',
              headerStyle: { backgroundColor: '#1F1C2C'},
              drawerStyle: {
                backgroundColor: '#1F1C2C',
                paddingTop: 20
              },
              drawerActiveBackgroundColor: '#FF722A',
              drawerActiveTintColor:'#FFF',
            }}
        >

            <Drawer.Screen 
              name="StackNavigation" 
              component={ StackNavigation }
              options={{ 
                title:'Home',
                drawerIcon: ({ color, focused }) => ( 
                  <Icon 
                    name={ focused ? "home-sharp" : "home-outline" }
                    color={ color }
                    size={ 25 }
                  />
                )
              }}
            />

            <Drawer.Screen 
              name="SearchScreen" 
              component={ SearchScreen }
              options={{ 
                title:'Search',
                drawerIcon: ({ color, focused }) => ( 
                  <Icon 
                    name={ focused ? "search" : "search-outline" } 
                    color={ color }
                    size={ 25 }
                  />
                )
              }}
            />

            <Drawer.Screen 
              name="AllScreen" 
              component={ AllScreen }
              options={{ 
                title:'All',
                drawerIcon: ({ color, focused }) => (
                  <Icon 
                    name={ focused ? "bookmark" :"bookmark-outline"}
                    color={ color }
                    size={ 25 }
                  />
                )
              }}
            />

            <Drawer.Screen 
              name="ProfileScreen" 
              component={ ProfileScreen }
              options={{ 
                title:'Profile',
                drawerIcon: ({ color, focused }) => (
                  <Icon 
                    name={ focused ? "person-sharp" :"person-outline"}
                    color={ color }
                    size={ 25 }
                  />
                )
              }}
            />

            
        </Drawer.Navigator>
  );
}