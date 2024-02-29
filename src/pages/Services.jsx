import Navbar from "../components/Navbar";
import "./Services.css";

import Design from "../assets/web-design.png";
import Develop from "../assets/responsive.png";
import Maintain from "../assets/coding.png";
import useTheme from "../hooks/useTheme";
export default function Services() {
  let { isDark } = useTheme();

  return (
    <>
      <div className={`section ${isDark ? "bg-dbg" : "bg-bg"}`}>
        <Navbar />
        <div className="container menu services px-4 px-lg-5 mt-2">
          <div className="services-me">
            <h2
              className={`titile ${
                isDark ? "text-dsecondary" : "text-lsecondary"
              }`}
            >
              Services Offered
            </h2>
            <p
              className={`my-3 px-2 ${
                isDark ? "text-dprimary" : "text-lprimary"
              }`}
            >
              Discover how I can transform your vision into reality with our
              full spectrum of website services, including design, development,
              and optimization. Unlock your Imagination.
            </p>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="card p-4 my-3 bg-transparent shadow-lg service-card">
                <div
                  className={` service-img mb-3  ${
                    isDark ? "skill-dbg" : "skill-bg"
                  }`}
                >
                  <img src={Design} alt="" />
                </div>
                <div
                  className={`flow-desc-title my-1 ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Web Design
                </div>
                <div
                  className={`flow-description ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Crafting visually appealing and user-friendly interfaces to
                  enhance online experiences.
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="card p-4 my-3 service-card  bg-transparent shadow-lg">
                <div
                  className={` service-img mb-3  ${
                    isDark ? "skill-dbg" : "skill-bg"
                  }`}
                >
                  <img src={Develop} alt="" />
                </div>
                <div
                  className={`flow-desc-title my-1 ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Web Development
                </div>
                <div
                  className={`flow-description ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Building robust and dynamic websites with powerful
                  functionality and seamless navigation.
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="card p-4 my-3 service-card  bg-transparent shadow-lg">
                <div
                  className={`service-img mb-3  ${
                    isDark ? "skill-dbg" : "skill-bg"
                  }`}
                >
                  <img src={Maintain} alt="" />
                </div>
                <div
                  className={`flow-desc-title my-1 ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Maintenance & Support
                </div>
                <div
                  className={`flow-description ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Ensuring website reliability, security, and up-to-date content
                  through regular updates and optimizations.
                </div>
              </div>
            </div>
          </div>
          <div className="services-me mt-4">
            <h2
              className={`titile ${
                isDark ? "text-dsecondary" : "text-lsecondary"
              }`}
            >
              Work Flow
            </h2>
            <p
              className={`my-3 px-2 ${
                isDark ? "text-dprimary" : "text-lprimary"
              }`}
            >
              Capturing your brand in unique perspective.
            </p>
          </div>

          <div className="row mt-4 py-4">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="card bg-transparent shadow-lg flow-item my-2 p-4">
                <div className="flow-title">
                  <h2
                    className={`number ${
                      isDark ? "text-dsecondary" : "text-lsecondary"
                    }`}
                  >
                    01
                  </h2>
                </div>
                <div
                  className={`flow-desc-title my-1 ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Research & Plan
                </div>
                <div
                  className={`flow-description ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Start from research to target audience and their needs. Then
                  plan components of the projects.
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="card flow-item my-2 p-4  bg-transparent shadow-lg">
                <div className="flow-title">
                  <h2
                    className={`number ${
                      isDark ? "text-dsecondary" : "text-lsecondary"
                    }`}
                  >
                    02
                  </h2>
                </div>
                <div
                  className={`flow-desc-title my-1 ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Design
                </div>
                <div
                  className={`flow-description ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Design UI to visualize the layout and structure of each page.
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="card flow-item my-2 p-4  bg-transparent shadow-lg">
                <div className="flow-title">
                  <h2
                    className={`number ${
                      isDark ? "text-dsecondary" : "text-lsecondary"
                    }`}
                  >
                    03
                  </h2>
                </div>
                <div
                  className={`flow-desc-title my-1 ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Development
                </div>
                <div
                  className={`flow-description ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Choose a suitable technology stack. Then develop the website
                  using these stack.
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="card flow-item my-2 p-4  bg-transparent shadow-lg">
                <div className="flow-title">
                  <h2
                    className={`number ${
                      isDark ? "text-dsecondary" : "text-lsecondary"
                    }`}
                  >
                    04
                  </h2>
                </div>
                <div
                  className={`flow-desc-title my-1 ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Content Creation
                </div>
                <div
                  className={`flow-description ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Write and/or gather real content for each page, including
                  text, images, videos, and other media.
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="card flow-item my-2 p-4  bg-transparent shadow-lg">
                <div className="flow-title">
                  <h2
                    className={`number ${
                      isDark ? "text-dsecondary" : "text-lsecondary"
                    }`}
                  >
                    05
                  </h2>
                </div>
                <div
                  className={`flow-desc-title my-1 ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Testing
                </div>
                <div
                  className={`flow-description ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Testing to ensure the website is intuitive and easy to
                  navigate without bugs.
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="card flow-item my-2 p-4  bg-transparent shadow-lg">
                <div className="flow-title">
                  <h2
                    className={`number ${
                      isDark ? "text-dsecondary" : "text-lsecondary"
                    }`}
                  >
                    06
                  </h2>
                </div>
                <div
                  className={`flow-desc-title my-1 ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Deploy & Deliver
                </div>
                <div
                  className={`flow-description ${
                    isDark ? "text-dprimary" : "text-lprimary"
                  }`}
                >
                  Deploy the website on the suitable hosting serves and deliver
                  to the client.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
