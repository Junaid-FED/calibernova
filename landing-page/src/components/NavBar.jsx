import React from 'react';
import "./NavBar.css";

const NavBar = () => {
    const phoneNumber = "9595253778"; // Your phone number

    return (
        <div className='nav-container'>
            <div className="container nav-container">
                <div className="left">
                    <a className="navbar-brand" href="#">
                        <img src="../src/assets/images/logo.png" alt="Company Logo" id='logo' />
                    </a>
                </div>
                <div className="right">
                    <a href={`tel:${phoneNumber}`} className='btn btn-danger'>
                        Call Now
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
