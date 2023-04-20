import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from './pages/Books'
import Add from './pages/Add'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={Books}/>
          <Route path='/add' element={Add}/>
          <Route path='/add' element={}/>
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App
