import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contact from './Component/contact';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Dasboard from './Component/Dasboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route exact path="/" Component={Home}/>
  <Route exact path="/Dasboard" Component={Dasboard}/>
  <Route exact path="/Contact" Component={Contact}/>
 </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
