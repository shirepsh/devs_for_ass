import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Header as="h1">About Us</Card.Header>
            <Card.Body>
              <Card.Text>
                We are a team of passionate individuals committed to delivering the best possible products and services.
                Our mission is to make a positive impact in people's lives through our work.
              </Card.Text>
              <Card.Text>
                We believe in innovation, collaboration, and continuous improvement.
                Join us on this journey to make a difference.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
