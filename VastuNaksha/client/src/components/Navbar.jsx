import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logoIcon from '../assets/logo-icon.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <img src={logoIcon} alt="Vastu Icon" className="logo-icon" />
                    <img src={logo} alt="VastuNaksha" className="logo-img" />
                </Link>
                <ul className="navbar-links">
                    <li><a href="/#home">Home</a></li>
                    <li><a href="/#inspiration">Design</a></li>
                    <li><a href="/#pricing">Pricing</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
