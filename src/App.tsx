//navegação entre páginas
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom"


function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/rooms/new' element={<NewRoom />} />
    </Routes>
  )
}

export default App
