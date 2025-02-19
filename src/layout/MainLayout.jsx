import Footer from '@/pages/Shared/Footer';
import Navbar from '@/pages/Shared/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='font-bodyFont'>
            <Navbar></Navbar>
            <div><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;