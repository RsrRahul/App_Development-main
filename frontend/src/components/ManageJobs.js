import React, { useState } from 'react';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';

const initialJobs = [
  { id: 1, title: 'Software Engineer', department: 'Engineering', location: 'New York, NY' },
  { id: 2, title: 'Product Manager', department: 'Product', location: 'San Francisco, CA' },
  { id: 3, title: 'Designer', department: 'Design', location: 'Austin, TX' },
];

const ManageJobs = () => {
  const [jobs, setJobs] = useState(initialJobs);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      setJobs(jobs.filter(job => job.id !== id));
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="my-4">Manage Jobs</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Department</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => (
                <tr key={job.id}>
                  <td>{job.title}</td>
                  <td>{job.department}</td>
                  <td>{job.location}</td>
                  <td>
                    <Link to={`/edit-job/${job.id}`}>
                      <Button variant="warning" className="me-2">
                        Edit
                      </Button>
                    </Link>
                    <Button variant="danger" onClick={() => handleDelete(job.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageJobs;
