import React from 'react';
import { Link } from 'react-router-dom';
import coder from '../Static/coder.jpeg';

const Home = () => {

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    padding: '10px'
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center text-light"
      style={{
        minHeight: '100vh',
        backgroundColor: '#0F172A',
        backgroundImage: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)'
      }}
    >
      <div className="row w-100 align-items-center justify-content-center px-3 px-md-5">

        <div className="col-md-6">
          <h4 className="mb-2">Hello I'm</h4>
          <h1 className="fw-bold">Parikshit Kamate</h1>
          <h3 className="text-info mb-3">Full Stack Web Developer</h3>
          <p className="lead mb-4">
            Bringing Ideas to real life products...
          </p>
          <div>

            <a
              href="/Syllabus/Parikshit_Kamate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary me-3"
            >
              Download Resume
            </a>


            <Link to="/contact">
              <button className="btn btn-outline-light">Let’s Talk</button>
            </Link>
          </div>
        </div>


        <div className="col-md-6 d-flex justify-content-center">
          <div style={glassStyle}>
            <img
              src={coder}
              height={500}
              width={500}
              alt="Developer Illustration"
              className="img-fluid"
              style={{ borderRadius: '10px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
