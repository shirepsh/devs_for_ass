import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer style={{marginTop: "auto"}} className="footer text-center fixed-bottom bg-dark text-wheat" >
        <div className="container">
          <div className="row">
            {/* <!-- Footer Location--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h6 style={{color:"wheat"}}>Location</h6>
              <p style={{color:"wheat"}} className="lead mb-0">Tel Aviv, Israel</p>
            </div>
            {/* <!-- Footer Social Icons--> */}
            {/* FaFacebook , FaInstagram, FaLinkedin, FaGithub  */}
            <div className="col-lg-4 mb-5 mb-lg-0 ">
              <h6  style={{color:"wheat"}}>Around the Web</h6>
              <a className="btn-social mx-1" style={{color:"white"}}  href="https://www.facebook.com/shir.epshtein.1?mibextid=LQQJ4d">
                <FaFacebook />
              </a>
              <a className="btn-social mx-1" style={{color:"white"}} href="https://instagram.com/_shirepshtein?igshid=MDM4ZDc5MmU=">
                <FaInstagram />
              </a>
              <a className="btn-social mx-1" style={{color:"white"}}  href="https://www.linkedin.com/in/shir-epshtain/">
                <FaLinkedin />
              </a>
              <a className="btn-social mx-1" style={{color:"white"}} href="https://github.com/shirepsh">
                <FaGithub/>
              </a>
            </div>
            {/* <!-- Footer About Text--> */}
            <div className="col-lg-4">
            <Link to="/AboutUs" style={{color:"wheat", fontFamily: 'Nunito Sans'}}>about us</Link> <br/>
              {/* <p className="lead mb-0">Policies</p> */}
              <Link to="/QandA" style={{color:"wheat", fontFamily: 'Nunito Sans'}}>Questions and Answers</Link>
            </div>
          </div>
        </div>
      </footer>
{/* 
      <div className="copyright py-4 text-center text-wheat">
        <div className="container">
          <small>Copyright &copy; shir epshtain</small>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;

