import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Apply = () => {
  const { companyId } = useParams();
  const [resume, setResume] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    experience: '',
    coverLetter: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // You can send the formData and resume to your backend server
    console.log('Form submitted:', formData, resume);
    setShowModal(true); // Show the success modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Apply for a Job at {companyId}</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="skills" className="form-label">Skills</label>
            <input
              type="text"
              className="form-control"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="experience" className="form-label">Experience</label>
          <textarea
            className="form-control"
            id="experience"
            name="experience"
            rows="3"
            value={formData.experience}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="coverLetter" className="form-label">Cover Letter</label>
          <textarea
            className="form-control"
            id="coverLetter"
            name="coverLetter"
            rows="3"
            value={formData.coverLetter}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="resume" className="form-label">Upload Resume (doc, docx)</label>
          <input
            type="file"
            className="form-control"
            id="resume"
            name="resume"
            accept=".doc,.docx"
            onChange={handleResumeChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit Application</button>
      </form>

      {/* Bootstrap Modal */}
      <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ backgroundColor: showModal ? 'rgba(0,0,0,0.5)' : 'transparent' }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Submission Successful</h5>
              <button type="button" className="btn-close" onClick={handleCloseModal}></button>
            </div>
            <div className="modal-body">
              <p>Your application has been submitted successfully!</p>
            </div>
            <div className="modal-footer">
              <Link to="/" className="btn btn-secondary">Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
