import React, { useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getMyAssProfileAsync, selectLoggedAss, selectToken } from '../../slicers/developer/Association/associationSlice'
import { deletePost, delPostAsync, getMyAssPostsAsync, selectLoggedAssPosts } from '../../slicers/developer/posts/postsSlice'
import { Col, Row } from 'react-bootstrap';
import { set } from 'immer/dist/internal'
import { selectIsLogged } from '../../slicers/developer/developerSlice'



function MyPosts() {

  const tempAss = useAppSelector(selectLoggedAss)

  const dispatch = useAppDispatch()

  const isLogged = useAppSelector(selectIsLogged)

  const tempAssPosts = useAppSelector(selectLoggedAssPosts)
  const token = useAppSelector(selectToken)

  // in order to update the details of the current association && 
  // if there are associton profile he will recive the right my post page 
  useEffect(() => {
    if (isLogged) {
      dispatch(getMyAssProfileAsync(token))
    }
  }, [])

  // in order to bring the update data after delete one post
  useEffect(() => {
    if (isLogged) {
      dispatch(getMyAssPostsAsync(token))
    }
  }, [])

  // we create this func in order to call her in the onClick event, in this way we can do 2 actions onces.
  const handelDel = (token: string, id: number) => {

    dispatch(delPostAsync({ token, id }))
    dispatch(deletePost(id))
  }


  // check if association is excist
  if (tempAss.association_name) {
    return (
      <div>
        <h4 style={{ color: "wheat" }}> my posts: </h4> <br />

        <Link to="/AddPost">
          <button className="btn btn-primary">create new post</button>
        </Link> <br /><br />

        <Row lg={4}>
          {tempAssPosts.map((onePost: any, index: any) =>
            <div key={index}>

              <div className="container mx-auto mt-4">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card" style={{ width: "15rem" }}>
                      <h5 style={{ color: "wheat" }} className="card-title"> {onePost.association_name}</h5>
                      <h6 className="card-title"> {onePost.post_title}</h6>
                      <div className="card-body">
                        <p className="card-text">  {onePost.post_description}</p>
                        <h6 className="card-subtitle mb-2 text-muted">{onePost.contact_phone_number}</h6>
                        <img src={"http://127.0.0.1:8000" + onePost.photo} className="card-img-top" alt="..."></img> <br /><br />
                        <button className="btn btn-danger" onClick={() => handelDel(token, onePost.id)}>delete this post</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </Row>


        <br /><br /><br /><br /><br /><br /><br />
      </div>)
  }
  else return (
    <div><h6 style={{ color: "wheat" }}> association not found, <br/><br/> you need to create a profile</h6> <br/><br/>
      <Link to="/addAss">
        <button className="btn btn-primary">to create a profile</button>
      </Link></div>
  )
}


export default MyPosts


  // {tempAssPosts.email_from_reg ?  <div>{tempAssPosts.profile_picture} - {tempAssPosts.ass_name} - {tempAssPosts.post_title}</div> : "you dont have any posts"}


  // {tempAssPosts.email_from_reg && <button onClick={() => dispatch(delPostAsync(token))}>delete this post</button>}
