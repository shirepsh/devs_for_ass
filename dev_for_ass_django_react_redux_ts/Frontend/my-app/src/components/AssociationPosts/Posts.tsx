import React, { useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectPost, getAllPostsAsync } from '../../slicers/developer/posts/postsSlice'
import { Col, Row } from 'react-bootstrap';
import { ImageSERVER } from '../../env';

function Posts() {

  const posts = useAppSelector(selectPost)
  const dispatch = useAppDispatch()
  useEffect(() => { dispatch(getAllPostsAsync()) }, [dispatch])


  return (
    <div><h4 style={{ color: "wheat" }}>All posts:</h4>


      <Row lg={4}>
        {posts.map((onePost: any, index: any) =>
          <div key={index}>

            <div className="container mx-auto mt-4">
              <div className="row">
                <div className="col-md-4">
                  <div className="card" style={{ width: "15rem" }}>
                  <h5 style={{color:"wheat"}} className="card-title"> {onePost.association_name}</h5> 
                  <h6 className="card-title"> {onePost.post_title}</h6> 
                    <div className="card-body">
                      <p className="card-text">  {onePost.post_description}</p> 
                      <h6 className="card-subtitle mb-2 text-muted">{onePost.contact_phone_number}</h6>
                      <img  src={ImageSERVER + onePost.photo}  className="card-img-top" alt="..."></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
      </Row>
      <br /><br /><br /><br /><br /><br />
    </div>)
}
export default Posts






  