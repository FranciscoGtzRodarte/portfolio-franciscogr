import { Link } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
import { motion } from "framer-motion";
import useLocalStorage from "use-local-storage";

function NavTabs() {
  // const [btnState, setBtnState] = useState(false);

  // function handleClick() {
  //   setBtnState((btnState) => !btnState);
  // }
  // let toggleClass = btnState ? "bg-night" : "bg-day";
  const [theme, setTheme] = useLocalStorage("theme" ? "night" : "day");

  const switchTheme = () => {
    setIsOn(!isOn);
    const newTheme = theme === "day" ? "night" : "day";
    setTheme(newTheme);
    document.querySelector("#theme-div").setAttribute("data-theme", newTheme);
  };

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    // const newTheme = theme === "day" ? "night" : "day";
    // setTheme(newTheme);
  };
  const setDarkMode = () => {
    document.querySelector("#theme-div").setAttribute("data-theme", "night");
    localStorage.setItem("selectedTheme", "night");
  };

  const setLightMode = () => {
    document.querySelectorbyID("#theme-div").setAttribute("data-theme", "day");
    localStorage.setItem("selectedTheme", "day");
  };

  const toggleTheme = (e) => {
    setIsOn(!isOn);

    console.log(e.target.name);
    console.log(e.target);
    if (e.target) setDarkMode();
    else setLightMode();
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <nav className="fixed-top">
      <li>
        <Link to="/portfolio-react">frankmx</Link>
      </li>
      <ul>
        <li className="nav-link">
          <Link to="#work">Work</Link>
        </li>
        <li className="nav-link">
          <Link to="/portfolio-react/about">About</Link>
        </li>

        <li className="nav-link">
          <Link to="/portfolio-react/contact">Contact</Link>
        </li>
        <li>
          <a
            className="resume"
            href="assets/docs/Gutierrez-Rodarte F_Resume.pdf"
            download
          >
            resume <DownloadIcon />
          </a>
        </li>
        <li className="">
          {/* <button className={`${theme}`} onClick={switchTheme}>
            D/N
          </button> */}
          <div
            className="switch"
            data-isOn={isOn}
            name={isOn}
            onClick={switchTheme}
          >
            <DarkModeIcon className="moon" />
            <LightModeIcon className="sun" />
            <motion.div className="handle" layout transition={spring} />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
