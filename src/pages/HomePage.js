import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to BeautyMed</h1>
          <p>Your one-stop destination for beauty and medical services</p>
          <div className="hero-buttons">
            <Link to="/salon" className="btn btn-primary">Book Salon</Link>
            <Link to="/doctor" className="btn btn-secondary">Book Doctor</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-spa"></i>
            <h3>Beauty Treatments</h3>
            <p>Professional beauty services for your perfect look</p>
          </div>
          <div className="service-card">
            <i className="fas fa-user-md"></i>
            <h3>Medical Consultations</h3>
            <p>Expert medical advice from certified professionals</p>
          </div>
          <div className="service-card">
            <i className="fas fa-heart"></i>
            <h3>Wellness Programs</h3>
            <p>Comprehensive wellness solutions for your health</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Expert Staff</h3>
            <p>Highly qualified professionals at your service</p>
          </div>
          <div className="feature">
            <h3>Modern Facilities</h3>
            <p>State-of-the-art equipment and facilities</p>
          </div>
          <div className="feature">
            <h3>Convenient Booking</h3>
            <p>Easy online appointment scheduling</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Book your appointment today and experience the best in beauty and medical care</p>
        <Link to="/salon" className="btn btn-primary">Book Now</Link>
      </section>
    </div>
  );
}

export default HomePage; 