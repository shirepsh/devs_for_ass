// in this component you will do REGISTER

import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { AssRegAsync, selectIsAssLogged, selectToken } from "../../slicers/developer/Association/associationSlice";
import { loginAsync } from "../../slicers/developer/developerSlice";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import '../Other/Form.css'

const AssReg = () => {

    const dispatch = useAppDispatch()
    const IsAssLogged = useAppSelector(selectIsAssLogged)
    const token = useAppSelector(selectToken)
    const notify = () => toast("you need to fill the fields!")

    // use state for user details for register
    const [username, setuname] = useState<string | null>(null)
    const [password, setpassword] = useState<string | null>(null)
    const [email, setemail] = useState<string | null>(null)

    // navigate between register to login
    const navigate = useNavigate()
    const [flagk, setFlagk] = useState(false)

    useEffect(() => {
        if (flagk) {navigate('/login')}
    }, [flagk])

    // useEffect(() => {
    //     if (IsAssLogged) {
    //         if (token === ''  && username && password) {
    //             dispatch(loginAsync({ username, password }))
    //         }
    //         navigate('/login')
    //     }
    // }, [IsAssLogged, token, navigate])


    // use effect to the user that logged in
    // useEffect(() => {
    //     if (flagk) {
    //         toast("thank you for sign up, " + `${username} 🎉`, {
    //             position: "top-center",
    //             autoClose: 2000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             rtl: false,
    //             pauseOnFocusLoss: true,
    //             draggable: true,
    //             pauseOnHover: true,
    //             theme: "light"
    //         });
    //     }
    // }, []);


    return (
        <div>
            <h4 style={{ textAlign: "center", color: "lightblue" }}> dont have an user? sign up:</h4>
            <hr />
            User name: <input onChange={(e) => setuname(e.target.value)} required />
            Password: <input type="password" onChange={(e) => setpassword(e.target.value)} required />
            email: <input onChange={(e) => setemail(e.target.value)} required /> <br /><br />

            <button className="btn btn-danger" onClick={() => {
                if (username != null && password != null && email != null) {
                    dispatch(AssRegAsync({ username, password, email })).then(() => setFlagk(true))
                }
                else { notify() }
            }}>Register</button>
            <ToastContainer />
            <hr></hr>

            {IsAssLogged && 'thank you for sign up association' + username}
        </div>
    )
}

export default AssReg