import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './DirectionAnalysis.css';
import compassImg from '../assets/compass.png';
// Only keeping the compassImg import for now as central element.

const DirectionAnalysis = () => {
    const [heading, setHeading] = useState(0);
    const [permissionGranted, setPermissionGranted] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // cleanup on unmount
        return () => {
            if (window.removeEventListener) {
                window.removeEventListener('deviceorientation', handleOrientation);
                window.removeEventListener('deviceorientationabsolute', handleOrientation);
            }
        };
    }, []);

    const handleStartCompass = async () => {
        if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
            try {
                const permission = await DeviceOrientationEvent.requestPermission();
                if (permission === 'granted') {
                    setPermissionGranted(true);
                    window.addEventListener('deviceorientation', handleOrientation);
                } else {
                    setError('Permission denied');
                }
            } catch (err) {
                setError('Error requesting permission');
                console.error(err);
            }
        } else {
            // Non-iOS or older devices usually don't need explicit permission
            setPermissionGranted(true);
            // Android absolute support
            if ('ondeviceorientationabsolute' in window) {
                window.addEventListener('deviceorientationabsolute', handleOrientation);
            }
            // Standard support
            window.addEventListener('deviceorientation', handleOrientation);
        }
    };

    const handleOrientation = (e) => {
        let compass = null;

        // iOS
        if (e.webkitCompassHeading) {
            compass = e.webkitCompassHeading;
        }
        // Android / Non-iOS
        else if (e.alpha !== null) {
            // Check if absolute is true or if we are in an absolute event
            if (e.absolute || e.type === 'deviceorientationabsolute') {
                compass = Math.abs(e.alpha - 360);
            } else {
                // Fallback for relative alpha, still better than nothing
                compass = Math.abs(e.alpha - 360);
            }
        }

        // Ensure compass is a valid number
        if (compass !== null && compass !== undefined) {
            setHeading(compass);
        }
    };

    const getCardinalDirection = (angle) => {
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        const index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
        return directions[index];
    };

    return (
        <div className="direction-analysis-page">
            <Navbar />

            <main className="da-container">
                <header className="da-header">
                    <h1>Live Compass & Direction Analysis</h1>
                    <p>Understanding the energy flow of your space through traditional Vedic principles.</p>
                </header>

                <div className="da-main-content">
                    {/* Compass Section - Centered */}
                    <div className="da-center full-width">
                        <div className="compass-container">
                            <div className="compass-visual-wrapper">
                                <div className="compass-arrow-marker"></div>
                                <img
                                    src={compassImg}
                                    alt="Live Compass"
                                    className="compass-img"
                                    style={{ transform: `rotate(${-heading}deg)` }}
                                />
                                <div className="compass-center-dot"></div>
                            </div>

                            <div className="compass-status">
                                <div className="current-direction">
                                    <span className="degree-value">{Math.round(heading)}°</span>
                                    <span className="direction-label">{getCardinalDirection(heading)}</span>
                                </div>

                                {!permissionGranted && (
                                    <button className="btn-start-compass" onClick={handleStartCompass}>
                                        Enable Live Compass
                                    </button>
                                )}

                                {error && <p className="compass-error">{error}</p>}

                                <div className="manual-override">
                                    <p className="manual-label">Manual Rotation (Simulate):</p>
                                    <input
                                        type="range"
                                        min="0"
                                        max="360"
                                        value={heading}
                                        onChange={(e) => setHeading(Number(e.target.value))}
                                        className="compass-slider"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default DirectionAnalysis;
