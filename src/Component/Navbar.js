import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';
import Logo from '../logo2.png';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-section">
                <Link className="logo" to="/">
                    <img src={Logo} alt="Logo"></img>
                </Link>
                <div className="links">
                    <Link className="link" to="/">Search for Anime</Link>
                    <Link className="link" to="/list/">MyList</Link>
                </div>
            </div>
        </div>
    )
}
