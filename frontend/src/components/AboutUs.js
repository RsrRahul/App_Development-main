import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="section-title">How It Started</h2>
          <h1 className="main-title">Our Dream is Connect Job Seekers with Employers</h1>
          <p className="description">
          Welcome to Job CareerLaunch, your number one source for finding your dream job. We're dedicated to giving you the very best of job opportunities, with a focus on reliability, customized job alerts, and a user-friendly experience.

          Founded in 2004 has come a long way from its beginnings in India. When Founder first started out, their passion for helping job seekers drove them to quit their day job, do tons of research, and gave them the impetus to turn hard work and inspiration into a booming online job portal. We now serve customers all over [your location], and are thrilled to be a part of the fair trade wing of the job industry.
          
          Our mission is to bridge the gap between job seekers and employers, ensuring a perfect fit for both parties. We understand the challenges and frustrations of job searching, and we are here to make it easier for you.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_p2TR9aLlllmFUnOiY5b5qLfdgDIFw3png&s"
            alt="About Us"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row stats-row mt-5">
        <div className="col-md-3">
          <div className="card stats-card">
            <div className="card-body">
              <h5 className="card-title">9.5</h5>
              <p className="card-text">Overall Rating</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card stats-card">
            <div className="card-body">
              <h5 className="card-title">300+</h5>
              <p className="card-text">Intern-Offers</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card stats-card">
            <div className="card-body">
              <h5 className="card-title">500+</h5>
              <p className="card-text">Job Offers</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card stats-card">
            <div className="card-body">
              <h5 className="card-title">100K</h5>
              <p className="card-text">Trusted Employees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
