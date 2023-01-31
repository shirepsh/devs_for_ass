import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { delDevAsync, selectLoggedDev, getMyDevProfileAsync, selectToken, selectIsLogged } from '../../slicers/developer/developerSlice'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage
} from 'mdb-react-ui-kit';


function DevPersonalProfile() {

  const dispatch = useAppDispatch()

  const tempDev = useAppSelector(selectLoggedDev)
  const token = useAppSelector(selectToken)
  const isLogged = useAppSelector(selectIsLogged)

  useEffect(() => { 
    dispatch(getMyDevProfileAsync(token)) 
  }, [dispatch, token])

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
                      src={"http://127.0.0.1:8000" + tempDev.profile_picture}
                      alt="profile picture"
                      className="rounded-circle"
                      style={{ width: '150px' }}
                      fluid />
                  </MDBCardBody>
                  <div className="d-flex justify-content-center mb-2">
                    {tempDev.linkdin_url ?
                      <a style={{ marginRight: '.5rem' }} href={tempDev.linkdin_url}>Linkdin</a> : ""}
                    {tempDev.GitHub_url ?
                      <a style={{ marginLeft: '.5rem' }} href={tempDev.GitHub_url}>GitHub</a> : ""}
                  </div>
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
                        <MDBCardText className="text-muted">{tempDev.full_name}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{tempDev.email_from_reg}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Phone</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{tempDev.contact_phone_number}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>description</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{tempDev.description}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>years of experience</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{tempDev.years_of_experience}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="9">
                        {tempDev.email_from_reg && <button className="btn btn-primary" style={{ margin: '20px' }}
                          onClick={() => dispatch(delDevAsync(token))}>delete this profile</button>}
                        {tempDev.email_from_reg ? <Link to="/editDevProfile">
                          <button className="btn btn-primary">edit your profile</button>
                        </Link> :
                          <Link to="/addDev">
                            <button className="btn btn-primary">create your profile</button>
                          </Link>}
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        : "you need to create your profile"}

      {/* {tempDev.email_from_reg && <button className="btn btn-primary" style={{margin: '20px'}} 
            onClick={() => dispatch(delDevAsync(token))}>delete this profile</button>} */}


      {/* {tempDev.email_from_reg ? <Link to="/editDevProfile">
                <button className="btn btn-primary">edit your profile</button>
            </Link> :
                <Link to="/addDev">
                    <button className="btn btn-primary">create your profile</button>
                </Link>}  */}
    </div>
  )
}

export default DevPersonalProfile
