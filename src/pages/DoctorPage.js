import React from 'react';
import './DoctorPage.css';

function DoctorPage() {
  const services = [
    {
      id: 1,
      name: "General Consultation",
      price: "From $100",
      duration: "30 mins",
      description: "Comprehensive medical consultation with our specialists"
    },
    {
      id: 2,
      name: "Dermatology",
      price: "From $150",
      duration: "45 mins",
      description: "Skin care treatments and consultations"
    },
    {
      id: 3,
      name: "Aesthetic Medicine",
      price: "From $200",
      duration: "1 hour",
      description: "Non-surgical cosmetic treatments"
    },
    {
      id: 4,
      name: "Medical Check-up",
      price: "From $180",
      duration: "1 hour",
      description: "Complete health assessment and screening"
    }
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Dermatologist",
      experience: "15 years experience"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Aesthetic Medicine",
      experience: "12 years experience"
    }
  ];

  return (
    <div className="doctor-page">
      <header className="doctor-hero">
        <div className="hero-content">
          <h1>Medical Services</h1>
          <p>Professional healthcare from expert doctors</p>
        </div>
      </header>

      <section className="doctors-section">
        <h2>Our Medical Team</h2>
        <div className="doctors-grid">
          {doctors.map(doctor => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-image">
                {/* Add doctor image here */}
              </div>
              <h3>{doctor.name}</h3>
              <p className="specialty">{doctor.specialty}</p>
              <p className="experience">{doctor.experience}</p>
              <button className="btn-book">Book Appointment</button>
            </div>
          ))}
        </div>
      </section>

      <section className="booking-section">
        <h2>Book Your Consultation</h2>
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
              <option value="">Select Doctor</option>
              {doctors.map(doctor => (
                <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
              ))}
            </select>
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
          <button type="submit" className="btn-book">Book Consultation</button>
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

export default DoctorPage; 