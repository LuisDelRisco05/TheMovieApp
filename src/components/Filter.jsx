import { View, StyleSheet } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons';

export const Filter = () => {
  return (
    <View style={ styles.container }>
        <Icon 
            name="funnel-outline"
            size={ 17}
            color="#FFF"
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: { 
        position: 'absolute', 
        top: 60, 
        right: 28,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
