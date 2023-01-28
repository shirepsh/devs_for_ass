import React, { useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectPost, getAllPostsAsync } from '../../slicers/developer/posts/postsSlice'

function Posts() {

    const posts = useAppSelector(selectPost)
    const dispatch = useAppDispatch()
    useEffect(() => { dispatch(getAllPostsAsync()) }, [dispatch])
  
  
    return (
      <div><h4>All posts:</h4>
  
        {posts.map((onePost: any, index: any) =>
          <div key={index}>
            <div className="row row-cols-1 row-cols-md-2 g-4">
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={"http://127.0.0.1:8000" + onePost.profile_picture} alt="" />
          <Card.Body>
            <Card.Title> {onePost.ass_name}</Card.Title>
            <Card.Text>
            {onePost.post_title}
            {onePost.post_description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{onePost.email_from_reg} , {onePost.contact_phone_number}</ListGroup.Item>
            <ListGroup.Item><Card.Img variant="top" src={"http://127.0.0.1:8000" + onePost.photo} alt="" /> </ListGroup.Item>
            
          </ListGroup>
        </Card>
        </div>
            
            </div>)}
          </div>)
  }
export default Posts