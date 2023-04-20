import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from './pages/Books'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={Books}/>
          <Route path='/books'/>
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App
