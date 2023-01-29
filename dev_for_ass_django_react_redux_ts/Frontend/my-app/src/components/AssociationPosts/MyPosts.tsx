import React, { useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectLoggedAss, selectToken } from '../../slicers/developer/Association/associationSlice'
import { selectIsLogged, selectTypeLogged } from '../../slicers/developer/developerSlice'
import { delPostAsync, getMyAssPostsAsync, selectLoggedAssPosts } from '../../slicers/developer/posts/postsSlice'

function MyPosts() {

    
    const dispatch = useAppDispatch()

    const tempAssPosts = useAppSelector(selectLoggedAssPosts)
    const token = useAppSelector(selectToken)

    const tempAss = useAppSelector(selectLoggedAss)

    useEffect(() => { dispatch(getMyAssPostsAsync(token)) }, [dispatch, token])
    

    return (
        <div>

            <h4> my posts: </h4> <br />

            <Link to="/AddPost">
                <button className="btn btn-primary">create new post</button>
            </Link>

        {tempAss.email_from_reg ?

        tempAssPosts.map((onePost: any, index: any) =>
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
            <ListGroup.Item><button onClick={() => dispatch(delPostAsync(token))}>delete this post</button></ListGroup.Item>
            
          </ListGroup>
        </Card>  
        </div>
       </div> ) : ""}

       </div>) }


export default MyPosts


// {tempAssPosts.email_from_reg ?  <div>{tempAssPosts.profile_picture} - {tempAssPosts.ass_name} - {tempAssPosts.post_title}</div> : "you dont have any posts"}
           

// {tempAssPosts.email_from_reg && <button onClick={() => dispatch(delPostAsync(token))}>delete this post</button>}
