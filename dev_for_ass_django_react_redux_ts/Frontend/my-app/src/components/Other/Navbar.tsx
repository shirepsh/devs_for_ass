import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { checkTypeAsync, logOutAsync, selectIsLogged, selectToken, selectTypeLogged } from '../../slicers/developer/developerSlice';
import './Navbar.css'

const Navbar = () => {
    
    const token = useAppSelector(selectToken)
    
    const dispatch = useAppDispatch()
    // check if someone logged
    const isLogged = useAppSelector(selectIsLogged)

    // check who is logged
    const loggedTemp = useAppSelector(selectTypeLogged)

    useEffect(() => { dispatch(checkTypeAsync(token)) }, [dispatch, token])

    return (
        <div>
            <ul>
                <li><Link to="/homePage">home page</Link></li>
                <li><Link to="/developer">our developers</Link></li>
                <li><Link to="/Association">our Associations</Link></li>
                <li><Link to="/AboutUs">about us</Link></li>
                <li style={{ backgroundColor: "green", float: "right" }}> {isLogged  ? <div> <button onClick={() => dispatch(logOutAsync())}>LOGOUT</button></div> : <Link to="/Login">login/logout</Link>}</li>

                <li style={{ backgroundColor: "red", float: "right" }}> {isLogged && loggedTemp === "dev" ? <Link to="/devPersonalProfile">your profile</Link> : ""} {isLogged && loggedTemp === "ass" ? <Link to="/AssPersonalProfile">your profile</Link> : "" } </li>

            </ul> 
    
        </div>
    )
}
export default Navbar
