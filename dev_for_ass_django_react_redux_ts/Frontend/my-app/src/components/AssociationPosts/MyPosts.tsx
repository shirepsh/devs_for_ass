import React, { useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectLoggedAss, selectToken } from '../../slicers/developer/Association/associationSlice'
import { selectIsLogged } from '../../slicers/developer/developerSlice'
import { delPostAsync, getMyAssPostsAsync, selectLoggedAssPosts } from '../../slicers/developer/posts/postsSlice'
import { Col, Row } from 'react-bootstrap';

function MyPosts() {

    const dispatch = useAppDispatch()

    const tempAssPosts = useAppSelector(selectLoggedAssPosts)
    const token = useAppSelector(selectToken)

    const isLogged = useAppSelector(selectIsLogged)

    // const doSome = () => {dispatch(getMyAssPostsAsync(token))}

    // useEffect(() => {dispatch(getMyAssPostsAsync(token)), console.log("first")} , [dispatch, token])

    useEffect(() => {
      console.log("tempp", tempAssPosts);
      dispatch(getMyAssPostsAsync(token));
    }, [!tempAssPosts, token])
    
    

    return (
        <div>

            <h4> my posts: </h4> <br />

            <Link to="/AddPost">
                <button className="btn btn-primary">create new post</button>
            </Link>

        <Row lg={4}>
        {tempAssPosts.map((onePost: any, index: any) =>
          <div key={index}>
            <div>
              <Col className="d-flex">   
          <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title> {onePost.association_name}</Card.Title>
            <Card.Text>
            {onePost.post_title}
            {onePost.post_description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{onePost.contact_phone_number}</ListGroup.Item>
            <ListGroup.Item><Card.Img variant="top" src={"http://127.0.0.1:8000" + onePost.photo} alt="" /> </ListGroup.Item>
            <ListGroup.Item><button onClick={() => dispatch(delPostAsync({token, id: onePost.id}))}>delete this post</button></ListGroup.Item>
            
          </ListGroup>
        </Card> 
        </Col> 
        </div>

       </div> )} 
       </Row>

       </div>) 
       }


export default MyPosts


// {tempAssPosts.email_from_reg ?  <div>{tempAssPosts.profile_picture} - {tempAssPosts.ass_name} - {tempAssPosts.post_title}</div> : "you dont have any posts"}
           

// {tempAssPosts.email_from_reg && <button onClick={() => dispatch(delPostAsync(token))}>delete this post</button>}
