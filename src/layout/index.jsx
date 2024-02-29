import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import useTheme from "../hooks/useTheme";
import "./index.css";

export default function index() {
  let { isDark, changeTheme } = useTheme();
  return (
    <>
      <div className="light-dark-toggler" id="light-dark-toggler">
        <div className="light-dark-container">
          {/* <i className="fa-regular fa-sun "></i> */}
          <label className="switch btn-color-mode-switch">
            <input
              type="checkbox"
              name="color_mode"
              id="color_mode"
              value="1"
              onClick={() => changeTheme(isDark)}
            />
            <label
              htmlFor="color_mode"
              data-on="Blond"
              data-off="Blue"
              className="btn-color-mode-switch-inner"
            ></label>
          </label>
          {/* <i className="fa-regular fa-moon "></i> */}
        </div>
      </div>
      <Outlet />

      <Footer />
    </>
  );
}
