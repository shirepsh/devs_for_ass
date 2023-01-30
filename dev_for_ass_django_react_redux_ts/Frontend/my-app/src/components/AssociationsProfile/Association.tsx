import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getAllAssAsync, selectAssociation } from '../../slicers/developer/Association/associationSlice';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';

export const Association = () => {

  const ass = useAppSelector(selectAssociation)
  const dispatch = useAppDispatch()
  useEffect(() => { dispatch(getAllAssAsync()) }, [dispatch])


  return (
    <div><h4>our Association:</h4> <br/>
      {/* we have {ass.length} great Association  */}

      <Row lg={4}>
      {ass.map((ass: any, index: any) =>
        <div key={index}>
          <div >
          <Col className="d-flex">   
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={"http://127.0.0.1:8000" + ass.profile_picture} alt="" />
        <Card.Body>
          <Card.Title style={{color:'blue'}}> {ass.association_name}</Card.Title>
          <Card.Text>
          {ass.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{ass.email_from_reg} <br/> </ListGroup.Item>
          <ListGroup.Item>{ass.location} </ListGroup.Item>
          
        </ListGroup>
      </Card>
      </Col>
      </div>
          
          </div>)}

          </Row>
        </div>)
}