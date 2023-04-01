import { useState } from "react";
import "./navbar.css"
import React from "react";

export default function Navbar() {

    const [marginTop, setMarginTop] = React.useState(0);

  React.useEffect(() => {
    // Function to update the margin bottom value based on the window inner height
    const handleWindowResize = () => {
      const newMarginTop = window.innerWidth < 992 ? 50 : 0;
      setMarginTop(newMarginTop);
    };

    // Add event listener to the window resize event
    window.addEventListener("resize", handleWindowResize);

    // Call the handleWindowResize once initially
    handleWindowResize();

    // Remove event listener when component is unmounted
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const style = {
    marginTop: `${marginTop}px`,
  };
  


    return (
        <nav className="navbar navbar-expand-lg navigation">

            <div className="container">

                <a className="navbar-brand" href="#">RESUME</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">

                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>

                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body">

                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>

                        </ul>



                        <button style={style} className="btn btn-primary">Create a Resume</button>

                    </div>
                    
                </div>
            </div>
        </nav>
    )
}