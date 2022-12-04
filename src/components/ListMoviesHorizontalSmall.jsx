import { FlatList, StyleSheet, Text } from "react-native"

import { ListSmall } from "./ListSmall"


export const ListMoviesHorizontalSmall = ({ movie, title }) => {
  

  return (
        <>  
            <Text style={ styles.title }>{title}</Text>
            <FlatList 
                data={ movie }
                keyExtractor={ item => item.id }
                renderItem={ ({ item }) => (

                  <ListSmall movie={ item } />

                )}
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }

            />
        </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#E2E2E2', 
    fontSize: 21,
    fontWeight: '700', 
    marginBottom: 5,
    marginLeft: 18,
  },
});
