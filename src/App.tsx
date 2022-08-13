import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from 'router';
import 'App.css';
import Header from 'components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
