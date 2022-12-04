import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
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
                <TouchableOpacity
                    activeOpacity={ 0.8 } 
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
                </TouchableOpacity>
            ))}


        </View>

  )
}

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center',
        flexDirection: 'row', 
        height: 40, 
        justifyContent: 'space-between',
        marginBottom: 10,
        marginLeft: 18,
        width: 290,
    },
    optionBtn: { 
        height: 28,
        justifyContent: 'center',
        width: 60,
    },
    title:{
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    select: {
        backgroundColor: '#FF692B',
        borderRadius: 35,
        height: 28,
        justifyContent: 'center',
        opacity: 0.4,
        width: 60,
    }
})
