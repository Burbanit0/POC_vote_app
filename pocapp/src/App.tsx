import React from 'react';
import { BrowserRouter } from "react-router-dom";

// Components:
import AnimatedRoutes from "./components/AnimatedRoutes";

import { FoodProvider } from "./utils/foodsContext";
import { UserProvider } from './utils/userContext';
// Pages: 

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <UserProvider>
      <FoodProvider>
        <BrowserRouter>
          <AnimatedRoutes/>
        </BrowserRouter>
      </FoodProvider>
    </UserProvider>
      
  );
}

export default App;