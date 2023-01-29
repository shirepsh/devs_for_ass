// in this component you will do REGISTER

import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { AssRegAsync, selectIsAssLogged, selectToken } from "../../slicers/developer/Association/associationSlice";
import { loginAsync } from "../../slicers/developer/developerSlice";

const AssReg = () => {

    const dispatch = useAppDispatch()
    const IsAssLogged = useAppSelector(selectIsAssLogged)
    const token = useAppSelector(selectToken)

    const navigate = useNavigate()

    // use state for user details for register
    const [username, setuname] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("a@a.com")

    useEffect(() => {
        if (IsAssLogged) {
            if (token === '') {
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
            User name: <input onChange={(e) => setuname(e.target.value)} />
            Password: <input type="password" onChange={(e) => setpassword(e.target.value)} />
            email: <input onChange={(e) => setemail(e.target.value)} />
            <button onClick={() => dispatch(AssRegAsync({username, password, email}))}>Register</button><hr></hr>
            {IsAssLogged && 'thank you for sign up association' + username}
        </div>
    )
}

export default AssReg