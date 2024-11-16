import React from 'react';
import '../CSS/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="animated-banner">
        <h1 className="project-title">CRUDySpringReact</h1>
        <p className="project-description">
          Welcome to <strong>CRUDySpringReact</strong>! A robust full-stack web application built with 
          <span className="highlight"> Spring Boot</span> and <span className="highlight">React.js</span>. 
          Manage your data efficiently with powerful <strong>Create, Read, Update, Delete</strong> operations.
        </p>
      </div>

      <div className="features-container">
        <h2 className="features-title">Project Highlights</h2>
        <ul className="features-list">
          <li>💻 Seamless Frontend-Backend Integration</li>
          <li>⚡ Fast and Scalable REST APIs</li>
          <li>🔒 Secure Data Management</li>
          <li>📊 Responsive and User-Friendly Interface</li>
          <li>📦 Fully Configurable and Modular Design</li>
        </ul>
      </div>

      <footer className="home-footer">
        <p>
          Built with ❤️ by <span className="highlight">Sangramsingh Suryawanshi</span> team.
        </p>
      </footer>
    </div>
  );
};

export default Home;
