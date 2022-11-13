import React from 'react';
import './app.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Vacancies from './pages/Vacancies';
import Services from './pages/Services';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/vacancies' element={<Vacancies />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
