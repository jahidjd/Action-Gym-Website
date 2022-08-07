import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './page/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './page/About';
import Classess from './page/Classess';
import Packages from './page/Packages';
import Trainers from './page/Trainers';
import Contact from './page/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' exact element={<Home/>}></Route>
    <Route path='/about' exact element={<About/>}></Route>
    <Route path='/classess' exact element={<Classess/>}></Route>
    <Route path='/packages' exact element={<Packages/>}></Route>
    <Route path='/trainers' exact element={<Trainers/>}></Route>
    <Route path='/contact' exact element={<Contact/>}></Route>
  </Routes>
   
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
