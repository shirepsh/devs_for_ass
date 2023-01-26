import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { delAssAsync, getMyAssProfileAsync, selectLoggedAss, selectToken } from '../../slicers/developer/Association/associationSlice';

function AssPersonalProfile() {

    
    const dispatch = useAppDispatch()

    const tempAss = useAppSelector(selectLoggedAss)
    const token = useAppSelector(selectToken)


    useEffect(() => { dispatch(getMyAssProfileAsync(token)) }, [dispatch, token])
    

    return (
        <div>
            <h4> Personal Profile </h4> <br />

            {tempAss.email_from_reg ?  <div>{tempAss.association_name} - {tempAss.email_from_reg} - {tempAss.contact_info}</div> : "you need to create your profile"}
           

            {tempAss.email_from_reg && <button onClick={() => dispatch(delAssAsync(token))}>delete this profile</button>}


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