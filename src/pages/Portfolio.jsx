import Navbar from "../components/Navbar";
import "./Portfolio.css";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";

import { useEffect, useState } from "react";

import useTheme from "../hooks/useTheme";

const cardsPerPage = 3;

export default function Portfolio() {
  // let [cards, setCards] = useState([]);

  // useEffect(() => {
  //   fetch("https://tns-nikkoo.com:3001")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return res.json();
  //     })
  //     .then((card) => {
  //       setCards(card);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       // Handle error (e.g., display a message to the user)
  //     });
  // }, []);

  let cards = [
    {
      id: 1,
      image: "portfolio-efrgroup.png",
      title: "EFR Group Company Website",
      techStack: "HTML | CSS | JS | Boostrap | Laravel ",
      sourceCodeLink: "",
      demo: "",
    },
    {
      id: 2,
      image: "portfolio-memonotepad.png",
      title: "Memory Notepad",
      techStack: "Tailwind CSS | Vite-React | Firebase ",
      sourceCodeLink:
        "https://github.com/thaethae-nikkoo/react-vite-notepad-with-firebase",
      demo: "https://memorynotepad.tns-nikkoo.com/",
    },
    {
      id: 3,
      image: "portfolio-netlink-whmcs.png",
      title: "Netlink Server Automation ",
      techStack: "Cpanel's WHMCS",
      sourceCodeLink: "",
      demo: "",
    },
    {
      id: 4,
      image: "portfolio-elibrary.png",
      title: "EFR Course Learning Platform ",
      techStack:
        "HTML | CSS | JS | Boostrap | Laravel | Digital Ocean's Space ",
      sourceCodeLink: "",
      demo: "",
    },
    {
      id: 5,
      image: "portfolio-meeting-booking.png",
      title: "Meeting Room Booking System",
      techStack:
        "HTML | CSS | Boostrap | Javascript | Laravel | Livewire Calendar",
      sourceCodeLink: "",
      demo: "",
    },
    {
      id: 6,
      image: "portfolio-thaethae.png",
      title: "Thae Nandar Soe Portfolio",
      techStack: "HTML | CSS | Boostrap | Javascript | React | Laravel",
      sourceCodeLink: "",
      demo: "",
    },
    {
      id: 7,
      image: "portfolio-netlinkresell.png",
      title: "Netlink Server Reseller Website",
      techStack: "HTML | CSS | JS | Bootstrap",
      sourceCodeLink: "",
      demo: "",
    },
    {
      id: 8,
      image: "portfolio-efrldcmdy.png",
      title: "EFR LDC Company Website",
      techStack: "HTML | CSS | Boostrap | Javascript",
      sourceCodeLink: "",
      demo: "",
    },
    {
      id: 9,
      image: "portfolio-glink.png",
      title: "EFR Glink Company Website",
      techStack: "HTML | CSS | Boostrap | Javascript",
      sourceCodeLink: "",
      demo: "",
    },
    {
      id: 10,
      image: "portfolio-unisonchoice.png",
      title: "Unison Choice Logistics Company Website",
      techStack: "HTML | Bootstrap | Javascript | PHP ",
      sourceCodeLink: "",
      demo: "",
    },
    {
      id: 11,
      image: "portfolio-addressbook.png",
      title: "EFR Addressbook Website",
      techStack: "HTML | CSS | Boostrap | Javascript | Laravel ",
      sourceCodeLink: "",
      demo: "",
    },
    {
      id: 12,
      image: "portfolio-netlink.png",
      title: "Netlink Company Website",
      techStack: "HTML | Bootstrap | Javascript | PHP",
      sourceCodeLink: "",
      demo: "",
    },
    {
      id: 13,
      image: "portfoilo-hotspot.png",
      title: "EFR Wifi Connection Template",
      techStack: "HTML | Bootstrap | Javascript",
      sourceCodeLink: "",
      demo: "",
    },
    {
      id: 14,
      image: "thlc.png",
      title: "Thunder Hawk Logistics Company Website",
      techStack: "HTML | Bootstrap | Javascript",
      sourceCodeLink: "",
      demo: "",
    },
    {
      id: 15,
      image: "portfolio-trading.png",
      title: "EFR Trading Company Website",
      techStack: "HTML | Bootstrap | Javascript",
      sourceCodeLink: "",
      demo: "",
    },
    {
      id: 16,
      image: "portfolio-infrasys.png",
      title: "Infrasys Company Website",
      techStack: "HTML | Bootstrap | Javascript | PHP",
      sourceCodeLink: "",
      demo: "",
    },
    {
      id: 17,
      image: "portfolio-echo.png",
      title: "MRTW Echo Company Website",
      techStack: "HTML | Bootstrap | Javascript",
      sourceCodeLink: "",
      demo: "",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  // Calculate index range for current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, cards.length);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let { isDark } = useTheme();
  return (
    <>
      <div className={`section ${isDark ? "bg-dbg" : "bg-bg"}`}>
        <Navbar />
        <div className="container menu portfolio px-4 px-lg-5 mt-2">
          <div className="portfolio-me">
            <h2
              className={`titile ${
                isDark ? "text-dsecondary" : "text-lsecondary"
              }`}
            >
              My Web Mastery
            </h2>
            <p
              className={`my-3 px-2 ${
                isDark ? "text-dprimary" : "text-lprimary"
              }`}
            >
              I have already done over 15 projects. So, dive into my portfolio
              filled with captivating websites, each meticulously designed and
              developed to not only meet but exceed the expectations of clients.
            </p>
          </div>

          <div className="row px-2">
            {cards.slice(startIndex, endIndex).map((card) => (
              <div
                key={card.id}
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mt-3"
              >
                <div className="card shadow-lg bg-transparent  proj">
                  <div className="proj-img">
                    <img
                      src={`/assets/portfolio/${card.image}`}
                      width="100%"
                      alt=""
                    />
                  </div>
                  <div className="proj-desc p-3">
                    <h4 className={isDark ? "text-dprimary" : "text-lprimary"}>
                      {card.title}
                    </h4>
                    <div className="tech-stack mt-3">
                      <FaCode />
                      <span
                        className={`mx-3 ${
                          isDark ? "text-dprimary" : "text-lprimary"
                        }`}
                      >
                        {card.techStack}
                      </span>
                    </div>

                    {/* <div className="d-flex justify-content-start  mb-1">
                      {card.demo && (
                        <Link
                          className="btn btn-sm "
                          to={card.demo}
                          target="_blank"
                        >

                          See Demo
                        </Link>
                      )}
                      {card.sourceCodeLink && (
                        <Link
                          className="btn btn-sm mx-2"
                          to={card.sourceCodeLink}
                          target="_blank"
                        >

                          Source Code
                        </Link>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}

            <nav>
              <ul className="pagination mt-4 mx-2 justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className={`d-flex align-items-center page-link prev-next ${
                      isDark ? "text-dprimary" : "text-lprimary"
                    }`}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    <i className="fa-solid fa-arrow-left-long"></i>
                    <span className="mx-2">Prev</span>
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i}
                    className={`page-item  ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className={`page-link border-0   ${
                        isDark
                          ? "text-dprimary bg-dbg "
                          : "bg-bg text-lprimary "
                      }`}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item  ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className={`d-flex align-items-center page-link prev-next ${
                      isDark ? "text-dprimary" : "text-lprimary"
                    }`}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    <span className="mx-2">Next</span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
