import React from 'react';
import '../styles/home_page.css';
import vrImage from '../assets/Image 2.png';

const HomePage = () => {
    return (
        <div className="home-page">
            {/* Header/Navigation */}
            <header className="header">
                <div className="logo-container">
                    <div className="logo">a</div>
                    <div className="logo-text">MARKETPLACE <span>An amdocs company</span></div>
                </div>
                <nav className="main-nav">
                    <ul>
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <button className="search-btn">
                        <i className="search-icon"></i>
                    </button>
                    <button className="notification-btn">
                        <i className="notification-icon"></i>
                    </button>
                    <div className="profile-btn">
                        <img src="https://via.placeholder.com/32" alt="Profile" className="profile-icon" />
                    </div>
                </div>
            </header>

            {/* Hero Section with VR background image */}
            <div
                className="hero-background"
                style={{
                    backgroundImage: `url(${vrImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                }}
            >
                {/* Overlay the text properly oriented */}
                <div className="hero-text-overlay">
                    <h2 className="studio-title">amdocs STUDIOS</h2>
                    <div className="studio-subtitle">
                        <span>Experience & Digital Engineering</span>
                        <span>|</span>
                        <span>Cloud</span>
                        <span>|</span>
                        <span>Data & GenAI</span>
                        <span>|</span>
                        <span>Experience & Digital Engineering</span>
                    </div>
                </div>
            </div>

            {/* Empty container for future sections */}
            <div className="content-placeholder">
                {/* You'll build the rest later */}
            </div>
        </div>
    );
};

export default HomePage;