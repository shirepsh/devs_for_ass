import React, { useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getMyAssProfileAsync, selectLoggedAss, selectToken } from '../../slicers/developer/Association/associationSlice'
import { deletePost, delPostAsync, getMyAssPostsAsync, selectLoggedAssPosts } from '../../slicers/developer/posts/postsSlice'
import { Col, Row } from 'react-bootstrap';
import { set } from 'immer/dist/internal'



function MyPosts() {

    const tempAss = useAppSelector(selectLoggedAss)

    const dispatch = useAppDispatch()

    const tempAssPosts = useAppSelector(selectLoggedAssPosts)
    const token = useAppSelector(selectToken)

    // in order to update the details of the current association && 
    // if there are associton profile he will recive the right my post page 
    useEffect(() => { dispatch(getMyAssProfileAsync(token)) }, [])

    // in order to bring the update data after delete one post
    useEffect(() => {
      dispatch(getMyAssPostsAsync(token));
    }, [])

    // we create this func in order to call her in the onClick event, in this way we can do 2 actions onces.
    const handelDel = (token:string , id:number) => {

      dispatch(delPostAsync({token, id}))
      dispatch(deletePost(id))}
  
    
    // check if association is excist
    if (tempAss.association_name){
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
            <ListGroup.Item><button className="btn btn-danger" onClick={() => handelDel(token , onePost.id)}>delete this post</button></ListGroup.Item>
            
          </ListGroup>
        </Card> 
        </Col> 
        </div>

       </div> )} 
       </Row>

       </div>) 
       } 
       else return(
        <h6> association not found, <br/><br/> you need to create a profile</h6>
       )
      }


export default MyPosts


// {tempAssPosts.email_from_reg ?  <div>{tempAssPosts.profile_picture} - {tempAssPosts.ass_name} - {tempAssPosts.post_title}</div> : "you dont have any posts"}
           

// {tempAssPosts.email_from_reg && <button onClick={() => dispatch(delPostAsync(token))}>delete this post</button>}