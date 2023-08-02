import React from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import Home from '../pages/Home';
import Page1 from '../pages/ScrutinMajoritaire';
import Page2 from '../pages/ScrutinClass';
import Page3 from '../pages/ScrutinW';
import Page4 from '../pages/ScrutinNote';
import Page5 from '../pages/ScrutinChoice';

import NavBar from './NavBar';

import Login from "./login/login.component";
import Register from "./login/register.component";
import Profile from './login/profile.component';

export default function AnimatedRoutes() {
    let location = useLocation();

    return (
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
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
        </AnimatePresence>
    )
}