import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <Header />
    <div className="container mt-5">
      {/* Main Section */}
      <section className="text-center mb-5">
        <h2 className="display-4 text-primary">Welcome to MyApp!</h2>
        <p className="lead text-muted">Your one-stop solution for modern web development.</p>
      </section>

      {/* Cards Section */}
      <section className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card shadow-lg">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Feature 1" />
            <div className="card-body">
              <h5 className="card-title">Feature 1</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Feature 2" />
            <div className="card-body">
              <h5 className="card-title">Feature 2</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Feature 3" />
            <div className="card-body">
              <h5 className="card-title">Feature 3</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center my-5">
        <h3 className="text-secondary mb-3">Get Started with MyApp</h3>
        <p className="lead mb-4">Join thousands of satisfied users and start building something great today!</p>
        <Link to="/add_user" className="btn btn-primary btn-lg">Sign Up</Link>
      </section>
    </div>
  </>
);

export default Home;
