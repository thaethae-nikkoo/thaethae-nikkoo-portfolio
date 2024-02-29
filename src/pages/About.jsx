import Navbar from "../components/Navbar";
import "./About.css";
import Nikkoo from "../assets/tnandar.jpg";

import { HiMiniAcademicCap } from "react-icons/hi2";

import { BiSolidCategoryAlt } from "react-icons/bi";
import { BiCheckSquare } from "react-icons/bi";

import { BiDownload } from "react-icons/bi";
import { LuCrown } from "react-icons/lu";

import { FaLaptopCode } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import HTML from "../assets/html.png";
import Css from "../assets/css.png";
import JS from "../assets/js.png";
import Github from "../assets/github.png";
import Bootstrap from "../assets/bootstrap.png";
import PHP from "../assets/php.png";
import React from "../assets/react.png";
import Laravel from "../assets/laravel.svg";
import Redux from "../assets/redux.svg";
import Six from "../assets/six.svg";
import Tailwind from "../assets/tailwind.svg";
import Cpanel from "../assets/cpanel.svg";
import { BsPersonVcardFill } from "react-icons/bs";

import Digitalocean from "../assets/digitalocean.svg";
import Aws from "../assets/aws.svg";
import Photoshop from "../assets/photoshop.png";
import Illustrator from "../assets/illustrator.png";
import Microsoft from "../assets/microsoft.png";
import Whmcs from "../assets/whmcs.svg";
import { AiOutlineCloudServer } from "react-icons/ai";
import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";

