import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'

import Home from './src/screens/Home'

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <Home />
    </SafeAreaView>
  )
}

export default App
