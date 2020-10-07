import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';
// import Logo from '../myList Logo.svg';
import Logo from '../logo2.png';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-section">
                <Link className="logo" to="/">
                    <img src={Logo} alt="Logo"></img>
                </Link>
                <div className="links">
                    <Link className="link" to="/">Search</Link>
                    <Link className="link" to="/mylist">MyList</Link>
                </div>
            </div>
        </div>
    )
}
