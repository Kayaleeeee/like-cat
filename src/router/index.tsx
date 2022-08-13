import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/Home';
import LikedCatPage from 'pages/LikedCat';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/liked-cats' element={<LikedCatPage />} />
    </Routes>
  );
};

export default Router;
