import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const reviews = [
        {
            text: "The platform's custom design has accelerated our workflow and boosted team productivity by 40%. The automated features are game changing.",
            author: "Sarah Williams",
            role: "Project Manager",
            company: "TechBuild Inc."
        },
        {
            text: "Simply amazing customer support and powerful tools. The analysis was precise and actionable. Helped us fix our house plan before making costly mistakes.",
            author: "Michael Chen",
            role: "CEO & Founder",
            company: "Modern Living"
        },
        {
            text: "Seamless integration into our existing tools made this transition effortless. The real-time collaboration features have improved our remote work greatly.",
            author: "Emily Rodriguez",
            role: "Operations Director",
            company: "Global Corp"
        },
        // Duplicate for variety
        {
            text: "VastuNaksha helped me visualize the energy flow perfectly. The report was detailed and easy to understand for my clients.",
            author: "Ankit Sharma",
            role: "Architect",
            company: "Sharma Designs"
        },
        {
            text: "Best tool for instant vastu corrections. Highly recommended for interior designers looking for quick audits.",
            author: "Priya Mehta",
            role: "Interior Designer",
            company: "Creative Spaces"
        }
    ];

    // Duplicate list to create seamless loop
    const marqueeReviews = [...reviews, ...reviews, ...reviews];

    return (
        <section className="testimonials">
            <div className="container-fluid">
                <div className="testimonials-header">
                    <h2 className="section-title">Testimonials</h2>
                    <p className="section-desc">“VastuNaksha helped us design spaces that feel balanced, purposeful, and truly harmonious.”</p>
                </div>
                <div className="testimonials-marquee">
                    <div className="testimonials-track">
                        {marqueeReviews.map((review, index) => (
                            <div key={index} className="review-card">
                                <div className="stars">★★★★★</div>
                                <p className="review-text">"{review.text}"</p>
                                <div className="reviewer-info">
                                    <div className="reviewer-avatar"></div>
                                    <div className="reviewer-details">
                                        <h4 className="reviewer-name">{review.author}</h4>
                                        <span className="reviewer-role">{review.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
