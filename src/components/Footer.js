import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="contact">
          <img src={require("../assets/Logo.png")} alt="logo" />
          <p>
            It is a long established fact that from will be distracted by the
            readable from when looking.
          </p>

          <table>
            <tr>
              <td className="icon">
                <AiOutlineMail />
              </td>
              <td>saasup@gmail.com</td>
            </tr>
            <tr>
              <td></td>
              <td>mail@sassup.com</td>
            </tr>
          </table>
          <br />
          <table>
            <tr>
              <td className="icon">
                <BsFillTelephoneInboundFill />
              </td>
              <td>+987 6541 3654</td>
            </tr>
            <tr>
              <td></td>
              <td>+001 6547 6589</td>
            </tr>
          </table>
        </div>
        <ul className="page-details">
          <li className="header">Pages</li>
          <hr />
          <li>Home</li>
          <li>About us</li>
          <li>Integrations</li>
          <li>Pricing</li>
          <li>Features</li>
          <li>Contact Us</li>
        </ul>
        <ul className="page-details">
          <li className="header">Utility Pages</li>
          <hr />
          <li>Protected</li>
          <li>404 Not Found</li>
          <li>Style Guide</li>
          <li>Licenses</li>
          <li>Changelog</li>
        </ul>
        <div className="download">
          <span className="title">Download</span>
          <h2>Its suitable to all decvices and screens</h2>
          <p>
            It is a long established fact that a reader will be distracted
            layout.
          </p>
          <div className="download-buttons">
            <button className="app-store">App Store</button>
            <button className="play-store">Play Store</button>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <span>
          Copyright © Saasup | Designed by Victorflow - Powered by Webflow
        </span>
        <div className="socials">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaLinkedinIn />
          </span>
          <span>
            <FaInstagram />
          </span>
        </div>
      </div>
    </>
  );
};
