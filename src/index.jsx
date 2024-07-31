import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inicio from './pages/inicio';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sobre from './pages/sobre';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Inicio />}></Route>
          <Route path='/sobre' element= {<Sobre />}></Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

