import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const companyData = {
    google: {
      name: 'Google',
      description: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products.',
      jobOffers: ['Software Engineer', 'Product Manager', 'Data Scientist'],
      salary: '$120,000 - $200,000',
      requirements: 'Bachelor\'s degree in Computer Science, relevant work experience',
      skills: ['Python', 'Java', 'Machine Learning', 'Cloud Computing'],
      location: 'Mountain View, CA'
    },
    microsoft: {
      name: 'Microsoft',
      description: 'Microsoft Corporation is an American multinational technology company that produces computer software, consumer electronics, and personal computers.',
      jobOffers: ['Software Engineer', 'System Analyst', 'Cloud Engineer'],
      salary: '$110,000 - $190,000',
      requirements: 'Bachelor\'s degree in relevant field, experience in software development',
      skills: ['C#', '.NET', 'Azure', 'DevOps'],
      location: 'Redmond, WA'
    },
    wipro: {
      name: 'Wipro',
      description: 'Wipro Limited is an Indian multinational corporation that provides information technology, consulting, and business process services.',
      jobOffers: ['IT Consultant', 'Software Developer', 'Business Analyst'],
      salary: '$60,000 - $100,000',
      requirements: 'Bachelor\'s degree, relevant work experience',
      skills: ['Java', 'SAP', 'Oracle', 'Project Management'],
      location: 'Bengaluru, India'
    },
    infosys: {
      name: 'Infosys',
      description: 'Infosys Limited is an Indian multinational corporation that provides business consulting, information technology, and outsourcing services.',
      jobOffers: ['Software Engineer', 'Consultant', 'Systems Engineer'],
      salary: '$70,000 - $120,000',
      requirements: 'Bachelor\'s degree in relevant field, experience in IT services',
      skills: ['Java', 'Python', 'Cloud Computing', 'Data Analytics'],
      location: 'Bengaluru, India'
    },
    cisco: {
      name: 'Cisco',
      description: 'Cisco Systems, Inc. is an American multinational technology conglomerate that develops, manufactures, and sells networking hardware, software, telecommunications equipment, and other high-technology services and products.',
      jobOffers: ['Network Engineer', 'Software Engineer', 'Technical Support Engineer'],
      salary: '$90,000 - $150,000',
      requirements: 'Bachelor\'s degree in relevant field, experience in networking',
      skills: ['Networking', 'Python', 'Cloud Computing', 'Cybersecurity'],
      location: 'San Jose, CA'
    },
    pwc: {
      name: 'PwC',
      description: 'PricewaterhouseCoopers (PwC) is a multinational professional services network of firms, providing audit and assurance, consulting, and tax services.',
      jobOffers: ['Consultant', 'Audit Associate', 'Tax Advisor'],
      salary: '$80,000 - $140,000',
      requirements: 'Bachelor\'s degree in Accounting or Finance, relevant experience',
      skills: ['Accounting', 'Finance', 'Audit', 'Taxation'],
      location: 'London, UK'
    },
    goldmanSachs: {
      name: 'Goldman Sachs',
      description: 'Goldman Sachs Group, Inc. is an American multinational investment bank and financial services company.',
      jobOffers: ['Investment Banker', 'Financial Analyst', 'Quantitative Analyst'],
      salary: '$100,000 - $200,000',
      requirements: 'Bachelor\'s degree in Finance or related field, relevant experience',
      skills: ['Finance', 'Investment Banking', 'Quantitative Analysis', 'Data Analysis'],
      location: 'New York, NY'
    },
    meta: {
      name: 'Meta',
      description: 'Meta Platforms, Inc. (formerly Facebook) is an American multinational technology company known for its social media platforms and virtual reality products.',
      jobOffers: ['Software Engineer', 'Product Manager', 'Data Scientist'],
      salary: '$120,000 - $210,000',
      requirements: 'Bachelor\'s degree in Computer Science, experience in tech industry',
      skills: ['JavaScript', 'React', 'Machine Learning', 'VR/AR'],
      location: 'Menlo Park, CA'
    },
    tcs: {
      name: 'TCS',
      description: 'Tata Consultancy Services (TCS) is an Indian multinational information technology (IT) services and consulting company.',
      jobOffers: ['IT Consultant', 'Software Engineer', 'Business Analyst'],
      salary: '$70,000 - $120,000',
      requirements: 'Bachelor\'s degree in Computer Science or related field, relevant experience',
      skills: ['Java', 'ERP', 'Business Analysis', 'Project Management'],
      location: 'Mumbai, India'
    },
    lnt: {
      name: 'L&T',
      description: 'Larsen & Toubro (L&T) is an Indian multinational conglomerate with business interests in engineering, construction, manufacturing, technology, and financial services.',
      jobOffers: ['Project Manager', 'Civil Engineer', 'Mechanical Engineer'],
      salary: '$80,000 - $130,000',
      requirements: 'Bachelor\'s degree in Engineering, relevant project experience',
      skills: ['Project Management', 'Engineering', 'Construction', 'Process Optimization'],
      location: 'Mumbai, India'
    },
    dell: {
      name: 'Dell',
      description: 'Dell Technologies is an American multinational technology company that develops, sells, repairs, and supports computers and related products and services.',
      jobOffers: ['Software Developer', 'Technical Support', 'Product Manager'],
      salary: '$90,000 - $160,000',
      requirements: 'Bachelor\'s degree in relevant field, experience in tech industry',
      skills: ['Python', 'Java', 'Customer Support', 'Product Management'],
      location: 'Round Rock, TX'
    },
    deloitte: {
      name: 'Deloitte',
      description: 'Deloitte Touche Tohmatsu Limited, commonly referred to as Deloitte, is a multinational professional services network.',
      jobOffers: ['Consultant', 'Audit Manager', 'Tax Consultant'],
      salary: '$80,000 - $150,000',
      requirements: 'Bachelor\'s degree in relevant field, experience in consulting',
      skills: ['Consulting', 'Accounting', 'Taxation', 'Audit'],
      location: 'New York, NY'
    },
  };
  

const CompanyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const company = companyData[id];
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    qualification: '',
    skills: '',
    experience: '',
    resume: null
  });

  const handleApply = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-success">{company.name}</h1>
          <p className="card-text"><strong>Description:</strong> {company.description}</p>
          <p className="card-text"><strong>Job Offers:</strong> {company.jobOffers.join(', ')}</p>
          <p className="card-text"><strong>Salary Package:</strong> {company.salary}</p>
          <p className="card-text"><strong>Requirements:</strong> {company.requirements}</p>
          <p className="card-text"><strong>Skills:</strong> {company.skills.join(', ')}</p>
          <p className="card-text"><strong>Location:</strong> {company.location}</p>
          {!showForm && !formSubmitted && (
            <button className="btn btn-success btn-lg" onClick={handleApply}>Apply for Job</button>
          )}
          {showForm && !formSubmitted && (
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="qualification" className="form-label">Qualification</label>
                <input
                  type="text"
                  className="form-control"
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="skills" className="form-label">Skills</label>
                <input
                  type="text"
                  className="form-control"
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="experience" className="form-label">Experience</label>
                <input
                  type="text"
                  className="form-control"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="resume" className="form-label">Upload Resume</label>
                <input
                  type="file"
                  className="form-control"
                  id="resume"
                  name="resume"
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success btn-lg" style={{ marginBottom: '20px' }}>Submit Application</button>

            </form>
          )}
          {formSubmitted && (
            <div className="alert alert-success mt-4" role="alert">
              Successfully applied for the job!
            </div>
          )}
          <button className="btn btn-secondary btn-lg" onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;