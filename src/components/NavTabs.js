import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import DownloadIcon from "@mui/icons-material/Download";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Pdf from "../assets/Gutierrez-RodarteF_Resume2023.pdf";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import useLocalStorage from "use-local-storage";

function NavTabs() {
  // const [btnState, setBtnState] = useState(false);

  // function handleClick() {
  //   setBtnState((btnState) => !btnState);
  // }
  // let toggleClass = btnState ? "bg-night" : "bg-day";

  const [isOn, setIsOn] = useState(false);
  const [theme, setTheme] = useLocalStorage("theme" ? "night" : "day");

  const switchTheme = () => {
    setIsOn(!isOn);
    const newTheme = theme === "day" ? "night" : "day";
    setTheme(newTheme);
    document.querySelector("#theme-div").setAttribute("data-theme", newTheme);
  };

  // const setDarkMode = () => {
  //   document.querySelector("#theme-div").setAttribute("data-theme", "night");
  //   localStorage.setItem("selectedTheme", "night");
  // };

  // const setLightMode = () => {
  //   document.querySelectorbyID("#theme-div").setAttribute("data-theme", "day");
  //   localStorage.setItem("selectedTheme", "day");
  // };

  // const toggleTheme = (e) => {
  //   setIsOn(!isOn);
  //   if (e.target) setDarkMode();
  //   else setLightMode();
  // };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const svgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className="fixed-top">
      <motion.li>
        <HashLink smooth to={"/portfolio-franciscogr#top"}>
          <motion.svg
            version="1.1"
            id="Layer_1"
            viewBox="0 0 658.06 206.45"
            width="200"
            height="50"
            x="0"
            className="frank-svg"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          >
            <g>
              <motion.path
                class="st0"
                d="M139.82,62.04c-5.17,0-9.58,0.91-13.23,2.74c-3.65,1.83-6.44,4.45-8.38,7.87c-1.94,3.42-2.91,7.6-2.91,12.55
		v0.91H104.8v14.83h10.49v47.45h17.11v-47.45h13.35V86.11h-13.35v-0.91c0-2.74,0.82-4.81,2.45-6.22c1.63-1.41,4.05-2.11,7.24-2.11
		c0.61,0,1.2,0.02,1.77,0.06c0.57,0.04,1.24,0.13,2,0.29v-14.6c-0.76-0.15-1.71-0.29-2.85-0.4
		C141.88,62.09,140.81,62.04,139.82,62.04z"
              />
              <path
                class="st0"
                d="M176.15,88.22c-2.4,1.42-4.28,3.82-5.65,7.19v-9.3h-15.97v62.28h17.11v-33.54c0-4.64,1.29-8.23,3.88-10.78
		c2.58-2.55,5.97-3.82,10.15-3.82h5.36V85.42h-3.65C183.05,85.42,179.31,86.35,176.15,88.22z"
              />
              <path
                class="st0"
                d="M239.74,87.59c-4.03-1.9-8.67-2.85-13.92-2.85c-4.41,0-8.48,0.68-12.21,2.05c-3.73,1.37-6.92,3.31-9.58,5.82
		c-2.66,2.51-4.6,5.51-5.82,9.01l13.69,6.5c1.06-2.74,2.76-4.94,5.08-6.62c2.32-1.67,5-2.51,8.04-2.51c3.19,0,5.72,0.8,7.59,2.4
		c1.86,1.6,2.79,3.58,2.79,5.93v1.66l-17.22,2.78c-4.94,0.76-9.07,2.05-12.38,3.88s-5.76,4.09-7.36,6.79c-1.6,2.7-2.4,5.8-2.4,9.3
		c0,3.73,0.87,6.94,2.62,9.64c1.75,2.7,4.26,4.77,7.53,6.22c3.27,1.44,7.15,2.17,11.63,2.17c3.35,0,6.39-0.44,9.13-1.31
		c2.74-0.87,5.21-2.2,7.41-3.99c0.75-0.6,1.46-1.29,2.17-2v5.94h15.97v-41.06c0-4.49-1.12-8.42-3.37-11.81
		C246.91,92.13,243.77,89.49,239.74,87.59z M233.64,130.42c-1.18,2.09-2.83,3.75-4.96,4.96c-2.13,1.22-4.6,1.83-7.41,1.83
		c-2.13,0-3.92-0.53-5.36-1.6c-1.45-1.06-2.17-2.55-2.17-4.45c0-2.05,0.65-3.63,1.94-4.73c1.29-1.1,3.15-1.88,5.59-2.34l14.14-2.53
		v1.96C235.41,126.03,234.82,128.33,233.64,130.42z"
              />
              <path
                class="st0"
                d="M310.87,87.7c-3.54-1.98-7.66-2.97-12.38-2.97c-4.33,0-8.12,0.89-11.35,2.68c-2.63,1.45-4.66,3.56-6.1,6.3
		v-7.61h-15.97v62.28h17.11V112c0-2.43,0.47-4.52,1.43-6.27c0.95-1.75,2.3-3.12,4.05-4.11c1.75-0.99,3.73-1.48,5.93-1.48
		c2.28,0,4.28,0.5,5.99,1.48c1.71,0.99,3.04,2.36,3.99,4.11c0.95,1.75,1.43,3.84,1.43,6.27v36.39h17.11v-40.04
		c0-4.71-0.99-8.84-2.97-12.38C317.16,92.44,314.4,89.68,310.87,87.7z"
              />
              <polygon
                class="st0"
                points="392.71,86.11 371.61,86.11 350.5,108.52 350.5,62.04 333.39,62.04 333.39,148.39 350.5,148.39 
		350.5,129.32 357.38,121.83 373.2,148.39 392.6,148.39 370.12,111.2 	"
              />
            </g>
            <g>
              <motion.path
                class="st1"
                d="M483.79,87.7c-3.46-1.98-7.43-2.97-11.92-2.97c-5.1,0-9.54,1.22-13.35,3.65c-2.28,1.46-4.23,3.4-5.88,5.81
		c-1.29-2.15-3.06-3.99-5.35-5.53c-3.92-2.62-8.46-3.94-13.63-3.94c-4.87,0-9.05,1.14-12.55,3.42c-2.11,1.37-3.74,3.21-4.9,5.5
		v-7.55h-15.97v62.28h17.11V112c0-2.43,0.44-4.52,1.31-6.27c0.87-1.75,2.13-3.12,3.76-4.11c1.63-0.99,3.55-1.48,5.76-1.48
		c2.28,0,4.22,0.5,5.82,1.48c1.6,0.99,2.83,2.36,3.71,4.11c0.88,1.75,1.31,3.84,1.31,6.27v36.39h17.11V112
		c0-2.43,0.44-4.52,1.31-6.27c0.87-1.75,2.13-3.12,3.76-4.11c1.63-0.99,3.55-1.48,5.76-1.48c2.28,0,4.22,0.5,5.82,1.48
		c1.6,0.99,2.83,2.36,3.71,4.11c0.88,1.75,1.31,3.84,1.31,6.27v36.39h17.11v-40.04c0-4.71-0.99-8.84-2.97-12.38
		C489.97,92.44,487.25,89.68,483.79,87.7z"
                variants={pathVariants}
              />
              <motion.polygon
                class="st1"
                points="545.22,86.11 533.13,103.91 521.04,86.11 501.19,86.11 523.09,117.13 501.3,148.39 521.15,148.39 533.13,130.38 
		545.1,148.39 564.84,148.39 543.17,117.13 565.07,86.11 	"
                variants={pathVariants}
              />
              <motion.rect
                class="st1"
                x="581.03"
                y="131.28"
                width="17.11"
                height="17.11"
                variants={pathVariants}
              />
            </g>
          </motion.svg>
        </HashLink>
      </motion.li>
      <ul>
        <li className="nav-link">
          <HashLink smooth to={"/portfolio-franciscogr#work-section"}>
            Work
          </HashLink>
        </li>
        <li className="nav-link">
          <Link to="/portfolio-franciscogr/about">About</Link>
        </li>

        <li className="nav-link">
          <Link to="/portfolio-franciscogr/contact">Contact</Link>
        </li>

        <li>
          <a href={Pdf} className="resume" target="_blank">
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
