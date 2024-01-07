import './App.css'

import { Schema1 } from "./content"
import { AppProvider } from './context/provider/appProvider'

function App() {

  return (
    <AppProvider>
      <Schema1 />
    </AppProvider>
  )
}

export default App
