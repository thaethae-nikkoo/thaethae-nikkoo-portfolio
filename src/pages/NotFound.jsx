import { Link } from "react-router-dom";
import "./NotFound.css";
export default function NotFound() {
  return (
    <>
      <div className="message-block">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="left message-icon-wrapper">
              <svg
                className="message-icon"
                viewBox="0 0 205 230"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_e)">
                  <path
                    d="M166.381 11.6288C126.705 9.86893 91.934 4.3661 8.79785 11.6288C22.1183 91.8883 20.2883 136.833 8.79785 220.027C45.257 205.504 97.6644 209.834 189.593 220.027C195.134 154.578 199.762 118.984 189.593 44.8471L166.381 11.6288Z"
                    fill="none"
                    stroke="#000"
                  />
                  <g filter="url(#filter1_d)">
                    <path
                      d="M190.059 45.9008C191.906 43.6985 173.874 8.40358 165.551 11.4206C165.551 11.4206 169.864 23.6871 166.476 37.2809C183.551 34.0426 188.211 48.1032 190.059 45.9008Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M166.209 11.8225C166.203 11.8042 166.197 11.7865 166.192 11.7691C166.946 11.6534 167.825 11.8552 168.831 12.3875C170.052 13.0339 171.391 14.1332 172.79 15.5753C175.585 18.4565 178.54 22.6191 181.19 26.9668C183.839 31.3106 186.169 35.8149 187.72 39.3642C188.496 41.1407 189.072 42.6654 189.396 43.8049C189.558 44.3767 189.652 44.8329 189.681 45.1663C189.695 45.3332 189.691 45.4523 189.68 45.5311C189.674 45.5665 189.668 45.5867 189.665 45.5961C189.643 45.6199 189.629 45.6299 189.623 45.6334C189.618 45.6366 189.617 45.6363 189.616 45.6364C189.612 45.637 189.562 45.6415 189.442 45.5821C189.187 45.4556 188.84 45.1576 188.351 44.6718C188.139 44.4604 187.906 44.2207 187.653 43.9595C186.788 43.0673 185.681 41.9252 184.294 40.8118C180.779 37.9887 175.418 35.2994 167.139 36.6575C168.659 30.0523 168.417 23.8135 167.78 19.1794C167.45 16.7746 167.012 14.7975 166.657 13.4197C166.479 12.7306 166.322 12.1911 166.209 11.8225Z"
                      stroke="#99A4AE"
                    />
                  </g>
                  <ellipse
                    cx="57.8124"
                    cy="102.794"
                    rx="8.32318"
                    ry="9.48207"
                    fill="#000"
                  />
                  <ellipse
                    cx="146.593"
                    cy="102.794"
                    rx="8.32318"
                    ry="9.48207"
                    fill="#000"
                  />
                  <path
                    d="M91.9619 141.01L112.906 132.366"
                    stroke="#000"
                    strokeWidth="2"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_e"
                    x="0.185059"
                    y="0.473145"
                    width="203.922"
                    height="229.336"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="4" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d"
                    x="162.551"
                    y="9.23779"
                    width="30.6394"
                    height="40.8984"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center ">
            <div className="right message-block__content">
              <span className="message-block__main-text">404</span>
              <p className="message-block__text">
                Oops! I can’t seem to find the page you’re looking for.
              </p>
              <a href="#" className="message-block__link" title="Go back">
                <span className="left message-block__link-icon">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.17057 1.11022L0.611483 5.88295C0.338756 6.14658 0.202393 6.50567 0.202393 6.90113C0.202393 7.29658 0.338756 7.65113 0.611483 7.91931L5.17057 12.7102C5.71148 13.2784 6.5933 13.2784 7.13421 12.7102C7.67512 12.142 7.67512 11.2239 7.13421 10.6557L4.94785 8.36476H14.8115C15.5797 8.36476 16.2024 7.71476 16.2024 6.91022C16.2024 6.10567 15.5797 5.45567 14.8115 5.45567H4.94785L7.13876 3.16476C7.67967 2.59658 7.67967 1.6784 7.13876 1.11022C6.5933 0.542037 5.71603 0.542037 5.17057 1.11022Z" />
                  </svg>
                </span>
                <Link to="/" className="left message-block__link-text">
                  Go back
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
