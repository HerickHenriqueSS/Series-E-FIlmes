
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BuscaFilme from './pages/filmes/BuscaFilme'
import HomePage from './pages/filmes/HomePage'
import ViewFilme from './pages/filmes/ViewFilme'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/filme/:id' element={<ViewFilme />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
