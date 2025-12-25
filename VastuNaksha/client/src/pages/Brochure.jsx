import React from 'react';
import { Link } from 'react-router-dom';
import './Brochure.css';
import mandala from '../assets/hero-mandala.png';
import logo from '../assets/logo.png';

const Brochure = () => {
    const handleDownload = () => {
        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // Set font and colors
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(20);
            doc.setTextColor(212, 163, 115);

            // Title
            doc.text('VastuNaksha Digital Brochure', 20, 30);

            // Reset font for content
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);

            // Content
            let yPos = 50;
            const lineHeight = 7;

            const content = [
                '15 Years of Experience in Vastu Shastra',
                '',
                'TRANSFORM YOUR SPACE WITH ANCIENT WISDOM',
                '',
                'Our Expertise:',
                '• 15+ Years of Professional Experience',
                '• 5000+ Successful Projects Completed',
                '• Traditional Vastu Masters & Modern Architects',
                '• Digital Precision with Ancient Wisdom',
                '',
                'SIGNATURE SERVICES',
                '',
                'FOUNDATION PLAN - ₹15,000',
                'Perfect for: First-time homeowners & Budget-conscious families',
                '✓ Comprehensive Vastu Assessment Report',
                '✓ 2D Architectural Layout with Vastu Zones',
                '✓ Room-wise Energy Flow Analysis',
                '✓ Directional Compass & Entrance Guidance',
                '',
                'HARMONY DESIGN - ₹35,000 (MOST POPULAR)',
                'Perfect for: Growing families & Construction projects',
                '✓ Advanced Vastu + Architectural Integration',
                '✓ Professional 2D Floor Plans (2 Revisions)',
                '✓ Complete Electrical & Plumbing Layout',
                '✓ Construction-Ready Drawings',
                '',
                'LUXURY MASTERPIECE - ₹80,000',
                'Perfect for: Premium homes & Commercial spaces',
                '✓ Complete Architectural & Vastu Mastery',
                '✓ 3D Visualization & Photorealistic Renders',
                '✓ Unlimited Design Revisions',
                '✓ Premium Material & Color Consultation',
                '',
                'OUR PROVEN PROCESS',
                '1. CONSULTATION: Share your vision and requirements',
                '2. ANALYSIS: Expert Vastu space analysis',
                '3. DESIGN: Custom architectural plans',
                '4. REFINEMENT: Collaborative revisions',
                '5. DELIVERY: Complete package with lifetime support',
                '',
                'CONTACT US',
                'Website: https://vastu-naksha.vercel.app',
                'Email: hello@vastunaksha.online',
                '',
                '© 2025 VastuNaksha | A Product by Cosmic Thinking Lab'
            ];

            content.forEach((line) => {
                if (yPos > 270) {
                    doc.addPage();
                    yPos = 20;
                }

                if (line.includes('SIGNATURE SERVICES') || line.includes('OUR PROVEN PROCESS') || line.includes('CONTACT US')) {
                    doc.setFont('helvetica', 'bold');
                    doc.setFontSize(14);
                    doc.setTextColor(212, 163, 115);
                } else if (line.includes('PLAN') || line.includes('DESIGN') || line.includes('MASTERPIECE')) {
                    doc.setFont('helvetica', 'bold');
                    doc.setFontSize(12);
                    doc.setTextColor(0, 0, 0);
                } else {
                    doc.setFont('helvetica', 'normal');
                    doc.setFontSize(10);
                    doc.setTextColor(0, 0, 0);
                }

                doc.text(line, 20, yPos);
                yPos += lineHeight;
            });

            doc.save('VastuNaksha-Premium-Brochure.pdf');
        } catch (error) {
            console.error('PDF generation failed:', error);
            alert('PDF download failed. Please try again.');
        }
    };

    return (
        <div className="brochure-page">
            {/* Animated Header */}
            <header className="brochure-header">
                <div className="container">
                    <Link to="/" className="back-link">← Return Home</Link>
                    <div className="header-title">
                        <img src={logo} alt="VastuNaksha Logo" className="header-logo" />
                        <div>
                            <span className="header-badge">Premium Collection</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section with Gradient */}
            <section className="brochure-hero">
                <div className="hero-bg-pattern"></div>
                <div className="container">
                    <div className="hero-layout">
                        <div className="hero-content">
                            <div className="hero-badge">✨ Transform Your Space ✨</div>
                            <h2>Ancient Wisdom Meets Modern Architecture</h2>
                            <p className="hero-tagline">Creating Harmonious Spaces for Over 15 Years</p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">5000+</span>
                                    <span className="stat-label">Happy Families</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">15+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Satisfaction</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img src="https://i.pinimg.com/1200x/d6/2a/7c/d62a7c9aec363fb308169f400d394fb1.jpg" alt="Vastu Architecture" className="hero-main-img" />
                        </div>
                    </div>
                    <div className="floating-mandala">
                        <img src={mandala} alt="Vastu Mandala" />
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="expertise-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Signature Expertise</h2>
                        <p>Where traditional Vastu Shastra meets contemporary architectural excellence</p>
                    </div>
                    <div className="expertise-grid">
                        <div className="expertise-card">
                            <div className="card-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Vastu Mastery</h3>
                            <p>Deep understanding of ancient Vastu principles applied to modern living spaces</p>
                        </div>
                        <div className="expertise-card">
                            <div className="card-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Architectural Precision</h3>
                            <p>Professional-grade floor plans and technical drawings for construction</p>
                        </div>
                        <div className="expertise-card">
                            <div className="card-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Design Innovation</h3>
                            <p>Creative solutions that balance aesthetics with Vastu compliance</p>
                        </div>
                        <div className="expertise-card">
                            <div className="card-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Digital Excellence</h3>
                            <p>Cutting-edge tools and technology for accurate measurements and analysis</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Services */}
            <section className="premium-services">
                <div className="container">
                    <div className="section-header">
                        <h2>Choose Your Perfect Plan</h2>
                        <p>Tailored solutions for every dream and budget</p>
                    </div>
                    <div className="services-showcase">
                        <div className="service-tier bronze">
                            <div className="tier-badge">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Foundation
                            </div>
                            <h3>Starter Plan</h3>
                            <div className="price-display">
                                <span className="currency">₹</span>
                                <span className="amount">15,000</span>
                            </div>
                            <p className="tier-desc">Perfect for first-time homeowners and budget-conscious families</p>
                            <div className="features-list">
                                <div className="feature">✓ Vastu Assessment Report</div>
                                <div className="feature">✓ 2D Layout with Zones</div>
                                <div className="feature">✓ Energy Flow Analysis</div>
                                <div className="feature">✓ Directional Guidance</div>
                            </div>
                        </div>

                        <div className="service-tier silver popular">
                            <div className="tier-badge">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                                    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2" />
                                </svg>
                                Harmony
                            </div>
                            <div className="popular-tag">Most Popular</div>
                            <h3>Complete Design</h3>
                            <div className="price-display">
                                <span className="currency">₹</span>
                                <span className="amount">35,000</span>
                            </div>
                            <p className="tier-desc">Ideal for growing families and construction projects</p>
                            <div className="features-list">
                                <div className="feature">✓ Advanced Vastu Integration</div>
                                <div className="feature">✓ Professional Floor Plans</div>
                                <div className="feature">✓ Electrical & Plumbing Layout</div>
                                <div className="feature">✓ Construction-Ready Files</div>
                            </div>
                        </div>

                        <div className="service-tier gold">
                            <div className="tier-badge">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Luxury
                            </div>
                            <h3>Masterpiece</h3>
                            <div className="price-display">
                                <span className="currency">₹</span>
                                <span className="amount">80,000</span>
                            </div>
                            <p className="tier-desc">Premium solution for luxury homes and commercial spaces</p>
                            <div className="features-list">
                                <div className="feature">✓ Complete Architectural Mastery</div>
                                <div className="feature">✓ 3D Visualization & Renders</div>
                                <div className="feature">✓ Unlimited Revisions</div>
                                <div className="feature">✓ Premium Consultation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="process-timeline">
                <div className="container">
                    <div className="section-header">
                        <h2>Your Journey to Perfect Space</h2>
                        <p>Our proven 5-step process ensures exceptional results</p>
                    </div>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker">1</div>
                            <div className="timeline-content">
                                <h3>Discovery Call</h3>
                                <p>Share your vision, requirements, and site details with our expert consultants</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker">2</div>
                            <div className="timeline-content">
                                <h3>Vastu Analysis</h3>
                                <p>Comprehensive evaluation using traditional principles and modern measurement tools</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker">3</div>
                            <div className="timeline-content">
                                <h3>Custom Design</h3>
                                <p>Personalized architectural plans optimized for Vastu compliance and functionality</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker">4</div>
                            <div className="timeline-content">
                                <h3>Refinement</h3>
                                <p>Collaborative revision process to ensure every detail meets your expectations</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker">5</div>
                            <div className="timeline-content">
                                <h3>Final Delivery</h3>
                                <p>Complete package with all files, documentation, and lifetime support included</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download CTA */}
            <section className="download-cta">
                <div className="container">
                    <div className="cta-card">
                        <div className="cta-content">
                            <h2>Get Your Complete Digital Brochure</h2>
                            <p>Download our comprehensive guide with detailed service information, pricing, and portfolio samples</p>
                            <button className="premium-download-btn" onClick={handleDownload}>
                                <span className="btn-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </span>
                                Download PDF Brochure
                                <span className="btn-arrow">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="7" y1="17" x2="17" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <polyline points="7,7 17,7 17,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                            <div className="cta-footer">
                                <p>Ready to transform your space? <Link to="/" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}>Start your project today</Link></p>
                            </div>
                        </div>
                        <div className="cta-visual">
                            <div className="floating-elements">
                                <div className="element element-1">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="element element-2">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="element element-3">
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
                                        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brochure;