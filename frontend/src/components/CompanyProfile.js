import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

export const companies = [
  {
    name: 'Google',
    description: 'A global leader in internet services and products, specializing in search, online advertising, cloud computing, and software.',
    location: 'Mountain View, CA',
    website: 'https://google.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    name: 'Meta',
    description: 'An industry-leading social media and technology company, focused on connecting people through its suite of apps and services.',
    location: 'Menlo Park, CA',
    website: 'https://meta.com',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPm5lkKSipay2G3uA5kEqC8IcBjS8jEMYnBg&s',
  },
  {
    name: 'Microsoft',
    description: 'A multinational technology corporation renowned for its software products, consumer electronics, and personal computers.',
    location: 'Redmond, WA',
    website: 'https://microsoft.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  },
  {
    name: 'IBM',
    description: 'A global leader in technology and consulting services, providing innovative solutions for business and IT challenges.',
    location: 'Armonk, NY',
    website: 'https://ibm.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  },
  {
    name: 'Zoho',
    description: 'A comprehensive provider of online productivity tools and software applications, serving businesses of all sizes.',
    location: 'Chennai, India',
    website: 'https://zoho.com',
    logo: 'https://www.zohowebstatic.com/sites/zweb/images/ogimage/zoho-logo.png',
  },
  {
    name: 'Cisco',
    description: 'A worldwide leader in IT, networking, and cybersecurity solutions, enabling businesses to securely connect and thrive.',
    location: 'San Jose, CA',
    website: 'https://cisco.com',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZRAzpFxQoZYyrNnNM2TKFwDGmXT5dldgZQ&s',
  },
];

const CompanyCard = ({ company }) => (
  <Card style={{ marginBottom: '20px' }}>
    <CardMedia
      component="img"
      height="100" // Reduced height
      image={company.logo}
      alt={`${company.name} logo`}
      style={{ objectFit: 'contain' }} // Ensure the logo scales properly
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
      <Typography variant="body2" color="text.secondary">
        <Link to={`/company/${company.name.toLowerCase()}`}>More Details</Link>
      </Typography>
    </CardContent>
  </Card>
);

const CompanyProfile = () => (
  <Container style={{ marginTop: '20px' }}>
    <Grid container spacing={4}>
      {companies.map((company, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CompanyCard company={company} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default CompanyProfile;
