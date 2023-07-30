import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Components:
import NavBar from './components/NavBar';

import Login from "./components/login/login.component";
import Register from "./components/login/register.component";
import Profile from './components/login/profile.component';

import { FoodProvider } from "./utils/foodsContext";
import { UserProvider } from './utils/userContext';
// Pages: 
import Home from './pages/Home';
import Page1 from './pages/ScrutinMajoritaire';
import Page2 from './pages/ScrutinClass';
import Page3 from './pages/ScrutinW';
import Page4 from './pages/ScrutinNote';
import Page5 from './pages/ScrutinChoice';

import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {};

function App(props:Props) {
  return (
    <UserProvider>
      <FoodProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route element={<><NavBar/><Outlet/></>}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<Register />} />
              <Route path='/scrutinMaj' element={<Page1/>} />
              <Route path='/scrutinClass' element={<Page2/>} />
              <Route path='/scrutinW' element={<Page3 />} />
              <Route path='/scrutinNote' element={<Page4/>} />
              <Route path='/scrutinChoice' element={<Page5/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FoodProvider>
    </UserProvider>
      
  );
}

export default App;