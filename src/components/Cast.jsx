import { Image, StyleSheet, Text, View } from "react-native"


export const Cast = ({ cast }) => {

    const uri = `https://image.tmdb.org/t/p/w500${ cast?.profile_path }`

  return (

            <>
                {
                cast?.profile_path 
                    &&  (
                            <View style={{ marginLeft: 20, flexDirection: 'row'}}>
                                <Image 
                                    source={{ uri }}
                                    style={ styles.img}
                                />
                                <View style={{ justifyContent: 'center', height: 40, marginHorizontal: 5}}>
                                    <Text style={ styles.actor }>Actor</Text>
                                    <Text style={ styles.name }>{ cast.name }</Text>
                                </View>
                            </View>
                        )
                
                }
            </>
        
            
        
   

  )
}

const styles = StyleSheet.create({
    img: {
        height: 50,
        width: 50,
        borderRadius: 50,
     },
    actor: {
        color:'#A5A5A5',
        fontSize: 10
    },
    name: {
        color: '#FFF', 
        fontSize: 10, 
        marginTop: 2,
        fontWeight: '600'
    },
});
