import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Components:
import NavBar from './components/NavBar';


import AuthService from "./services/auth.service";
import IUser from './types/user.type';

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from './components/profile.component';

import EventBus from "./common/EventBus";

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

  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

  const logOut = useCallback(() => {
    setCurrentUser(undefined);
    AuthService.logout();  
  }, []);

  useEffect(() =>{
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      };

    EventBus.on("logout", logOut);
  }, [logOut])
  
  useEffect(()=> {
    return(
      EventBus.remove("logout", logOut)
    ) 
  },[logOut])

  return (
        <BrowserRouter>
          
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route element={<><NavBar user={currentUser} logOut={logOut}/><Outlet/></>}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<Register />} />
              <Route path='/scrutinMaj' element={<Page1 user={currentUser} />} />
              <Route path='/scrutinClass' element={<Page2 user={currentUser} />} />
              <Route path='/scrutinW' element={<Page3 user={currentUser} />} />
              <Route path='/scrutinNote' element={<Page4 user={currentUser} />} />
              <Route path='/scrutinChoice' element={<Page5 />} />
            </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;