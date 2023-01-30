// in this components you will ablr to do LOGIN and display the data of this user
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getEmailAsync, loginAsync, selectIsLogged } from "../slicers/developer/developerSlice";
import { Form, Button } from 'react-bootstrap'
import { selectToken } from "../slicers/developer/Association/associationSlice";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Login = () => {

    const isLogged = useAppSelector(selectIsLogged)
    const dispatch = useAppDispatch()
    const token = useAppSelector(selectToken)
    const notify = () => toast("you need to fill the fields!")

    // use state for user details for login
    const [username, setuname] = useState<string | null>(null)
    const [password, setpassword] = useState<string | null>(null)

    if (isLogged){ dispatch(getEmailAsync(token))}

    return (
        <div>

            <h4 style={{ textAlign: "center", color: "black" }}> login:</h4>
            {isLogged && 'welcome: ' + username}
            <Form>
            <Form.Group>
                    <Form.Label>User </Form.Label>
                    <Form.Control
                        type='user'
                        placeholder='Enter user'
                        // value={username}
                        onChange={(e) => setuname(e.target.value)} required>
                    </Form.Control>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Password </Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        // value={password}
                        onChange={(e) => setpassword(e.target.value)} required >
                    </Form.Control>
                </Form.Group>

                <Button  className="btn btn-outline-success" style={{margin: '20px' , color:"white"}} 
                    onClick={() => {
                    if (username != null && password != null ){
                    dispatch(loginAsync({ username, password }))
                    }
                    else {notify ()}

                }}>Login</Button>
                 <ToastContainer/>
                </Form>

        
            {/* User name: <input onChange={(e) => setuname(e.target.value)} /> */}
            {/* Password: <input type='password' onChange={(e) => setpassword(e.target.value)} /> */}
            {/* <button  className="btn btn-outline-success" style={{margin: '20px'}} onClick={() => dispatch(loginAsync({ username, password }))}>Login</button> */}

            <br />

            <h5>dont have an user? sign up!</h5>
            <Link to="/devReg">
                <button className="btn btn-primary" style={{marginRight:20}}>register as developer</button>
            </Link>

            <Link to="/AssReg">
                <button className="btn btn-primary">register as association</button>
            </Link>
        </div>
    );
};

export default Login;