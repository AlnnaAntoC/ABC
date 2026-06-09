import React from "react";
import "./Footer.css";
import logo from "../log.png";
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-grid">

          {/* LEFT: Logo */}
          <div className="footer-section footer-logo-section">
            <img src={logo} alt="Company Logo" className="footer-logo" />
            <p>Vendor Trading W.L.L., established in 2022, delivers trusted medical and furniture supply solutions across Qatar, combining quality, innovation, and reliability to support improved healthcare outcomes.
            </p>
          </div>

          {/* CENTER: Address & Social */}
          <div className="footer-section footer-address-section">
            <h4 className="company-name"> Contact US </h4>
            <p>Vendor Medical Trading W.L.L</p>
            <p>P.O. Box 40234, Building 84, Zone 56, Street 205</p>
            <p>Salwa Road, Qatar</p>
            <p>Tel: +974 4037 8130 &nbsp; | &nbsp; Fax: +974 4037 8130</p>
            <p>Email: mail@vendormedicaltrading.com</p>

            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
               <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>

          {/* RIGHT: Google Map */}
          <div className="footer-section footer-map-section">
             
            <iframe
              title="company-location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.434768652444!2d51.5309805!3d25.2866577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c587e845b0e3%3A0x6a78c5a53cda34cd!2s6CHR%2BR62%20Doha!5e0!3m2!1sen!2sqa!4v1706800000000!5m2!1sen!2sqa"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} Vendor Medical Trading W.L.L. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
