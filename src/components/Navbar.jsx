// import Cv from "../assets/cv.svg";
import Home from "../assets/home.svg";
import HomeDark from "../assets/homedark.svg";
import About from "../assets/about.svg";
import AboutDark from "../assets/aboutdark.svg";
import Portfolio from "../assets/portfolio.svg";
import PortfolioDark from "../assets/portfoliodark.svg";
import Services from "../assets/service.svg";
import ServicesDark from "../assets/servicedark.svg";
import Contact from "../assets/contact.svg";
import ContactDark from "../assets/contactdark.svg";
import One from "../assets/one.svg";
import OneDark from "../assets/onedark.svg";
// import Two from "../assets/two.svg";
import Four from "../assets/four.svg";
import FourDark from "../assets/fourdark.svg";
// import ThemeToggle from "../assets/themetoggle.svg";
// import { BiSolidLayer } from "react-icons/bi";
// import { BiLogoFacebook } from "react-icons/bi";
// import { BiLogoInstagram } from "react-icons/bi";

import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import useTheme from "../hooks/useTheme";
export default function Navbar() {
  let { isDark } = useTheme();
  return (
    <>
      <div className="navigation position-relative">
        {!isDark && <img src={One} alt="" className="one" />}
        {isDark && <img src={OneDark} alt="" className="one" />}
        {/* <img src={Two} alt="" className="two " /> */}
        {!isDark && (
          <img src={Four} alt="" className="four d-none d-md-block  " />
        )}
        {isDark && (
          <img src={FourDark} alt="" className="four d-none d-md-block  " />
        )}

        <nav className="navbar bg-transparent navbar-expand-lg  px-lg-5 py-5 px-2 ">
          <div className="container-fluid">
            <button
              className={`navbar-toggler ${
                isDark ? "border-dprimary" : "border-lprimary"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li
                  className={`nav-item d-flex align-items-center mx-4 ${
                    isDark ? "border-li" : ""
                  }`}
                >
                  {isDark && (
                    <img src={HomeDark} alt="" className="w-full mx-2" />
                  )}
                  {!isDark && <img src={Home} alt="" className="w-full mx-2" />}

                  <NavLink
                    className={`nav-link fst-italic ${
                      isDark ? "text-dprimary" : "text-lprimary"
                    }`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  className={`nav-item d-flex align-items-center mx-4 ${
                    isDark ? "border-li" : ""
                  }`}
                >
                  {isDark && (
                    <img src={AboutDark} alt="" className="w-full mx-2" />
                  )}
                  {!isDark && (
                    <img src={About} alt="" className="w-full mx-2" />
                  )}

                  <NavLink
                    to="/about"
                    className={`nav-link fst-italic ${
                      isDark ? "text-dprimary" : "text-lprimary"
                    }`}
                  >
                    About
                  </NavLink>
                </li>

                <li
                  className={`nav-item d-flex align-items-center mx-4 ${
                    isDark ? "border-li" : ""
                  }`}
                >
                  {isDark && (
                    <img src={ServicesDark} alt="" className="w-full mx-2" />
                  )}
                  {!isDark && (
                    <img src={Services} alt="" className="w-full mx-2" />
                  )}
                  <NavLink
                    to="/services"
                    className={`nav-link fst-italic ${
                      isDark ? "text-dprimary" : "text-lprimary"
                    }`}
                  >
                    Services
                  </NavLink>
                </li>
                <li
                  className={`nav-item d-flex align-items-center mx-4 ${
                    isDark ? "border-li" : ""
                  }`}
                >
                  {isDark && (
                    <img src={PortfolioDark} alt="" className="w-full mx-2" />
                  )}
                  {!isDark && (
                    <img src={Portfolio} alt="" className="w-full mx-2" />
                  )}

                  <NavLink
                    to="/portfolios"
                    className={`nav-link fst-italic ${
                      isDark ? "text-dprimary" : "text-lprimary"
                    }`}
                  >
                    Works
                  </NavLink>
                </li>

                <li
                  className={`nav-item d-flex align-items-center mx-4 ${
                    isDark ? "border-li" : ""
                  }`}
                >
                  {isDark && (
                    <img src={ContactDark} alt="" className="w-full mx-2" />
                  )}
                  {!isDark && (
                    <img src={Contact} alt="" className="w-full mx-2" />
                  )}
                  <NavLink
                    to="/contact"
                    className={`nav-link fst-italic ${
                      isDark ? "text-dprimary" : "text-lprimary"
                    }`}
                  >
                    Contact
                  </NavLink>
                </li>
                {/* <li className="nav-item d-md-none d-flex align-items-center mx-4">
                  <img src={Cv} alt="" className="w-full mx-2" />
                  <NavLink
                    to="https://drive.google.com/file/d/1vAyN5wYY3hIXxeiCOrphjcGDD06hoojs/view?usp=sharing"
                    className="nav-link fst-italic "
                  >
                    Resume
                  </NavLink>
                </li> */}
              </ul>
            </div>

            <div className="cv-form d-none d-md-flex align-items-center justify-content-center ">
              <div className="socials">
                <Link
                  to="https://github.com/thaethae-nikkoo"
                  data-title="https://github.com/thaethae-nikkoo"
                  target="_blank"
                  className={`social mx-2  ${
                    isDark
                      ? "border-dprimary text-dprimary "
                      : "text-lprimary border-lprimary"
                  }`}
                >
                  <BiLogoGithub />
                </Link>
                {/* <Link
                  to="https://www.instagram.com/tns.nikkoo/"
                  className={`social mx-2  ${
                    isDark
                      ? "border-dprimary text-dprimary "
                      : "text-lprimary border-lprimary"
                  }`}
                  data-title="https://www.instagram.com/tns.nikkoo/"
                >
                  <BiLogoInstagram />
                </Link> */}

                {/* <Link
                  to="https://www.facebook.com/tnandar.nikkoo"
                  target="_blank"
                  className={`social mx-2  ${
                    isDark
                      ? "border-dprimary text-dprimary "
                      : "text-lprimary border-lprimary"
                  }`}
                  data-title="https://www.facebook.com/tnandar.nikkoo"
                >
                  <BiLogoFacebook />
                </Link> */}

                <Link
                  to="https://www.linkedin.com/in/thae-nandar-soe-4a448725a/"
                  target="_blank"
                  className={`social mx-2  ${
                    isDark
                      ? "border-dprimary text-dprimary "
                      : "text-lprimary border-lprimary"
                  }`}
                  data-title="https://www.linkedin.com/in/thae-nandar-soe-4a448725a/"
                >
                  <BiLogoLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* <div className="theme-toggler">
          <img src={ThemeToggle} alt="" />
        </div> */}
      </div>
    </>
  );
}
