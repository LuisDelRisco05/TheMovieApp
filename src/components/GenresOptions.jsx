import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useGenres } from "../hooks/useGenres"



export const GenresOptions = ({ activeGenre, startActiveGenre, startMoviesGenre }) => {

    const navigation = useNavigation()

    const { action, comedy, horror } = useGenres()

    

    const options = [
        { id: 0,  name:'All' },
        { id: 28, name:'Action' },
        { id: 35, name:'Comedy' },
        { id: 27, name:'Horror' },
    ]
    

  return (

        <View style={ styles.container }>

            { options.map( opc => (
                <Pressable 
                    key={ opc.id }
                    style={styles.optionBtn }
                    onPress={ () =>{ 
                        startActiveGenre(opc.id)
                        startMoviesGenre({ action, comedy, horror, opc: opc.id })
                        navigation.navigate('MoviesGenresScreen', opc.name )
                    }}
                >
                    <View style={ activeGenre === opc.id && styles.select }>
                        <Text style={ styles.title }>{opc.name}</Text>
                    </View>
                </Pressable>
            ))}


        </View>

  )
}

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row', 
        height: 40, 
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 310,
        marginLeft: 20,
        marginBottom: 10 
    },
    optionBtn: { 
        height: 20,
        width: 60,
        justifyContent: 'center',
    },
    title:{
        color: '#FFF',
        fontSize: 13,
        textAlign: 'center'
    },
    select: {
        backgroundColor: '#793B2C',
        borderRadius: 20,
        height: 26,
        justifyContent: 'center',
    }
})
