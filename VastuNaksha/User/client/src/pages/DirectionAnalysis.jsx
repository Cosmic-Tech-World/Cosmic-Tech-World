import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './DirectionAnalysis.css';

const mandalaUrl = "https://www.shutterstock.com/shutterstock/photos/2404881617/display_1500/stock-vector-energy-fields-of-vastu-purush-mandala-devas-and-asuras-in-directions-of-vastu-shastra-vedic-2404881617.jpg";

const DirectionAnalysis = () => {
    return (
        <div className="direction-analysis-page">
            <Navbar />

            <main className="da-container">
                <header className="da-header">
                    <h1>Direction Analysis & Vastu Insights</h1>
                    <p>Understanding the energy flow of your space through traditional Vedic principles.</p>
                </header>

                <div className="da-main-content">
                    {/* Left Column */}
                    <div className="da-side left-side">
                        <div className="analysis-card left-top">
                            <div className="card-icon">📊</div>
                            <h3>Instant Analysis Report</h3>
                            <p>Get comprehensive Vastu analysis within minutes of uploading your floor plan. Our AI system processes and evaluates every aspect of your design.</p>
                            <div className="connector-dot"></div>
                        </div>

                        <div className="analysis-card left-mid">
                            <div className="card-icon">🛠️</div>
                            <h3>Customized Remedies</h3>
                            <p>Receive personalized suggestions for improvements and modifications to enhance Vastu compliance.</p>
                            <div className="connector-dot"></div>
                        </div>

                        <div className="analysis-card left-bot">
                            <div className="card-icon">🏠</div>
                            <h3>Room-by-Room Analysis</h3>
                            <p>Detailed evaluation of each room's placement, dimensions, and alignment with Vastu principles.</p>
                            <div className="connector-dot"></div>
                        </div>
                    </div>

                    {/* Center Column */}
                    <div className="da-center">
                        <div className="mandala-wrapper">
                            <img src={mandalaUrl} alt="Vastu Purusha Mandala" className="mandala-img" style={{ borderRadius: '50%', border: '4px solid #fff', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }} />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="da-side right-side">
                        <div className="analysis-card right-top">
                            <div className="card-icon">🎨</div>
                            <h3>Visual Reports</h3>
                            <p>Color-coded floor plans and visual indicators highlighting areas of concern and compliance.</p>
                            <div className="connector-dot"></div>
                        </div>

                        <div className="analysis-card right-mid">
                            <div className="card-icon">🧭</div>
                            <h3>Compliance Score</h3>
                            <p>Get a quantitative assessment of your home's Vastu compliance with our proprietary scoring system.</p>
                            <div className="connector-dot"></div>
                        </div>

                        <div className="analysis-card right-bot">
                            <div className="card-icon">💡</div>
                            <h3>Expert Insights</h3>
                            <p>Your Vastu report is crafted using the collective wisdom of leading Vastu specialists, ensuring thorough analysis and personalized guidance.</p>
                            <div className="connector-dot"></div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default DirectionAnalysis;
