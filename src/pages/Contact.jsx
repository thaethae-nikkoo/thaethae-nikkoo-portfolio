import Navbar from "../components/Navbar";
import Nikkoo from "../assets/nikkoo.jpg";
import { BiPhoneCall } from "react-icons/bi";
import { BiEnvelopeOpen } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import { TbWorldWww } from "react-icons/tb";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { FaViber } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Contact.css";
import { TbBrandTelegram } from "react-icons/tb";
import useTheme from "../hooks/useTheme";

export default function Contact() {
  let { isDark } = useTheme();
  return (
    <div className={`section ${isDark ? "bg-dbg" : "bg-bg"}`}>
      <Navbar />
      <div className="container contact mt-md-5">
        <div className="row d-flex align-items-center ">
          <div className="info col-lg-3 col-md-6 col-sm-12">
            <p
              className={`my-3 px-2 ${
                isDark ? "text-dprimary" : "text-lprimary"
              }`}
            >
              Feel Free to contact me any time & any where. I will get back to
              you as soon as I can!.
            </p>
          </div>

          <div className="col-lg-5 col-md-6 col-sm-12 contact-image d-flex justify-content-center  my-4">
            <img src={Nikkoo} width="70%" alt="" className="nk" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 px-2 mx-lg-0 d-flex justify-content-center">
            <div>
              <h3
                className={`my-4 ${
                  isDark ? "text-dsecondary" : "text-lprimary"
                }`}
              >
                Contact Information
              </h3>
              <div className="contact-infomation">
                <div
                  className={`p ${isDark ? "text-dprimary" : "text-lprimary"}`}
                >
                  <BiEnvelopeOpen />

                  <span className="mx-2">thaenandarsoe.2201@gmail.com</span>
                </div>
                <div
                  className={`p ${isDark ? "text-dprimary" : "text-lprimary"}`}
                >
                  <BiPhoneCall />
                  <span className="mx-2"> +959 958413515</span>
                </div>
                <div
                  className={`p ${isDark ? "text-dprimary" : "text-lprimary"}`}
                >
                  <GrMapLocation />

                  <span className="mx-2"> Thanlyin Township, Yangon</span>
                </div>
                <div
                  className={`p ${isDark ? "text-dprimary" : "text-lprimary"}`}
                >
                  <TbWorldWww />

                  <span className="mx-2"> https://tns-nikkoo.com</span>
                </div>
              </div>
              <h3
                className={`my-4 ${
                  isDark ? "text-dsecondary" : "text-lprimary"
                }`}
              >
                Via Social
              </h3>

              <div className="socials">
                <div className="mt-2 d-flex justify-content-start">
                  <div className=" m-2">
                    <Link
                      to="https://github.com/thaethae-nikkoo"
                      data-title="https://github.com/thaethae-nikkoo"
                      target="_blank"
                      className={`social mx-1  ${
                        isDark
                          ? "border-dprimary text-dprimary "
                          : "text-lprimary border-lprimary"
                      }`}
                    >
                      <BiLogoGithub />
                    </Link>
                  </div>
                  <div className=" m-2">
                    <Link
                      to="https://www.instagram.com/tns.nikkoo/"
                      className={`social mx-1  ${
                        isDark
                          ? "border-dprimary text-dprimary "
                          : "text-lprimary border-lprimary"
                      }`}
                      data-title="https://www.instagram.com/tns.nikkoo/"
                    >
                      <BiLogoInstagram />
                    </Link>
                  </div>
                  <div className=" m-2">
                    <Link
                      to="https://www.facebook.com/tnandar.nikkoo"
                      target="_blank"
                      className={`social mx-1  ${
                        isDark
                          ? "border-dprimary text-dprimary "
                          : "text-lprimary border-lprimary"
                      }`}
                      data-title="https://www.facebook.com/tnandar.nikkoo"
                    >
                      <BiLogoFacebook />
                    </Link>
                  </div>
                </div>
                <div className="mt-2 d-flex justify-content-start">
                  <div className="m-2">
                    <Link
                      to="https://www.linkedin.com/in/thae-nandar-soe-4a448725a/"
                      target="_blank"
                      className={`social mx-1  ${
                        isDark
                          ? "border-dprimary text-dprimary "
                          : "text-lprimary border-lprimary"
                      }`}
                      data-title="https://www.linkedin.com/in/thae-nandar-soe-4a448725a/"
                    >
                      <BiLogoLinkedin />
                    </Link>
                  </div>
                  <div className=" m-2">
                    <Link
                      to="viber://chat/?number=+95%209958413515"
                      target="_blank"
                      className={`social mx-1  ${
                        isDark
                          ? "border-dprimary text-dprimary "
                          : "text-lprimary border-lprimary"
                      }`}
                      data-title="+959958413515"
                    >
                      <FaViber />
                    </Link>
                  </div>
                  <div className=" m-2">
                    <Link
                      to="https://t.me/tns_nikkoo"
                      target="_blank"
                      className={`social mx-1  ${
                        isDark
                          ? "border-dprimary text-dprimary "
                          : "text-lprimary border-lprimary"
                      }`}
                      data-title="@tns_nikkoo"
                    >
                      <TbBrandTelegram />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
