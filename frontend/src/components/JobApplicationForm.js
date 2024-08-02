import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './JobApplicationForm.css';

const JobApplicationForm = () => {
  const { companyId } = useParams();
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith('.doc')) {
      setResume(file);
    } else {
      alert('Please upload a .doc file');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resume) {
      alert('Application submitted!');
    } else {
      alert('Please upload your resume');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Job Application</h1>
      <form onSubmit={handleSubmit} className="job-application-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Upload Resume (.doc only)</label>
          <input type="file" className="form-control" id="resume" accept=".doc" onChange={handleFileChange} required />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit Application</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
