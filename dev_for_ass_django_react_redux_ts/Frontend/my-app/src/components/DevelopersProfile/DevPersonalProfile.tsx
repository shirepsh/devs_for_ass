import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { delDevAsync, selectLoggedDev, getMyDevProfileAsync, selectToken } from '../../slicers/developer/developerSlice'

function DevPersonalProfile() {

    
    const dispatch = useAppDispatch()

    const tempDev = useAppSelector(selectLoggedDev)
    const token = useAppSelector(selectToken)

    useEffect(() => { dispatch(getMyDevProfileAsync(token)) }, [dispatch, token])



    return (
        <div>
            <h4> Personal Profile </h4> <br />

            {tempDev.email_from_reg ?  <div>{tempDev.full_name} - {tempDev.email_from_reg} - {tempDev.contact_phone_number}</div> : "you need to create your profile"}
           

            {tempDev.email_from_reg && <button onClick={() => dispatch(delDevAsync(token))}>delete this profile</button>}


            {tempDev.email_from_reg ? <Link to="/editDevProfile">
                <button className="btn btn-primary">edit your profile</button>
            </Link> :
                <Link to="/addDev">
                    <button className="btn btn-primary">create your profile</button>
                </Link>}


        </div>
    )
}





export default DevPersonalProfile