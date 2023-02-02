import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { checkTypeAsync, logOutAsync, selectIsLogged, selectToken, selectTypeLogged } from '../../slicers/developer/developerSlice';
import './Navbar.css'
import {  Button } from 'react-bootstrap'
import { selectIsAssLogged } from '../../slicers/developer/Association/associationSlice';

const Navbar = () => {
    
    const token = useAppSelector(selectToken)
    
    const dispatch = useAppDispatch()

    // check if someone logged
    const isLogged = useAppSelector(selectIsLogged)
    const IsAssLogged = useAppSelector(selectIsAssLogged)

    // check who is logged
    const loggedTemp = useAppSelector(selectTypeLogged)

    useEffect(() => { 
        if (isLogged){
        dispatch(checkTypeAsync(token))}
     }, [dispatch, token])

    return (
        <div>
            <ul>
                <li><Link to="/homePage" style={{color:"wheat"}}>home page</Link></li>
                <li><Link to="/developer" style={{color:"wheat"}}>our developers</Link></li>
                <li><Link to="/Association" style={{color:"wheat"}}>our Associations</Link></li>

                {/* cheng between login to logout */}
                <li style={{ backgroundColor:"green", float: "right" }}> {isLogged || IsAssLogged ? <div> 
                    <Link to="/homePage"><button style = {{border: 'none', color:'black', backgroundColor: 'green', textAlign:'center', height:'20px'}} 
                 onClick={() => dispatch(logOutAsync())}>LOGOUT</button></Link></div> : <Link to="/Login">LOGIN</Link>}</li>

                {/* presentation the personal profile respectively */}
                <li style={{float: "right"}}>
                     {isLogged && loggedTemp === "dev" ? 
                     <Link to="/devPersonalProfile" style={{color:"wheat"}}>your profile</Link> : ""} </li>
                
                <li style={{float: "right"}}>
                     {IsAssLogged && loggedTemp === "ass" ? 
                     <Link to="/AssPersonalProfile" style={{color:"wheat"}}>your profile</Link> : "" } </li>

                {/* presentation the personal posts */}
                <li style={{float: "right"}}> 
                {IsAssLogged && loggedTemp === "ass" ? 
                <Link to="/MyPosts" style={{color:"wheat"}}>my posts</Link> : "" } </li>

                {/* presentation the posts just to who did login*/}
                <li> {isLogged && loggedTemp === "dev" ? 
                <Link to="/Posts" style={{color:"wheat"}}>find your volunteering</Link> : ""}</li> 
                
                <li>{IsAssLogged && loggedTemp === "ass" ?
                 <Link to="/Posts" style={{color:"wheat"}}> All posts</Link> : "" } </li>
            </ul> 
        </div>
    )
}
export default Navbar