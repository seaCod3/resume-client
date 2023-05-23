import "./navbar.css"
import cv from "./cv.png"
import en from "./en.png"
import React from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Link } from "react-router-dom";
import { i18n } from "../../translate/i18n";

export default function Navbar(props) {

    const [marginTop, setMarginTop] = React.useState(0);
    const I18N_STORAGE_KEY = "i18nextLng"
    const [language] = React.useState(localStorage.getItem(I18N_STORAGE_KEY));


    const handleLanguageChange = (e) => {
        const browserLanguage = e.target.value;
        localStorage.setItem(I18N_STORAGE_KEY, browserLanguage);
        window.location = window.location;
      }

    React.useEffect(() => {
        // Function to update the margin bottom value based on the window inner height
        const handleWindowResize = () => {
            const newMarginTop = window.innerWidth < 992 ? 50 : 0;
            setMarginTop(newMarginTop);
        };

        // Add event listener to the window resize event
        window.addEventListener("resize", handleWindowResize);

        handleWindowResize();

        // Remove event listener when component is unmounted
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);


    return (
        <nav className="navbar  navbar-expand-lg navigation fixed-top">

            <div className="container">

                <Link className="navbar-brand" to="/">RESUME</Link>

                <div className="flex">


                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <RiMenu3Line color="#fff" size={30} />
                    </button>



                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                        <div className="offcanvas-header">

                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>

                            <button className="bton" type="button" data-bs-dismiss="offcanvas" aria-label="Close"><RiCloseLine color="#fff" size={40} /></button>
                        </div>

                        <div className="offcanvas-body">

                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">FAQ</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">Links</a>
                                </li>

                            </ul>

                            <div className="btn-group">
                                <button className='btn btn-primary' onClick={props.handleModal} >{i18n.t('hero.mainButton')}</button>
                                {/* <button className="btn btn-primary">Create a Resume</button> */}

                                <select name="language" onChange={handleLanguageChange} defaultValue={language}>
                                    <option value="pt" className="language-option">🇨🇻 Portugues</option>
                                    <option value="en" className="language-option">🇺🇲 English</option>
                                </select>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </nav>
    )
}