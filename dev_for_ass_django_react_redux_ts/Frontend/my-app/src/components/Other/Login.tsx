// in this components you will ablr to do LOGIN and display the data of this user
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEmailAsync, loginAsync, selectIsLogged } from "../../slicers/developer/developerSlice";
import { Form, Button } from 'react-bootstrap'
import { selectToken } from "../../slicers/developer/Association/associationSlice";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import axios from 'axios';

const Login = () => {

  const isLogged = useAppSelector(selectIsLogged)
  const dispatch = useAppDispatch()
  const token = useAppSelector(selectToken)

  // use state for user details for login
  const [username, setuname] = useState("")
  const [password, setpassword] = useState("")

  if (isLogged) { dispatch(getEmailAsync(token)) }

  // tost about the diffrent errors
  const handleLogin = (username: any, password: any) => {
    axios.post('http://127.0.0.1:8000/app/login', { username, password })
      .then((response) => {
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          toast.error("username or password Incorrect", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        if (error.response && error.response.status === 400) {
          toast.error("you need to fill all the fields!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  };

  // use effect to the user that logged in
  useEffect(() => {
    if (isLogged) {
      toast("Welcome, " + `${username} 🎉`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        theme: "light"
      });
    }},[isLogged]);

  return (
    <div>
      <h4 style={{ textAlign: "center", color: "wheat" }}> login:</h4>
      {/* {isLogged && 'welcome: ' + username} */}
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

        <Button className="btn btn-outline-success" style={{ margin: '20px', color: "wheat" }} onClick={() => { dispatch(loginAsync({ username, password })); handleLogin(username, password) }}>Login</Button>
        <ToastContainer />
      </Form>
      <br />

      <h5 style={{ color: "wheat" }}>dont have an user? sign up!</h5>
      <Link to="/devReg">
        <button className="btn btn-primary" style={{ marginRight: 20, color:"white"}}>register as developer</button>
      </Link>

      <Link to="/AssReg">
        <button className="btn btn-primary" style={{color:"white"}}>register as association</button>
      </Link>
      <br /><br /><br /><br />
    </div>
  );
};

export default Login;





