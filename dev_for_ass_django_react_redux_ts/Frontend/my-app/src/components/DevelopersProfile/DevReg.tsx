// in this component you will do REGISTER

import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { DevRegAsync, loginAsync, selectIsLogged, selectToken } from '../../slicers/developer/developerSlice'

const DevReg = () => {

    const dispatch = useAppDispatch()
    const isLogged = useAppSelector(selectIsLogged)
    const token = useAppSelector(selectToken)

    const navigate = useNavigate()

    // use state for user details for register
    const [username, setuname] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("a@a.com")

    useEffect(() => {
        if (isLogged) {
            if (token === '') {
                dispatch(loginAsync({ username, password }))
                console.log(token)
            }
            navigate('/homePage')
        }
    }, [isLogged, token, navigate])
    

    return (
        <div> 
            <h4 style={{textAlign: "center" , color: "violet"}}> dont have an user? sign up:</h4>
            <hr/>
            User name: <input onChange={(e) => setuname(e.target.value)} />
            Password: <input type="password" onChange={(e) => setpassword(e.target.value)} />
            email: <input onChange={(e) => setemail(e.target.value)} />
            <button onClick={() => dispatch(DevRegAsync({username, password, email}))}>Register</button><hr></hr>
            {isLogged && 'thank you for sign up' + username}
        </div>
    )
}

export default DevReg