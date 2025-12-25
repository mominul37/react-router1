import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
const RootLayOut = () => {
    return (
        <div>
             <Navbar/>
            <main className='min-h-[calc(100vh-287px)]'>
                <Outlet/>
            </main>
            <Footer/> 
        </div>
    );
};

export default RootLayOut;