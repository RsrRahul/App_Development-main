import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Profile.css'; // Custom CSS for styling

const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [qualification, setQualification] = useState('');
  const [experience, setExperience] = useState('');
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log({
      username,
      email,
      qualification,
      experience,
      bio,
      skills,
      resume
    });
  };

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <Container className="profile-container">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="profile-header">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s" // Replace with actual logo
              alt="Profile Logo"
              className="profile-logo"
            />
            <h2>User Profile</h2>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formQualification">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formExperience">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBio">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Tell us about yourself"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formSkills">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formResume">
              <Form.Label>Resume (doc format)</Form.Label>
              <Form.Control
                type="file"
                accept=".doc,.docx"
                onChange={handleResumeUpload}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Profile
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
