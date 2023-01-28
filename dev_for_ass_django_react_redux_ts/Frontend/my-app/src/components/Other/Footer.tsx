import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-center fixed-bottom bg-secondary" >
        <div className="container">
          <div className="row">
            {/* <!-- Footer Location--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h6>Location</h6>
              <p className="lead mb-0">Tel Aviv, Israel</p>
            </div>
            {/* <!-- Footer Social Icons--> */}
            {/* FaFacebook , FaInstagram, FaLinkedin, FaGithub  */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h6>Around the Web</h6>
              <a className="btn btn-outline-light btn-social mx-1" href="#!" style={{color:'black'}}>
                <FaFacebook />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!" style={{color:'black'}}>
                <FaInstagram />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!" style={{color:'black'}}>
                <FaLinkedin />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!" style={{color:'black'}}>
                <FaGithub/>
              </a>
            </div>
            {/* <!-- Footer About Text--> */}
            <div className="col-lg-4">
            <Link to="/AboutUs">about us</Link> <br/>
              {/* <p className="lead mb-0">Policies</p> */}
              <Link to="/QandA">Questions and Answers</Link>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; shir epshtain</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;

