import Navbar from "../components/Navbar";
import Nikkoo from "../assets/thae.jpg";

import Five from "../assets/five.svg";
import FiveDark from "../assets/fivedark.svg";
// import { BiLogoFacebook } from "react-icons/bi";
// import { BiLogoInstagram } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { BiEnvelopeOpen } from "react-icons/bi";
// import { TbWorldWww } from "react-icons/tb";
// import { BiLogoLinkedin } from "react-icons/bi";
// import { BiLogoGithub } from "react-icons/bi";
// import { FaViber } from "react-icons/fa";
// import { TbBrandTelegram } from "react-icons/tb";

import "./Home.css";
import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";
export default function Home() {
  let { isDark } = useTheme();
  // console.log(isDark);
  return (
    <div className={`section ${isDark ? "bg-dbg" : "bg-bg"}`}>
      <Navbar />

      <div className="container-fluid home position-relative">
        <div className="row">
          <div className="col-md-12 col-lg-7">
            <div className="photo">
              <img
                src={Nikkoo}
                width="100%"
                alt=""
                className="nk-image-border"
              />
            </div>
          </div>

          <div className="col-md-12 col-lg-5 position-relative">
            <div className="home-text">
              <div className="opencomma">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 330 330"
                  fill="#ffffff52"
                >
                  <path d="M59.42 145.99c-6.53-13.08-4.9-33.08 3.95-46.09 8.91-13.1 20.96-21.74 45.06-21.74l.04-12.57c-31.43-.07-56.69 12.39-71.16 40.3-14.86 28.66-14.8 65.61-14.8 96.7 0 34.14 27.68 61.82 61.82 61.82s61.82-27.68 61.82-61.82c-.01-44.78-46.15-74.48-86.73-56.6zm161.36 0c-6.53-13.08-4.9-33.08 3.95-46.09 8.91-13.1 20.96-21.74 45.06-21.74l.04-12.57c-31.43-.07-56.69 12.39-71.16 40.3-14.86 28.66-14.8 65.61-14.8 96.7 0 34.14 27.68 61.82 61.82 61.82s61.82-27.68 61.82-61.82c-.01-44.78-46.15-74.48-86.73-56.6z"></path>
                </svg>
              </div>

              <h2
                className={`fst-italic my-3 ${
                  isDark ? "text-dsecondary " : "text-lsecondary"
                }`}
              >
                HELLO! HERE I AM
              </h2>
              <p
                className={`fst-italic my-3 ${
                  isDark ? "text-dprimary " : "text-lprimary"
                }`}
              >
                &lt; Thae Nandar Soe @ Nikkoo /&gt;
              </p>
              <h3
                className={`fst-italic my-3 ${
                  isDark ? "text-dsecondary " : "text-lsecondary"
                }`}
              >
                A Passionate Web Developer
              </h3>
              <div>
                <Link
                  rel="stylesheet"
                  to="/about"
                  className={`see-more text-dbtn-text ${
                    isDark ? "btn-dbg " : "btn-bg "
                  }`}
                >
                  See More
                </Link>
              </div>
              <div className="home-contact">
                <div className="info my-5">
                  <div className="d-flex my-2 justify-content-end ">
                    <div style={{ color: "black" }}>
                      <BiEnvelopeOpen />
                    </div>

                    <span
                      className={`mx-2 ${
                        isDark ? "text-dprimary" : "text-lprimary"
                      }`}
                    >
                      thaenandarsoe.2201@gmail.com
                    </span>
                  </div>
                  <div className="d-flex my-2 justify-content-end ">
                    <div style={{ color: "black" }}>
                      <BiPhoneCall />
                    </div>
                    <span
                      className={`mx-2 ${
                        isDark ? "text-dprimary" : "text-lprimary"
                      }`}
                    >
                      +959 958413515
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {!isDark && (
              <img src={Five} className="five d-none d-lg-block " alt="" />
            )}
            {isDark && (
              <img src={FiveDark} className="five d-none d-lg-block " alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
