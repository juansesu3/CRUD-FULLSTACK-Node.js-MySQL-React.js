import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from './pages/Books'
import Add from './pages/Add'
import Update from './pages/Update'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={Books}/>
          <Route path='/add' element={Add}/>
          <Route path='/add' element={Update}/>
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App