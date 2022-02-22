//import Header from "./components/header"
import Cards from './components/Cards'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div className='App'>
            <Cards />
          </div>
        }
      />
    </Routes>
  )
}

export default App
