import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

import ctlLogo from '../assets/ctl-logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container animate-fade-in">
                <div className="footer-logo">
                    {/* Logo or name */}
                    <span className="logo-text-sm">
                        <img src={logo} alt="VastuNaksha" className="logo-img-footer" />
                    </span>
                </div>
                <div className="footer-copyright">
                    © 2025 Vastunaksha. All rights reserved • Made with care
                    <div className="ctl-brand-container">
                        <span>A Product by Cosmic Thinking Lab</span>
                        <img src={ctlLogo} alt="Cosmic Thinking Lab" className="ctl-logo" />
                    </div>
                </div>
                <div className="footer-links">
                    <a href="#privacy">Privacy</a>
                    <a href="#tcs">T&Cs</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
