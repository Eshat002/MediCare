import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-24 py-6">
        <div className="grid grid-cols-4" id="footer-first-section">
          {/* Logo */}
          <div>
            <img className="mb-5" width={150} src={logo} alt="logo" />
            <p className="font-medium text-lg text-primaryBlack/70">
              1429 Something Bridge, LA 4281
            </p>
            <p className="font-medium text-lg text-primaryBlack py-4">
              Call: (321) 428 321 3902
            </p>
            <div className="social-media-container gap-5 flex">
              <a
                href="/"
                className="w-11 h-11 rounded-full bg-[#DFE6E8] flex justify-center items-center"
              >
                <FaTwitter size={18} color="#485B61" />
              </a>
              <a
                href="/"
                className="w-11 h-11 rounded-full bg-[#DFE6E8] flex justify-center items-center"
              >
                <FaFacebookF size={18} color="#485B61" />
              </a>
              <a
                href="/"
                className="w-11 h-11 rounded-full bg-[#DFE6E8] flex justify-center items-center"
              >
                <FaLinkedinIn size={20} color="#485B61" />
              </a>
            </div>
          </div>

          <div>2</div>
          <div>2</div>
          <div>2</div>
        </div>
        <div id="footer-sec-section"></div>
      </div>
    </footer>
  );
};

export default Footer;
