import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreen, AllScreen, ProfileScreen, SearchScreen } from '../screens';

const TabBottom = createBottomTabNavigator();

const BottomTab = () => {

  return (
    <TabBottom.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
          width: 300,
          left: 50,
          borderRadius: 30,
          backgroundColor: '#7E7C84',
          opacity: 0.8,
          marginBottom: 5,
          position: 'absolute',
        },
        headerShown: false,
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: '#F8F8FF',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true
      }}
    >

      <TabBottom.Screen 
        name="HomeScreen" 
        component={ HomeScreen } 
        options={{
          tabBarLabelStyle: { marginBottom: 5 },
          tabBarIcon: ({ color, focused }) => (
            <View>
              <Icon 
                name={ focused ? "home-sharp" : "home-outline" }
                color={ color }
                size={ 25 }
              />
              { focused && <Text style={ styles.point }>.</Text>}
            </View>
          )
        }}
      />

      <TabBottom.Screen 
        name="SearchScreen" 
        component={ SearchScreen } 
        options={{
          tabBarLabelStyle: { marginBottom: 5 },
          tabBarIcon: ({ color, focused }) => (
            <View>
              <Icon 
                name={ focused ? "search" : "search-outline" }
                color={ color }
                size={ 25 }
              />
              { focused && <Text style={ styles.point }>.</Text>}
            </View>
          )
        }}
      />

      <TabBottom.Screen 
        name="AllScreen" 
        component={ AllScreen } 
        options={{
          tabBarLabelStyle: { marginBottom: 5 },
          tabBarIcon: ({ color, focused }) => (
            <View>
              <Icon 
              name={ focused ? "bookmark-sharp" :"bookmark-outline"}
              color={ color }
              size={ 25 }
              />
              { focused && <Text style={ styles.point }>.</Text>}
            </View>
          )
        }}
      />

      <TabBottom.Screen 
        name="ProfileScreen" 
        component={ ProfileScreen } 
        options={{
          tabBarLabelStyle: { marginBottom: 5 },
          tabBarIcon: ({ color, focused }) => (
            <View>
              <Icon 
                name={ focused ? "person-sharp" :"person-outline"}
                color={ color }
                size={ 25 }
              />
              { focused && <Text style={ styles.point }>.</Text>}
            </View>
          )
        }}
      />
      
    </TabBottom.Navigator>
  );
}

export default BottomTab;

const styles = StyleSheet.create({
  point: { 
    fontSize: 20,
    color: '#FFF',
    position: 'absolute',
    top: 12,
    left: 10 
  }
})