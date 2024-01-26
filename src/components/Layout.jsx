import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const Layout = () => {
    return (
        <div className="min-h-screen text-white bg-black">
            <Nav/>
            <Outlet/>
        </div>
    )
}

export default Layout;