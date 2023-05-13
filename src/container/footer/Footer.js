import './footer.css';
import logo from './logo.png';

export default function Footer() {
    return (
        <div className="footer mt-5">
            <div className='container text-center'>

                <img src={logo} alt='logo' />

                <p>Copyright © 2023 SeaCode, Inc.</p>

                <span><em>"Our mission is to help people have an impact within the community they are part of."</em></span>

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

            </div>


        </div>
    )
}