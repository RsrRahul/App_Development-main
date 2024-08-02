import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { companies } from './CompanyProfile';

const Detail = () => {
  const { name } = useParams();
  const company = companies.find(c => c.name.toLowerCase() === name.toLowerCase());

  if (!company) {
    return <Typography variant="h5">Company not found</Typography>;
  }

  return (
    <Container style={{ marginTop: '20px' }}>
      <Card>
        <CardMedia
          component="img"
          height="80" // Reduced height
          image={company.logo}
          alt={`${company.name} logo`}
          style={{ objectFit: 'contain', padding: '10px' }} // Added custom styles
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {company.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {company.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Location: {company.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Website: <a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Detail;
