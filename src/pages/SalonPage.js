import React from 'react';
import './SalonPage.css';

function SalonPage() {
  const services = [
    {
      id: 1,
      name: "Hair Styling",
      price: "From $50",
      duration: "1 hour",
      description: "Professional hair styling including cuts, coloring, and treatments"
    },
    {
      id: 2,
      name: "Facial Treatment",
      price: "From $75",
      duration: "45 mins",
      description: "Rejuvenating facial treatments for all skin types"
    },
    {
      id: 3,
      name: "Manicure & Pedicure",
      price: "From $40",
      duration: "1 hour",
      description: "Complete nail care and beauty treatments"
    },
    {
      id: 4,
      name: "Makeup Services",
      price: "From $60",
      duration: "45 mins",
      description: "Professional makeup for any occasion"
    }
  ];

  return (
    <div className="salon-page">
      <header className="salon-hero">
        <div className="hero-content">
          <h1>Beauty Salon Services</h1>
          <p>Discover our range of professional beauty treatments</p>
        </div>
      </header>

      <section className="booking-section">
        <h2>Book Your Appointment</h2>
        <form className="booking-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <select required>
              <option value="">Select Service</option>
              {services.map(service => (
                <option key={service.id} value={service.name}>{service.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input type="date" required />
          </div>
          <div className="form-group">
            <input type="time" required />
          </div>
          <button type="submit" className="btn-book">Book Now</button>
        </form>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <h3>{service.name}</h3>
              <p className="price">{service.price}</p>
              <p className="duration">{service.duration}</p>
              <p>{service.description}</p>
              <button className="btn-book">Book Service</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SalonPage; 