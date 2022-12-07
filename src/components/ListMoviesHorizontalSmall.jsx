import { FlatList, StyleSheet, Text, View } from "react-native"

import { ListSmall } from "./ListSmall"


export const ListMoviesHorizontalSmall = ({ movie, title }) => {
  

  return (
        <View style={{ marginTop: 5 }}>  
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
        </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#E2E2E2', 
    fontSize: 21,
    fontWeight: '700', 
    marginBottom: 10,
    marginLeft: 18,
  },
});
