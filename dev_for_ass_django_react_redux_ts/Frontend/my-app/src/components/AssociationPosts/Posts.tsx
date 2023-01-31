import React, { useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectPost, getAllPostsAsync } from '../../slicers/developer/posts/postsSlice'
import { Col, Row } from 'react-bootstrap';

function Posts() {

    const posts = useAppSelector(selectPost)
    const dispatch = useAppDispatch()
    useEffect(() => { dispatch(getAllPostsAsync()) }, [dispatch])
  
  
    return (
      <div><h4>All posts:</h4>
  
        <Row lg={4}>
        {posts.map((onePost: any, index: any) =>
          <div key={index}>
            <div >
            <Col className="d-flex">   
          <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title style={{color:'blue'}}> {onePost.association_name}</Card.Title>
            <Card.Text>
            {onePost.post_title} <br/>
            {onePost.post_description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{onePost.contact_phone_number}</ListGroup.Item>
            {/* <Card.Img variant="top" src={"http://127.0.0.1:8000" + onePost.photo} alt="" /> */}
            <ListGroup.Item><Card.Img style={{height:"150px", width:"200px"}} variant="top" src={"http://127.0.0.1:8000" + onePost.photo} alt="" /> </ListGroup.Item> 
            
          </ListGroup>
        </Card>
        </Col>
        </div>
            
            </div>)}
            </Row>
          </div>)
  }
export default Posts