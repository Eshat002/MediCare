import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

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

          <div>
            <h2 className="font-semibold text-2xl text-primaryBlack footer-title mb-6 mt-1">
              Explore
            </h2>
            <p className="font-medium text-lg text-primaryBlack/70 mb-3">
              <Link to="/">Feature</Link>
            </p>
            <p className="font-medium text-lg text-primaryBlack/70 mb-3">
              <Link to="/">About us</Link>
            </p>
            <p className="font-medium text-lg text-primaryBlack/70 mb-3">
              <Link to="/">FAQs</Link>
            </p>
            <p className="font-medium text-lg text-primaryBlack/70">
              <Link to="/">Contact</Link>
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-primaryBlack footer-title mb-6 mt-1">
              Legal
            </h2>
            <p className="font-medium text-lg text-primaryBlack/70 mb-3">
              <Link to="/">Privacy Policy</Link>
            </p>
            <p className="font-medium text-lg text-primaryBlack/70 mb-3">
              <Link to="/">Terms of Services</Link>
            </p>
            <p className="font-medium text-lg text-primaryBlack/70 mb-3">
              <Link to="/">Documentations</Link>
            </p>
            <p className="font-medium text-lg text-primaryBlack/70">
              <Link to="/">Help Center</Link>
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-primaryBlack footer-title mb-6 mt-1">
              Subscribe
            </h2>
            <p className="font-medium text-lg text-primaryBlack/70 mb-3">
              Subscribe to get the latest news from us
            </p>
            <div className="form-container">form</div>
          </div>
        </div>
        <div id="footer-sec-section"></div>
      </div>
    </footer>
  );
};

export default Footer;
