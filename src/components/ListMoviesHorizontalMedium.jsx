import { FlatList, StyleSheet, Text, View } from "react-native"

import Icon  from 'react-native-vector-icons/Ionicons';

import { ListMedium } from "./ListMedium"


export const ListMoviesHorizontalMedium = ({ movie, title }) => {
  

  return (

        <>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
            
            <Text style={ styles.title }>{title}</Text>
            <Icon 
              name="ellipsis-horizontal"
              size={ 20 }
              color="#FF722A"
              style={ styles.icon }
            />

          </View>

          <FlatList 
            data={ movie }
            keyExtractor={ item => item.id }
            renderItem={ ({ item }) => (

              <ListMedium movie={ item } />

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
  icon:{
    right: 25,
  }
});
