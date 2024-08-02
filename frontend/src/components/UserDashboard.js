import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserDashboard.css';
import { useNotifications } from './userNotifications';

const UserDashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showApplications, setShowApplications] = useState(false);
  const navigate = useNavigate();
  const { notifications, removeNotification } = useNotifications();

  const applications = [
    {
      id: 1,
      jobTitle: 'Software Engineer',
      companyName: 'Google',
      status: 'Pending',
      applicationDate: '2024-07-01',
    },
    {
      id: 2,
      jobTitle: 'Data Scientist',
      companyName: 'Facebook',
      status: 'Accepted',
      applicationDate: '2024-06-15',
    },
    {
      id: 3,
      jobTitle: 'Web Developer',
      companyName: 'Amazon',
      status: 'Rejected',
      applicationDate: '2024-06-20',
    },
  ];

  const handleViewNotifications = () => {
    setShowNotifications(true);
    setShowApplications(false);
  };

  const handleViewProfile = () => {
    setShowNotifications(false);
    setShowApplications(false);
    navigate('/profile');
  };

  const handleViewApplications = () => {
    setShowNotifications(false);
    setShowApplications(true);
  };

  const handleDelete = (id) => {
    removeNotification(id);
  };

  return (
    <div className="dashboard-container">
      {/* Dashboard Sidebar */}
      <div className="sidebar">
        <h2>Dashboard</h2>
        <button className="btn btn-primary" onClick={handleViewNotifications}>
          View Notifications
        </button>
        <button className="btn btn-primary" onClick={handleViewProfile}>
          View Profile
        </button>
        <button className="btn btn-primary" onClick={handleViewApplications}>
          View Applications
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {showNotifications && (
          <>
            <h2>Notifications</h2>
            {notifications.length === 0 ? (
              <p>No notifications available.</p>
            ) : (
              <ul>
                {notifications.map((notification) => (
                  <li key={notification.id}>
                    <div>
                      <p>{notification.message}</p>
                      <p><strong>Date:</strong> {notification.date}</p>
                      <p><strong>Time:</strong> {notification.time}</p>
                    </div>
                    <button
                      onClick={() => handleDelete(notification.id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        {showApplications && (
          <>
            <h2>Applications</h2>
            {applications.length === 0 ? (
              <p>No applications available.</p>
            ) : (
              <ul>
                {applications.map((application) => (
                  <li key={application.id}>
                    <div>
                      <p><strong>Job Title:</strong> {application.jobTitle}</p>
                      <p><strong>Company:</strong> {application.companyName}</p>
                      <p><strong>Status:</strong> {application.status}</p>
                      <p><strong>Application Date:</strong> {application.applicationDate}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
