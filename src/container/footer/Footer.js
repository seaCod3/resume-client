import './footer.css';
import logo from './logo.png';

import { FaEnvelope, FaFacebookSquare, FaInstagram, FaGlobe } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer mt-5">
            <div className='container text-center'>

                <div className='about'>
                    <img src={logo} alt='logo' />

                    <span><em>"Our mission is to help people have an impact within the community they are part of."</em></span>
                </div>

                <div className='social-icons'>

                    <p>Get in touch with us</p>

                    <a href='https://www.facebook.com/' target='blank'>
                        <FaFacebookSquare color="#fff" size={30} />
                    </a>

                    <a href='https://www.instagram.com/' target='blank'>
                        <FaInstagram color="#fff" size={30} />
                    </a>

                    <a href="mailto:recipient@example.com">
                        <FaEnvelope color="#fff" size={30} />
                    </a>
                   
                    <a href="#">
                        <FaGlobe color="#fff" size={30} />
                    </a>



                </div>

                <hr />

                <ul className='d-md-flex justify-content-center my-list'>
                    <li>
                        <a href='#'>Home</a>
                    </li >

                    <li>
                        <a href='#'>Features</a>
                    </li>

                    <li>
                        <a href='#'>FAQ</a>
                    </li>

                    <li>
                        <a href='#'>Links</a>
                    </li>
                </ul>

                <div className='copyright' >

                    <p>Copyright © 2023 SeaCode, Inc.</p>
                    <p>Made with ❤️ by SeaCode</p>
                </div>

            </div>


        </div>
    )
}