export default function About() {
  let { isDark } = useTheme();
  return (
    <div className={`section ${isDark ? "bg-dbg" : "bg-bg"}`}>
      <Navbar />
      <div className="container menu about px-4 px-lg-5 mt-2">
        <div className="about-me">
          <h2
            className={`titile ${
              isDark ? "text-dsecondary" : "text-lsecondary"
            }`}
          >
            About Me
          </h2>
          <p
            className={`my-3 px-2 ${
              isDark ? "text-dprimary" : "text-lprimary"
            }`}
          >
            Yo!, I am Thae Nandar Soe , Nikkoo. I am a web developer who loves
            good experiences , always active and crazy in programming languages.
            With a strong foundation in coding and a keen eye for design, I
            created some functional websites that leave a lasting impression. My
            goal is to make the digital world more accessible through
            user-friendly interfaces. Let&apos;s shape the web together!
          </p>
        </div>

        <div className="row">
          <div className="col-md-12 col-lg-5 position-relative">
            <Link
              to="https://drive.google.com/file/d/1vAyN5wYY3hIXxeiCOrphjcGDD06hoojs/view?usp=sharing"
              target="_blank"
              // className="download-cv px-1 px-lg-0 my-lg-0 my-1"
              className={`download-cv px-3 py-1 my-1 text-decoration-none  ${
                isDark ? "btn-dbg text-dbtn-text " : "btn-bg text-lprimary"
              }`}
            >
              <BiDownload /> <span>Download CV</span>
            </Link>
            <div className="about-img my-4 d-flex justify-content-center ">
              <img src={Nikkoo} width="50%" alt="" />
            </div>
            {!isDark && <img src={Six} alt="" className="six" />}
          </div>
          <div className="col-md-12 col-lg-7 ">
            <div className="about-info">
              <ul
                className="nav nav-tabs d-flex justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <li className="nav-item">
                  <a
                    className={`nav-link active show ${
                      isDark ? "text-dprimary" : "text-lprimary"
                    }`}
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                  >
                    <h4>Profile</h4>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className={`nav-link  ${
                      isDark ? "text-dprimary" : "text-lprimary"
                    }`}
                    data-bs-toggle="tab"
                    data-bs-target="#edu"
                  >
                    <h4>Education</h4>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className={`nav-link  ${
                      isDark ? "text-dprimary" : "text-lprimary"
                    }`}
                    data-bs-toggle="tab"
                    data-bs-target="#exp"
                  >
                    <h4>Experiences</h4>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className={`nav-link  ${
                      isDark ? "text-dprimary" : "text-lprimary"
                    }`}
                    data-bs-toggle="tab"
                    data-bs-target="#skill"
                  >
                    <h4>Skills</h4>
                  </a>
                </li>
              </ul>

              <div
                className="tab-content"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="tab-pane fade active show" id="profile">
                  <div className="row my-4 ">
                    <div className="col-lg-12 menu-item">
                      <div className="education">
                        <div className="edu  mx-lg-5 px-2 my-4">
                          <h3 className="d-flex my-3 align-items-center ">
                            <BsPersonVcardFill />

                            <span
                              className={`mx-2 ${
                                isDark ? "text-dprimary" : "text-lprimary"
                              }`}
                            >
                              Profile Overview
                            </span>
                          </h3>

                          <ul
                            className={`px-1 mt-2 px-lg-3 list-unstyled about-list ${
                              isDark ? "text-dprimary" : "text-lprimary"
                            } `}
                          >
                            <li>
                              <BiCheckSquare />
                              <span className="mx-1">
                                Name : Thae Nandar Soe | Nikkoo
                              </span>
                            </li>

                            <li>
                              <BiCheckSquare />
                              <span className="mx-1">
                                Race & Religious : Burmese | Buddhism
                              </span>
                            </li>
                            <li>
                              <BiCheckSquare />
                              <span className="mx-1">
                                Birthday : 02 February 2001
                              </span>
                            </li>
                            <li>
                              <BiCheckSquare />
                              <span className="mx-1">
                                Career : Web Developer (since 2021)
                              </span>
                            </li>
                            <li>
                              <BiCheckSquare />
                              <span className="mx-1">
                                Freelance Availability: Available
                              </span>
                            </li>
                          </ul>
                          <h3 className="d-flex mb-3 align-items-center ">
                            <LuCrown />

                            <span
                              className={`mx-2 ${
                                isDark ? "text-dprimary" : "text-lprimary"
                              }`}
                            >
                              My Priorities
                            </span>
                          </h3>
                          <ul className="px-1 mt-2 px-lg-3 list-unstyled about-list d-flex justify-content-start flex-wrap">
                            <li className="my-1">
                              <BiCheckSquare />
                              <span className="mx-1">Hard working</span>
                            </li>
                            <li className="my-1">
                              <BiCheckSquare />
                              <span className="mx-1">Flexibility</span>
                            </li>
                            <li className="my-1">
                              <BiCheckSquare />
                              <span className="mx-1">Patience</span>
                            </li>
                            <li className="my-1">
                              <BiCheckSquare />
                              <span className="mx-1">
                                Motivated , active & strong
                              </span>
                            </li>
                            <li className="my-1">
                              <BiCheckSquare />
                              <span className="mx-1">Time Management</span>
                            </li>
                            <li className="my-1">
                              <BiCheckSquare />
                              <span className="mx-1">
                                Respect for colleagues
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade " id="edu">
                  <div className="row my-4 ">
                    <div className="col-lg-12 menu-item">
                      <div className="education">
                        <div className="edu mt-4">
                          <h3
                            className={`my-3 ${
                              isDark ? "text-dprimary " : "text-lprimary"
                            }`}
                          >
                            <HiMiniAcademicCap />
                            University Of Computer Studies (YGN)
                          </h3>
                          <span
                            className={`year mx-4 py-1 px-3 rounded-1 d-block my-1 ${
                              isDark ? "dyear" : "lyear"
                            }`}
                          >
                            2017-2020
                          </span>
                          <p
                            className={`px-4 py-2 ${
                              isDark ? "text-dsecondary" : "text-lprimary"
                            }`}
                          >
                            I attended UCSY from 2017 to 2020, majoring in
                            computer science. In 2020, I left due to the
                            Covid-19 and political issues.
                          </p>
                        </div>
                        <div className="edu mt-4">
                          <h3
                            className={`my-3 ${
                              isDark ? "text-dprimary " : "text-lprimary"
                            }`}
                          >
                            <HiMiniAcademicCap />
                            Youth Career University (YGN)
                          </h3>
                          <span
                            className={`year mx-4 py-1 px-3 rounded-1 d-block my-1 ${
                              isDark ? "dyear" : "lyear"
                            }`}
                          >
                            2020-2021
                          </span>
                          <p
                            className={`px-4 py-2 ${
                              isDark ? "text-dsecondary" : "text-lprimary"
                            }`}
                          >
                            I attended English Major (Pre-Intermediate Level) at
                            YCU. Now I&apos;m trying Intermediate level with
                            self-study.
                          </p>
                        </div>
                        <div className="edu mt-4">
                          <h3
                            className={`my-3 ${
                              isDark ? "text-dprimary " : "text-lprimary"
                            }`}
                          >
                            <HiMiniAcademicCap />Y Max University (YGN)
                          </h3>
                          <span
                            className={`year mx-4 py-1 px-3 rounded-1 d-block my-1 ${
                              isDark ? "dyear" : "lyear"
                            }`}
                          >
                            2023-now
                          </span>
                          <p
                            className={`px-4 py-2 ${
                              isDark ? "text-dsecondary" : "text-lprimary"
                            }`}
                          >
                            I attended the Diploma in Web Development course at
                            YMU and am still trying to get the UK recognized
                            Diploma certificate.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade " id="exp">
                  <div className="row my-4 ">
                    <div className="col-lg-12 menu-item">
                      <div className="work">
                        <div className="work my-4">
                          <h3>
                            <BiSolidCategoryAlt />

                            <span className="mx-1">
                              Ever Flow River Group Public Company Limited
                            </span>
                          </h3>
                          <span
                            className={`year mx-4 py-1 px-3 rounded-1 d-block my-1 ${
                              isDark ? "dyear" : "lyear"
                            }`}
                          >
                            2021-now
                          </span>
                          <p
                            className={`px-4 py-2 ${
                              isDark ? "text-dsecondary" : "text-lprimary"
                            }`}
                          >
                            I am in EFR Comapany from 2021 till now working as a
                            Web Developer. In EFR, I developed 12 company
                            profile websites, internal meeting room booking
                            system, employee address book system, internal
                            learning platform system by using tools and services
                            needed. And I have strong experience in web hosting
                            servers such as AWS , Digital Ocean ubuntu server ,
                            and share hosting and also space buckets for content
                            delivery networks (CDN). Besides, I aslo have the
                            knowledges of Microsoft Email Services.
                          </p>
                        </div>
                        <div className="work my-4">
                          <h3>
                            <BiSolidCategoryAlt />

                            <span className="mx-1">Freelance</span>
                          </h3>
                          <span
                            className={`year mx-4 py-1 px-3 rounded-1 d-block my-1 ${
                              isDark ? "dyear" : "lyear"
                            }`}
                          >
                            2022-now
                          </span>
                          <p
                            className={`px-4 py-2 ${
                              isDark ? "text-dsecondary" : "text-lprimary"
                            }`}
                          >
                            I have been a freelancer since 2022. As a special
                            freelance experience, I also designed the website
                            for server automations by using Cpanel&apos;
                            WHMCompleteSolution (Web Host Manager Complete
                            Solution).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade " id="skill">
                  <div className="my-4">
                    <p className="whatexp"> What I experts? </p>
                  </div>

                  <div className="row gy-5">
                    <div className="col-lg-12 menu-item">
                      <div className="languages">
                        <div className="title">
                          <h4
                            className={`mb-3 ${
                              isDark ? "text-dprimary" : "text-lprimary"
                            }`}
                          >
                            <FaLaptopCode />
                            Languages & Frameworks
                          </h4>
                        </div>

                        <div className="row my-3">
                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={HTML}
                              alt=""
                              width="60%"
                              className="d-block mx-auto"
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              HTML
                            </p>
                          </div>

                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={Css}
                              alt=""
                              width="60%"
                              className="d-block mx-auto"
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              CSS
                            </p>
                          </div>

                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={Tailwind}
                              alt=""
                              width="60%"
                              className="d-block mx-auto"
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              Tailwind
                            </p>
                          </div>
                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={JS}
                              alt=""
                              width="60%"
                              className="d-block mx-auto"
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              Javascript
                            </p>
                          </div>

                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={Bootstrap}
                              alt=""
                              width="60%"
                              className="d-block mx-auto"
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              Bootstrap
                            </p>
                          </div>

                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={PHP}
                              alt=""
                              width="60%"
                              className="d-block mx-auto"
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              PHP
                            </p>
                          </div>

                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={Laravel}
                              alt=""
                              width="60%"
                              className="d-block mx-auto"
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              Laravel
                            </p>
                          </div>
                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={React}
                              alt=""
                              width="60%"
                              className="d-block mx-auto"
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              React
                            </p>
                          </div>
                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={Redux}
                              alt=""
                              width="60%"
                              className="d-block mx-auto"
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              Redux
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="tools my-4">
                        <div className="title">
                          <h4
                            className={`mb-3 ${
                              isDark ? "text-dprimary" : "text-lprimary"
                            }`}
                          >
                            <BsTools />
                            Tools
                          </h4>
                        </div>
                        <div className="row my-3">
                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={Github}
                              alt=""
                              width="60%"
                              className="d-block mx-auto"
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              Github
                            </p>
                          </div>

                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={Photoshop}
                              alt=""
                              width="60%"
                              className="d-block mx-auto"
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              Adobe PS
                            </p>
                          </div>
                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={Illustrator}
                              alt=""
                              width="60%"
                              className="d-block mx-auto"
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              Adobe AI
                            </p>
                          </div>
                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={Microsoft}
                              alt=""
                              width="55%"
                              className="d-block mx-auto my-1"
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              Microsoft
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="hosting my-4">
                        <div className="title">
                          <h4
                            className={`mb-3 ${
                              isDark ? "text-dprimary" : "text-lprimary"
                            }`}
                          >
                            <AiOutlineCloudServer />
                            Cloud & Hostings
                          </h4>
                        </div>
                        <div className="row my-3">
                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={Cpanel}
                              alt=""
                              width="100%"
                              className="d-block mx-auto"
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              Share Hosting
                            </p>
                          </div>
                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={Whmcs}
                              alt=""
                              width="55%"
                              className="d-block mx-auto pt-3"
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              WHMCS
                            </p>
                          </div>
                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={Aws}
                              alt=""
                              width="80%"
                              className="d-block mx-auto pt-3 "
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              AWS
                            </p>
                          </div>
                          <div
                            className={`col-lg-2 col-3 skill-item m-1 ${
                              isDark ? "skill-dbg" : "skill-bg"
                            }`}
                          >
                            <img
                              src={Digitalocean}
                              alt=""
                              width="60%"
                              className="d-block mx-auto"
                            />
                            <p
                              className={`${
                                isDark ? "text-dprimary" : "text-lprimary"
                              } text-center my-1`}
                            >
                              Digital Ocean
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
