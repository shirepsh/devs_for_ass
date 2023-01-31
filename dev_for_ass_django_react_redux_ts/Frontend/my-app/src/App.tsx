// import logo from './logo.svg';
import { Outlet } from "react-router-dom";
import Navbar from './components/Other/Navbar';
import './App.css';
import {  checkTypeAsync, getEmailAsync, getToken, selectIsLogged, selectToken } from "./slicers/developer/developerSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import Footer from "./components/Other/Footer";
import { selectAssEmailLogged } from "./slicers/developer/Association/associationSlice";
import { getMyAssPostsAsync } from "./slicers/developer/posts/postsSlice";

function App() {

  const dispatch = useAppDispatch()
  const email = useAppSelector(selectAssEmailLogged)
  const token = useAppSelector(selectToken)
  const isLogged = useAppSelector(selectIsLogged)
  
    useEffect(() => {
      if (isLogged){
      dispatch(getToken())}
      }, [dispatch])

      useEffect(() => {
        if (isLogged){
        (dispatch(getEmailAsync(token)))}
      }, [dispatch, token])
    
      useEffect(() => { 
        if (isLogged){
        dispatch(checkTypeAsync(token))}
      }, [dispatch, token])

      useEffect(() => {
        if (isLogged){
        dispatch(getMyAssPostsAsync(token))}
      }, [dispatch, token])

      
      
  return (
    <div className="App">

    
    <Navbar /> 
    {/* Main content start */}
    <Outlet /> 
    {/* Main content end */}
     <Footer/>
     

  </div>
  );
}

export default App;




