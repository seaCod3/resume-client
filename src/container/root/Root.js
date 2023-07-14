import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../footer/Footer';


const Root = () => {

    const url = window.location.pathname;



    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            {/* THe CODE ABOVE WAS FOR TEST ONLY!!! FIX IT BY CREATING CUSTOM LAYOUT FOR THE CREATERESUMEPAGE */}
            {!url.includes('create-resume') &&
                (<footer >
                    <Footer />
                </footer>)}
        </div>
    )
}

export default Root;