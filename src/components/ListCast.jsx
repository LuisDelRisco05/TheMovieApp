import { FlatList, Text, View } from "react-native"
import { Cast } from "./Cast"


export const ListCast = ({ cast }) => {

    const castList = cast.cast;

  return (
        
            <FlatList 
                data={ castList }
                keyExtractor={ item => item.id }
                renderItem={ ({ item }) => (
                    <Cast cast={ item } />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={ false }
            />
        
       
  )
}
