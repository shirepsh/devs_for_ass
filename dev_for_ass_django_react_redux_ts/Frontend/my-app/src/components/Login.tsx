// in this components you will ablr to do LOGIN and display the data of this user
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loginAsync, selectIsLogged } from "../slicers/developer/developerSlice";


const Login = () => {

    const isLogged = useAppSelector(selectIsLogged)
    const dispatch = useAppDispatch()

    // use state for user details for login
    const [username, setuname] = useState("")
    const [password, setpassword] = useState("")


    return (
        <div>
            <h4 style={{ textAlign: "center", color: "violet" }}> login:</h4>
            {isLogged && 'welcome: ' + username}<hr></hr>
            User name: <input onChange={(e) => setuname(e.target.value)} />
            Password: <input type='password' onChange={(e) => setpassword(e.target.value)} />
            <button onClick={() => dispatch(loginAsync({ username, password }))}>Login</button>

            <hr /> <br /> <br />

            <h4>dont have an user? sign up!</h4>
            <Link to="/devReg">
                <button className="btn btn-primary">register as developer</button>
            </Link>

            <Link to="/AssReg">
                <button className="btn btn-primary">register as association</button>
            </Link>
            <hr /> <br /> <br />

        </div>
    );
};

export default Login;