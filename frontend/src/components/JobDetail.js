import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Button, Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const JobDetail = () => {
  const { jobId } = useParams(); // Get the job ID from URL parameters

  // Implement fetch job details and handle form submission here
  // For now, let's mock the job data
  const job = {
    id: jobId,
    title: 'Software Engineer',
    department: 'Engineering',
    location: 'New York, NY'
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Job updated');
    // Implement update functionality here
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="my-4">Edit Job</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" defaultValue={job.title} />
            </Form.Group>
            <Form.Group controlId="formDepartment">
              <Form.Label>Department</Form.Label>
              <Form.Control type="text" defaultValue={job.department} />
            </Form.Group>
            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" defaultValue={job.location} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default JobDetail;
