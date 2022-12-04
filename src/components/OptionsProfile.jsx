import { StyleSheet, Text, View } from "react-native";

import Icon  from 'react-native-vector-icons/Ionicons';


export const OptionsProfile = ({ text, iconName, iconArrow }) => {
  return (

 

        <View style={ styles.opc }>

            <Icon 
              name={iconName}
              color="#FFF"
              size={ 25 } 
            />
            <Text style={ styles.opcText }>{ text }</Text>

            <Icon 
              name={ iconArrow }
              color="#FFF"
              size={ 20 } 
              style={ styles.icon }
            />

        </View>

    
  )
}

const styles = StyleSheet.create({

      opc: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: 296,
        paddingLeft: 20,
        borderRadius: 29,
        color: '#FFF',
        fontWeight: '600',
        marginBottom: 10,
        height: 47,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: 0.7
        
      },
      opcText:{
        color: '#FFF',
        right: 40,
        fontSize: 18,
        fontWeight: '500',
        width: 70
      },
      icon:{
        width: 30
      }
});
