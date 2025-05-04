import React from 'react';
import './App.css';  // You can customize this later for additional styles

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Company</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero bg-primary text-white text-center py-5">
        <h1 className="display-4">Welcome to Our Company</h1>
        <p className="lead">We provide high-quality services to help your business grow.</p>
        <a href="#" className="btn btn-light btn-lg">Get Started</a>
      </header>
     {/* Services Section */}
<section className="services py-5">
  <div className="container">
    <h2 className="text-center mb-4">Our Services</h2>
    <div className="row">
      {/* Airport Transfers */}
      <div className="col-md-4">
        <div className="card">
          <img src="/images/airport-transfer.jpg" className="card-img-top" alt="Airport Transfer" />
          <div className="card-body">
            <h5 className="card-title">Airport Transfers</h5>
            <p className="card-text">Drop-off/pick-up from major airports like Gatwick, Heathrow, and more.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      
      {/* Seaport Transfer */}
      <div className="col-md-4">
        <div className="card">
          <img src="/images/seaport-transfer.jpg" className="card-img-top" alt="Seaport Transfer" />
          <div className="card-body">
            <h5 className="card-title">Seaport Transfer</h5>
            <p className="card-text">Seaport transfer services to/from major UK ports.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      
      {/* Station Transfer */}
      <div className="col-md-4">
        <div className="card">
          <img src="/images/station-transfer.jpg" className="card-img-top" alt="Station Transfer" />
          <div className="card-body">
            <h5 className="card-title">Station Transfer</h5>
            <p className="card-text">Convenient transfer between stations to ensure smooth travel.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>

    <div className="row mt-4">
      {/* University Links */}
      <div className="col-md-4">
        <div className="card">
          <img src="/images/university-links.jpg" className="card-img-top" alt="University Links" />
          <div className="card-body">
            <h5 className="card-title">University Links</h5>
            <p className="card-text">Transfers to and from universities, ideal for students.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>

      {/* City Touring */}
      <div className="col-md-4">
        <div className="card">
          <img src="/images/city-tour.jpg" className="card-img-top" alt="City Touring" />
          <div className="card-body">
            <h5 className="card-title">City Touring</h5>
            <p className="card-text">Sightseeing and city tour services for your convenience.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>

      {/* Private Taxi Hire */}
      <div className="col-md-4">
        <div className="card">
          <img src="/images/private-taxi-hire.jpg" className="card-img-top" alt="Private Taxi Hire" />
          <div className="card-body">
            <h5 className="card-title">Private Taxi Hire</h5>
            <p className="card-text">Covering East and West Sussex, and beyond across the UK.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>

    <div className="row mt-4">
      {/* Groups */}
      <div className="col-md-4">
        <div className="card">
          <img src="/images/groups.jpg" className="card-img-top" alt="Groups" />
          <div className="card-body">
            <h5 className="card-title">Groups</h5>
            <p className="card-text">Transportation for large groups, whether for tours or events.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>

      {/* VIP Service */}
      <div className="col-md-4">
        <div className="card">
          <img src="/images/vip-service.jpg" className="card-img-top" alt="VIP Service" />
          <div className="card-body">
            <h5 className="card-title">VIP Service</h5>
            <p className="card-text">Chauffeured service upon request for our valued customers.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>

      {/* Business Accounts */}
      <div className="col-md-4">
        <div className="card">
          <img src="/images/business-accounts.jpg" className="card-img-top" alt="Business Accounts" />
          <div className="card-body">
            <h5 className="card-title">Business Accounts</h5>
            <p className="card-text">Special services for corporate clients with flexible invoicing.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Contact Section */}
<section className="contact py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-4">Contact Us</h2>
    <div className="row">
      <div className="col-md-6">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
      <div className="col-md-6">
        <h4>Our Office</h4>
        <p><strong>Company Address:</strong> 123 Business Avenue, City, Country</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Email:</strong> contact@company.com</p>
      </div>
    </div>
  </div>
</section>
{/* Footer Section */}
<footer className="footer bg-dark text-white py-4">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h5>Company</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white">About Us</a></li>
          <li><a href="#" className="text-white">Careers</a></li>
          <li><a href="#" className="text-white">Services</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white">Privacy Policy</a></li>
          <li><a href="#" className="text-white">Terms of Service</a></li>
          <li><a href="#" className="text-white">FAQs</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5>Contact</h5>
        <ul className="list-unstyled">
          <li>Email: <a href="mailto:contact@company.com" className="text-white">contact@company.com</a></li>
          <li>Phone: <a href="tel:+15551234567" className="text-white">+1 (555) 123-4567</a></li>
          <li>Address: 123 Business Ave, City, Country</li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="text-center">
      <p>&copy; 2025 Company Name. All Rights Reserved.</p>
    </div>
  </div>
</footer>


    </div>
  );
}

export default App;
