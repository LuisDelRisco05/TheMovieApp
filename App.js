import { Provider } from 'react-redux'
import { StackNavigation } from './src/navigation/StackNavigation';
import { store } from './src/store'

const App = () => {
  return (  

    <Provider store={ store }>

      <StackNavigation />

    </Provider>
    
  )
}

export default App
