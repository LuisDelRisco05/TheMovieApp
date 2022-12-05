import { Provider } from 'react-redux'
import { DrawerNavigation } from './src/navigation/DrawerNavigation';

import { store } from './src/store'

const App = () => {
  return (  

    <Provider store={ store }>

      <DrawerNavigation />

    </Provider>
    
  )
}

export default App
