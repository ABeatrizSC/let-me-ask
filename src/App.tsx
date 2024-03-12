//Contexto e Estado
import { AuthContextProvider } from './contexts/AuthContext';

//navegação entre páginas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom"

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/rooms/new' element={<NewRoom />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
