import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Welcome Section */}
            <section className="welcome-section">
                <h1> Welcome to your Full-Stack Developer Journey</h1>
                <p>
                    Take your skills from Junior to Senior level by mastering challenges, projects, and learning paths designed to help you grow as a developer.
                </p>
                <Link to="/dashboard" className="cta-button">
                    Get Started
                </Link>
            </section>

            {/* Highlights Section */}
            <section className="highlights-section">
                <div className="highlight">
                    <h2>Interactive Learning Paths</h2>
                    <p>
                        Follow structured learning paths tailored to help you master front-end, back-end, and full-stack development.
                    </p>
                </div>

                <div className="highlight">
                    <h2>Real-World Projects</h2>
                    <p>
                        Build real-world projects, track your progress, and showcase your completed work to potential employers.
                    </p>
                </div>

                <div className="highlight">
                    <h2>Coding Challenges</h2>
                    <p>
                        Practice with coding challenges to reinforce your knowledge and solve real-world problems.
                    </p>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section">
                <h2>Ready to Start?</h2>

                <p>
                    Click below to access your personalized dashboard and start your learning journey.
                </p>
                <Link to="/dashboard" className="cta-button">
                    Go to Dashboard
                </Link>
            </section>
        </div>

    );
};

export default Home;