import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { delDevAsync, selectToken, selectIsLogged } from '../../slicers/developer/developerSlice'
import { MDBContainer } from "mdb-react-ui-kit";
import { getMyAssProfileAsync, selectLoggedAss } from '../../slicers/developer/Association/associationSlice';


function AssPersonalProfile() {

    const dispatch = useAppDispatch()

    const tempAss = useAppSelector(selectLoggedAss)
    const token = useAppSelector(selectToken)
    const isLogged = useAppSelector(selectIsLogged)
    
    useEffect(() => { dispatch(getMyAssProfileAsync(token)) }, [dispatch, token])

    // useEffect(() => {
    //     if(tempDev.email_from_reg === ""){dispatch(())}
    //   }, [])

    return (
        <div>
            <h4> Personal Profile </h4> <br />

            {isLogged ?
            
                <div>
                    <MDBContainer className="my-5 d-flex flex-column justify-content-center align-items-center">
                        <img
                            src={"http://127.0.0.1:8000" + tempAss.profile_picture}
                            className="rounded-circle mb-3"
                            style={{ width: "150px" }}
                            alt="Avatar"
                        />
                    </MDBContainer>
           
                {tempAss.association_name} - {tempAss.email_from_reg} - {tempAss.contact_phone_number}</div>
                : "you need to create your profile"}


            {tempAss.email_from_reg && <button onClick={() => dispatch(delDevAsync(token))}>delete this profile</button>}


            {tempAss.email_from_reg ? <Link to="/editDevProfile">
                <button className="btn btn-primary">edit your profile</button>
            </Link> :
                <Link to="/addDev">
                    <button className="btn btn-primary">create your profile</button>
                </Link>} 


        </div>
    )
}





export default AssPersonalProfile