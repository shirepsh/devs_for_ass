import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getAllAssAsync, selectAssociation } from '../../slicers/developer/Association/associationSlice';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';
import './Association.css'

export const Association = () => {

  const ass = useAppSelector(selectAssociation)
  const dispatch = useAppDispatch()
  useEffect(() => { dispatch(getAllAssAsync()) }, [dispatch])


  return (
    <div><h4 style={{color:"wheat"}}>our Association:</h4>
      <Row lg={4}>
      {ass.map((ass: any, index: any) =>
        <div key={index}>

          <div className="container mx-auto mt-4">
            <div className="row">
              <div className="col-md-4">
                <div className="card" style={{width: "15rem"}}>
                  <img style={{height:"250px"}} src={"http://127.0.0.1:8000" + ass.profile_picture} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                      <h5 className="card-title">{ass.association_name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{ass.location} {ass.email_from_reg}</h6>
                      <p className="card-text">{ass.description}</p>
                    </div>
                </div>
              </div>
            </div>
            </div>
            </div>)}
            </Row>
            <br/><br/><br/><br/><br/><br/><br/>
          </div>)

          }