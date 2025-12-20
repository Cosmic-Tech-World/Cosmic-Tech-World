import { Link } from 'react-router-dom';
import mandala from '../assets/hero-mandala.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Your Trusted Vastu Map & Direction Analysis</h1>
                    <p className="hero-subtitle">
                        Get accurate Vastu reports and expert guidance – all online.<br />
                        Our advanced mapping system helps you understand the energy flow of your home or workplace.<br />
                        Receive personalized recommendations to improve harmony, prosperity, and well-being.<br />
                        Simple, quick, and designed for anyone looking to bring balance into their space.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Get Started</button>
                        <Link to="/check-direction" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>Check Directions</Link>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <img src={mandala} alt="Vastu Mandala" className="hero-mandala-img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
