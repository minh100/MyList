import React from 'react';
import '../Css/Footer.css';
import Logo from '../logo2.png';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-info">
                <div className="name-section">
                    <h3>Created By:</h3>
                    <h3 id="name">Minh Truong</h3>
                </div>
                <img clasName="footer-logo"src={Logo} alt="logo"></img>
                <div className="contact-section">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/minh100/">Linkedin</a>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/minh100">Github</a>
                </div>
            </div>
        </div>
    )
}