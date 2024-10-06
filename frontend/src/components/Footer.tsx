import React from "react";
import "../styles/Footer.css";
import Instgram from "../resources/instagram.svg";
import Meta from "../resources/meta.svg";
import Twitter from "../resources/twitter.svg";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-left-container">
          <div className="ftr-website-name">
            <p>S.Kale's</p>
          </div>
          <div className="ftr-address">
            <p id="ftr-address">Address:</p>
            <p>XYZ, Navi Mumbai 456789</p>
          </div>
          <div className="ftr-contact">
            <p>Contact:</p>
            <p>1234 256 789</p>
            <p>SKales@gmail.com</p>
          </div>
          <div className="ftr-socials">
            <img
              src={Instgram}
              alt="social-media-icons"
              id="ftr-socials-one"
            ></img>
            <img src={Meta} alt="social-media-icons" id="ftr-socials-two"></img>
            <img
              src={Twitter}
              alt="social-media-icons"
              id="ftr-socials-three"
            ></img>
          </div>
        </div>
        <div className="footer-right-container">
          <div className="footer-left-r-content">
            <p id="ftr-home">Home</p>
            <p id="ftr-shop">Shop</p>
            <p id="ftr-ourstory">Our Story</p>
            <p id="ftr-blog">Blog</p>
          </div>
          <div className="footer-right-r-content">
            <p id="ftr-faq">FAQ</p>
            <p id="ftr-returns">Returns</p>
            <p id="ftr-privacy">Privacy</p>
            <p id="ftr-myorders">My Orders</p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="rights-and-privacy">
        <div className="copyrighted">
          <p id="copyrighted-one">© 2024 S Kale’s. All rights reserved.</p>
        </div>
        <div className="privacy">
          <p>Privacy Policy</p>
          <p id="privacy-two">Terms Of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
