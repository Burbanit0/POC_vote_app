import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './router';
import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  const content = useRoutes(routes);
  return (
    <>
      <ToastContainer />
      {content}
    </>
  );
}

export default App;