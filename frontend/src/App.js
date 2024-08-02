import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import UserDashboard from './components/UserDashboard';
import CompanyDetails from './components/CompanyDetails';
import JobPage from './components/JobPage';
import ApplyForm from './components/ApplyForm';
import AboutUs from './components/AboutUs';
import CompanyDashboard from './components/CompanyDashboard';
import ManageJobs from './components/ManageJobs';
import JobDetail from './components/JobDetail';
import CompanyProfile from './components/CompanyProfile';
import Detail from './components/Detail';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/company/:id" element={<CompanyDetails />} />
          <Route path="/jobs" element={<JobPage />} />
          <Route path="/apply/:company" element={<ApplyForm />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/company/:name" element={<Detail />} /> {/* For the company details page */}
          <Route path="/companydashboard" element={<CompanyDashboard />}>
            <Route path="manage-jobs" element={<ManageJobs />} />
            <Route path="edit-job/:jobId" element={<JobDetail />} />
            <Route path="companyprofile" element={<CompanyProfile />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
