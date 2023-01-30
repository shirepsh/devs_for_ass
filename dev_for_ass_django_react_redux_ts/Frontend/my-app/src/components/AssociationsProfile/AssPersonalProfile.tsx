import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectToken, selectIsLogged } from '../../slicers/developer/developerSlice'
import { delAssAsync, getMyAssProfileAsync, selectLoggedAss } from '../../slicers/developer/Association/associationSlice';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
  } from 'mdb-react-ui-kit';

function AssPersonalProfile() {

    const dispatch = useAppDispatch()

    const tempAss = useAppSelector(selectLoggedAss)
    const token = useAppSelector(selectToken)
    const isLogged = useAppSelector(selectIsLogged)
    
    useEffect(() => { dispatch(getMyAssProfileAsync(token)) }, [dispatch, token])

    return (
        <div>
            <h4> Personal Profile </h4> <br />

    {isLogged ?
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={"http://127.0.0.1:8000" + tempAss.profile_picture}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                {/* <p className="text-muted mb-4">{tempAss.location}</p> */}
                <div className="d-flex justify-content-center mb-2">
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{tempAss.association_name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{tempAss.email_from_reg}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                {/* <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{tempAss.contact_phone_number}</MDBCardText>
                  </MDBCol>
                </MDBRow> */}
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>description</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{tempAss.description}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr /> 
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{tempAss.location}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

           
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    : "you need to create your profile"}
  
            {tempAss.email_from_reg && <button className="btn btn-primary" style={{margin: '20px'}} onClick={() => dispatch(delAssAsync(token))}>delete this profile</button>}


            {tempAss.email_from_reg ? <Link to="/editAssProfile">
                <button className="btn btn-primary">edit your profile</button>
            </Link> :
                <Link to="/addAss">
                    <button className="btn btn-primary">create your profile</button>
                </Link>} 
        </div>
    )
}

export default AssPersonalProfile


// 
            
// <div>
// <MDBContainer className="my-5 d-flex flex-column justify-content-center align-items-center">
//     <img
//         src={"http://127.0.0.1:8000" + tempAss.profile_picture}
//         className="rounded-circle mb-3"
//         style={{ width: "150px" }}
//         alt="Avatar"
//     />
// </MDBContainer>

// {tempAss.association_name} - {tempAss.email_from_reg} - {tempAss.contact_phone_number}</div>
// : "you need to create your profile"}