import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../footer/Footer';
import Modal from '../../components/modal/Modal';
import { useState } from 'react';
import { useEffect } from 'react';

const Root = () => {

    const [openModal, setOpenModal] = React.useState(false);
    const [isOnCreateResumePage, setIsOnCreateResumePage] = useState(false);
    const url = window.location.pathname;

    function handleModal() {
        setOpenModal(true);
    }


    return (
        <div>

            <Modal open={openModal} close={() => setOpenModal(false)} />


            <header>
                <Navbar handleModal={handleModal} />
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