import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const postData = (data) => {
    axios
      .post('http://localhost:8000/contact', data)
      .then(() => {
        alert('Data added successfully');
        reset();
      })
      .catch((error) => {
        alert('Error adding data');
        console.error(error);
      });
  };


  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)',
    padding: '20px',
    color: '#ffffff'
  };

  return (
    <div
      className="container-fluid min-vh-100 py-5"
      style={{ backgroundColor: '#0F172A', color: '#ffffff' }}
    >
      <div className="container">
        <div className="row g-5">

          <div className="col-lg-4">

            <div className="card mb-4" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">Email</h5>
                <p className="card-text">parikshitkamate002@gmail.com</p>
                <a
                  href="mailto:parikshitkamate002@gmail.com"
                  className="btn btn-primary"
                >
                  Send a mail
                </a>
              </div>
            </div>


            <div className="card mt-5" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">WhatsApp</h5>
                <p className="card-text">+91 9110656272</p>
                <a
                  href="https://wa.me/9110656272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Send a message
                </a>
              </div>
            </div>
          </div>


          <div className="col-lg-8">
            <div className="card" style={cardStyle}>
              <div className="card-body">

                <form onSubmit={handleSubmit(postData)}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your full name"
                      {...register('fullname')}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Your Mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      {...register('email')}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Enter your message"
                      {...register('message')}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
