// import React from "react";
// import logo from "../assets/logo.png";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import SubscribeForm from "./SubscribeForm";
// import BtnWithoutIcon from "./BtnWithoutIcon";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   return (
//     <footer>
//       <div className="container mx-auto xl:px-24 sm:px-12 px-7 md:py-6 py-3">
//         <div
//           className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 border-b pt-6 py-8 gap-12"
//           id="footer-first-section"
//         >
//           {/* Logo */}
//           <div>
//             <img className="mb-5" width={150} src={logo} alt="logo" />
//             <p className="font-medium text-lg text-primaryBlack/70">
//               1429 Something Bridge, LA 4281
//             </p>
//             <p className="font-medium text-lg text-primaryBlack py-4">
//               Call: (321) 428 321 3902
//             </p>
//             <div className="social-media-container gap-5 flex">
//               <a
//                 href="/"
//                 className="w-11 h-11 rounded-full bg-[#DFE6E8] flex justify-center items-center"
//               >
//                 <FaTwitter size={18} color="#485B61" />
//               </a>
//               <a
//                 href="/"
//                 className="w-11 h-11 rounded-full bg-[#DFE6E8] flex justify-center items-center"
//               >
//                 <FaFacebookF size={18} color="#485B61" />
//               </a>
//               <a
//                 href="/"
//                 className="w-11 h-11 rounded-full bg-[#DFE6E8] flex justify-center items-center"
//               >
//                 <FaLinkedinIn size={20} color="#485B61" />
//               </a>
//             </div>
//           </div>

//           <div className="xl:pl-10">
//             <h2 className="font-semibold text-2xl text-primaryBlack footer-title mb-6 mt-1">
//               Explore
//             </h2>
//             <p className="font-medium text-lg text-primaryBlack/70 mb-3">
//               <Link to="/">Feature</Link>
//             </p>
//             <p className="font-medium text-lg text-primaryBlack/70 mb-3">
//               <Link to="/">About us</Link>
//             </p>
//             <p className="font-medium text-lg text-primaryBlack/70 mb-3">
//               <Link to="/">FAQs</Link>
//             </p>
//             <p className="font-medium text-lg text-primaryBlack/70">
//               <Link to="/">Contact</Link>
//             </p>
//           </div>
//           <div>
//             <h2 className="font-semibold text-2xl text-primaryBlack footer-title mb-6 mt-1">
//               Legal
//             </h2>
//             <p className="font-medium text-lg text-primaryBlack/70 mb-3">
//               <Link to="/">Privacy Policy</Link>
//             </p>
//             <p className="font-medium text-lg text-primaryBlack/70 mb-3">
//               <Link to="/">Terms of Services</Link>
//             </p>
//             <p className="font-medium text-lg text-primaryBlack/70 mb-3">
//               <Link to="/">Documentations</Link>
//             </p>
//             <p className="font-medium text-lg text-primaryBlack/70">
//               <Link to="/">Help Center</Link>
//             </p>
//           </div>
//           <div>
//             <h2 className="font-semibold text-2xl text-primaryBlack footer-title mb-6 mt-1">
//               Subscribe
//             </h2>
//             <p className="font-medium text-lg text-primaryBlack/70 mb-3">
//               Subscribe to get the latest news from us
//             </p>
//             <div className="form-container mt-5">
//               <SubscribeForm />
//             </div>
//           </div>
//         </div>
//         <div
//           className="flex lg:flex-row lg:justify-between flex-col lg:gap-0 gap-5 py-4"
//           id="footer-sec-section"
//         >
//           <div className="lg:mt-0 mt-4">
//             <p className="font-medium text-base text-primaryBlack/30">
//               © {currentYear} iMedical, All Rights Reserved
//             </p>
//           </div>
//           <div className="flex lg:flex-row flex-col lg:gap-7 gap-5">
//             <a
//               className="font-medium text-base text-primaryBlack/40"
//               href="/Privacy-Policy"
//             >
//               Privacy Policy
//             </a>
//             <a
//               className="font-medium text-base text-primaryBlack/40"
//               href="/tos"
//             >
//               Terms of Services
//             </a>
//             <a
//               className="font-medium text-base text-primaryBlack/40"
//               href="/Accesibility"
//             >
//               Accesibility
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import SubscribeForm from "./SubscribeForm";
import BtnWithoutIcon from "./BtnWithoutIcon";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer>
      <div className="container mx-auto xl:px-24 sm:px-12 px-7 md:py-6 py-3">
        <motion.div
          className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 border-b pt-6 py-8 gap-12"
          id="footer-first-section"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Logo */}
          <motion.div variants={fadeInUp}>
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
          </motion.div>

          {/* Explore Links */}
          <motion.div className="xl:pl-10" variants={fadeInUp}>
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
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={fadeInUp}>
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
          </motion.div>

          {/* Subscribe Section */}
          <motion.div variants={fadeInUp}>
            <h2 className="font-semibold text-2xl text-primaryBlack footer-title mb-6 mt-1">
              Subscribe
            </h2>
            <p className="font-medium text-lg text-primaryBlack/70 mb-3">
              Subscribe to get the latest news from us
            </p>
            <div className="form-container mt-5">
              <SubscribeForm />
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom Section */}
        <motion.div
          className="flex lg:flex-row lg:justify-between flex-col lg:gap-0 gap-5 py-4"
          id="footer-sec-section"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="lg:mt-0 mt-4" variants={fadeInUp}>
            <p className="font-medium text-base text-primaryBlack/30">
              © {currentYear} iMedical, All Rights Reserved
            </p>
          </motion.div>
          <motion.div
            className="flex lg:flex-row flex-col lg:gap-7 gap-5"
            variants={fadeInUp}
          >
            <a
              className="font-medium text-base text-primaryBlack/40"
              href="/Privacy-Policy"
            >
              Privacy Policy
            </a>
            <a
              className="font-medium text-base text-primaryBlack/40"
              href="/tos"
            >
              Terms of Services
            </a>
            <a
              className="font-medium text-base text-primaryBlack/40"
              href="/Accesibility"
            >
              Accessibility
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
