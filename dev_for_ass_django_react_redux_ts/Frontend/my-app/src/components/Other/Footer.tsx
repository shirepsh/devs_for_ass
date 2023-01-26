import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-center fixed-bottom bg-secondary">
        <div className="container">
          <div className="row">
            {/* <!-- Footer Location--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h6>Location</h6>
              <p className="lead mb-0">Tel Aviv, Israel</p>
            </div>
            {/* <!-- Footer Social Icons--> */}
            {/* FaFacebook , FaInstagram, FaLinkedin, FaYoutube  */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h6>Around the Web</h6>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <FaFacebook />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <FaInstagram />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <FaLinkedin />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <FaYoutube />
              </a>
            </div>
            {/* <!-- Footer About Text--> */}
            <div className="col-lg-4">
              <h6>Terms & Policies</h6>
              <p className="lead mb-0">Policies</p>
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
