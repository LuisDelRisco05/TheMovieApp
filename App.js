import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { StackNavigation } from './src/navigation/StackNavigation';
// import { DrawerNavigation } from './src/navigation/DrawerNavigation';


import { store } from './src/store'

const App = () => {
  return (  


    <Provider store={ store }>
      <NavigationContainer
        theme={ DarkTheme }
      >

        <StackNavigation />
        {/* <DrawerNavigation /> */}

      </NavigationContainer>
    </Provider>
  )
}

export default App
