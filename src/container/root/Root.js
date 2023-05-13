import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../footer/Footer';

const Root = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer >
                <Footer />
            </footer>
        </div>
    )
}

export default Root;