// in this components you will ablr to do LOGIN and display the data of this user
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loginAsync, selectIsLogged } from "../slicers/developer/developerSlice";
import { Form, Button } from 'react-bootstrap'



const Login = () => {

    const isLogged = useAppSelector(selectIsLogged)
    const dispatch = useAppDispatch()

    // use state for user details for login
    const [username, setuname] = useState("")
    const [password, setpassword] = useState("")


    return (
        <div>

            <h4 style={{ textAlign: "center", color: "black" }}> login:</h4>
            {isLogged && 'welcome: ' + username}
            <Form>
            <Form.Group>
                    <Form.Label>User</Form.Label>
                    <Form.Control
                        type='user'
                        placeholder='Enter user'
                        value={username}
                        onChange={(e) => setuname(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button  className="btn btn-outline-success" style={{margin: '20px' , color:"white"}} onClick={() => dispatch(loginAsync({ username, password }))}>Login</Button>
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