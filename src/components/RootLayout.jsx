import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './layer/Navbar';
import Footer from './page/Footer';
import Banner from './layer/Banner';

const RootLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default RootLayout;
