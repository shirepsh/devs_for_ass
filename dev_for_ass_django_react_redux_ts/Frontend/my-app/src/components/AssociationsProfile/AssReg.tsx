// in this component you will do REGISTER

import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { AssRegAsync, selectIsAssLogged, selectToken } from "../../slicers/developer/Association/associationSlice";
import { loginAsync } from "../../slicers/developer/developerSlice";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AssReg = () => {

    const dispatch = useAppDispatch()
    const IsAssLogged = useAppSelector(selectIsAssLogged)
    const token = useAppSelector(selectToken)
    const notify = () => toast("you need to fill the fields!")

    const navigate = useNavigate()

    // use state for user details for register
    const [username, setuname] = useState<string | null>(null)
    const [password, setpassword] = useState<string | null>(null)
    const [email, setemail] = useState<string | null>(null)

    useEffect(() => {
        if (IsAssLogged) {
            if (token === ''  && username && password) {
                dispatch(loginAsync({ username, password }))
                console.log(token)
            }
            navigate('/homePage')
        }
    }, [IsAssLogged, token, navigate])
    

    return (
        <div> 
            <h4 style={{textAlign: "center" , color: "violet"}}> dont have an user? sign up:</h4>
            <hr/>
            User name: <input onChange={(e) => setuname(e.target.value)} required />
            Password: <input type="password" onChange={(e) => setpassword(e.target.value)} required />
            email: <input onChange={(e) => setemail(e.target.value)} required/>

            <button onClick={() => {
                if (username != null && password != null && email != null) {
                dispatch(AssRegAsync({username, password, email}))
            }
            else {notify ()}
            }}>Register</button>
             <ToastContainer/>
             <hr></hr>
             
            {IsAssLogged && 'thank you for sign up association' + username}
        </div>
    )
}

export default AssReg