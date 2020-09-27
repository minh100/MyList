import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';

export const Navbar = () => {
    return (
        <header>
            <ul className="navbar">
                <div className="navbar-button">
                    <Link className="link" to="/">ML</Link>

                </div>
                <div className="navbar-button">
                    <Link className="link" to="/">Search</Link>

                </div>
                <div className="navbar-button">
                    <Link className="link" to="mylist">MyList</Link>
                </div>

            </ul>
        </header>
    )
}