import React from 'react';
import NavBar from '../../components/Header/NavBar';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='container mx-auto max-w-7xl px-3'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;