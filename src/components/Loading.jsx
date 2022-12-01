import { View, ActivityIndicator } from "react-native"

export const Loading = () => {
  return (
        <View style={{ justifyContent: 'center', flex: 1}}>
            <ActivityIndicator color="#DFA205" size={ 100 } />
        </View>
  )
}
