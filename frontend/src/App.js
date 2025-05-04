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


    </div>
  );
}

export default App;
