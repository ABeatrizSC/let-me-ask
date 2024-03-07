/* import React from 'react'; */
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

//navegação
import { BrowserRouter } from 'react-router-dom';
//firebase
import './services/firebase.ts';
//styles
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
