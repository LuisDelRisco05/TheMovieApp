import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

import Icon  from 'react-native-vector-icons/Ionicons';

import { OptionsProfile } from "../components";
import { useAuthStore } from "../hooks/useAuthStore";



const options = [
  {
    id: 1,
    text: 'My Info',
    iconName: 'information-circle',
    iconArrow: 'chevron-forward-outline',
  },
  {
    id: 2,
    text: 'Setting',
    iconName: 'settings-sharp',
    iconArrow: 'chevron-forward-outline',
  },
  {
    id: 3,
    text: 'Policy',
    iconName: 'shield-sharp',
    iconArrow: 'chevron-forward-outline',
  },
];


export const ProfileScreen = ({ navigation }) => {

  const { user, startLogout } = useAuthStore();

  return (
    <View style={{ flex: 1, backgroundColor: '#1F1C2C' }}>

        <View style={ styles.container}>

          <View style={ styles.containerPhoto}>

            <Image 
              source={ require('../img/chino.jpeg')}
              style={ styles.img }
            />

            <View style={ styles.containerName }>
              <Text style={ styles.name }>{user.name}</Text>
            </View>

          </View>

          <View style={ styles.separator } />

          <View style={ styles.containerJoined }>

            <View style={{ bottom: 20 }}>
              <Text style={ styles.join }>Joined</Text>
              <Text style={ styles.ago }>2 mon ago</Text>
            </View>

          </View>

        </View>

        <View style={ styles.containerOpc } >
        {
          options.map( opc => (

              <OptionsProfile 
                key={ opc.id }
                text={ opc.text } 
                iconName={ opc.iconName }
                iconArrow={ opc.iconArrow }
              />

              ))
            }
        </View>

        <TouchableOpacity 
          onPress={ startLogout }
          activeOpacity={0.8} 
          style={ styles.containerSignOut }
        >

          <Icon 
            name="exit-outline"
            color="#F14B4B"
            size={ 20 } 
            style={{ marginRight: 5}}
          />

          <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '400' }}>Sign Out</Text>
        </TouchableOpacity>
        

          


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    top: 40,
    flexDirection: 'row',
  },
  containerPhoto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  containerName: {
    left: 65, 
    width: 100, 
    height: 50,
    position: 'absolute',
    bottom: 0, 
  },
  name: {
    height: 50,
    color: '#FFF',
    fontSize: 15,
    top: 5,
  },
  lastName: {
    fontSize: 10,
    color: '#9C9C9C',
  },
  containerJoined: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    backgroundColor: 'gray',
    height: 70,
    width: 1,
    top: 50,
  },
  join: {
    fontSize: 12,
    color: '#9C9C9C',
  },
  ago: {
    color: '#FFF',
    fontSize: 13,
  },
  containerOpc: {
    height: 300,
    top: 35,
    justifyContent: 'space-evenly',
    marginHorizontal: 42
  },
  containerSignOut: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 120,
    borderRadius: 30,
    color: '#FFF',
    fontWeight: '600',
    height: 47,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
    left: 55,
    marginTop: 50,
  },
});
