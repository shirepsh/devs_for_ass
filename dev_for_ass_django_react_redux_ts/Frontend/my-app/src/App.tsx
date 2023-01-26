// import logo from './logo.svg';
import { Outlet } from "react-router-dom";
import Navbar from './components/Other/Navbar';
import './App.css';
import { getToken } from "./slicers/developer/developerSlice";
import { useAppDispatch } from "./app/hooks";
import { useEffect } from "react";
import Footer from "./components/Other/Footer";

function App() {

  const dispatch = useAppDispatch()
  
    useEffect(() => {
      dispatch(getToken())
      }, [dispatch])
    
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




