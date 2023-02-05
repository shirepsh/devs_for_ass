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
                We are a team of passionate people who try to combine the different communities in Israel. <br/> Our mission is to impact people's lives through our work. <br/>

                We believe in innovation, collaboration and continuous improvement. Join us on the journey
                This is to make a difference. <br/>

                This site is designed to combine the developer community in Israel with the various associations
                Whether you are a junior who wants to gain experience or a senior who wants to contribute to the community
                Here you can do what you are good at!


              </Card.Text>
              <Card.Text>
                Many organizations that need help with one or another technological skill are advertised on this site. Help them reach their goal, write the work in the contract and do well :)
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
