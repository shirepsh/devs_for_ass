import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/esm/Card';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectDevelopers, getAllDevAsync } from '../../slicers/developer/developerSlice'


export const Developer = () => {

  const devs = useAppSelector(selectDevelopers)
  
  const dispatch = useAppDispatch()

  useEffect(() => { dispatch(getAllDevAsync()) }, [dispatch])


  return (
    <div><h4>our developers:</h4>
      we have {devs.length} great developers 
      
      <Row lg={4}>
      {devs.map((dev: any, index: any) =>
        <div key={index}>
          <div >
          <Col className="d-flex">   
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{height:"230px"}} variant="top" src={"http://127.0.0.1:8000" + dev.profile_picture} alt="" />
        <Card.Body>
          <Card.Title style={{color:'blue'}}> {dev.full_name}</Card.Title>
          <Card.Text>
          {dev.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{dev.email_from_reg} <br/> {dev.contact_phone_number}</ListGroup.Item>
          <ListGroup.Item> years of experience : {dev.years_of_experience}</ListGroup.Item>
          <ListGroup.Item>{dev.location} </ListGroup.Item>
          
        </ListGroup>
      </Card>
      </Col>
      </div>
          
          </div>)}

          </Row>      
    </div>
  );
}




