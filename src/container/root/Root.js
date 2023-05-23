import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../footer/Footer';
import Modal from '../../components/modal/Modal';

const Root = () => {

    const [openModal, setOpenModal] = React.useState(false);

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
            <footer >
                <Footer />
            </footer>
        </div>
    )
}

export default Root;