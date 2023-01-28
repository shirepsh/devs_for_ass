import React, { useEffect } from 'react';
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
      
      {devs.map((dev : any, index:any) => 
      <div key={index}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"http://127.0.0.1:8000" + dev.profile_picture} alt="" />
      <Card.Body>
        <Card.Title> {dev.full_name}</Card.Title>
        <Card.Text>
        {dev.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{dev.email_from_reg} , {dev.contact_phone_number}</ListGroup.Item>
        <ListGroup.Item> years of experience : {dev.years_of_experience}</ListGroup.Item>
        <ListGroup.Item><Card.Link href={dev.linkdin_url}>Linkdin</Card.Link><Card.Link href={dev.GitHub_url}>GitHub</Card.Link></ListGroup.Item>
      </ListGroup>
    </Card>
        
        </div>)}
    </div>
  );
}