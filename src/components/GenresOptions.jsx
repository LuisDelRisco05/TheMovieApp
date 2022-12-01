import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"


export const GenresOptions = () => {

    const [ active, setActive ] = useState(1);

    const options = [
        { id: 1, genre:'All' },
        { id: 2, genre:'Action' },
        { id: 3, genre:'Comedy' },
        { id: 4, genre:'Horror' },
    ]
    

  return (

        <View style={ styles.container }>

            { options.map( opc => (
                <Pressable 
                    key={ opc.id }
                    style={styles.optionBtn }
                    onPress={ () => setActive(opc.id)}
                >
                    <View style={ active === opc.id && styles.select }>
                        <Text style={ styles.title }>{opc.genre}</Text>
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
