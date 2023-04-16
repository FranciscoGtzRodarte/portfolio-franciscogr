import "../../css/style.css";
import { headerGif } from "../../images";
import { project01, project02, project03, project04 } from "../../images";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import AnimationIcon from "@mui/icons-material/Animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 0.9]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 0 ? "relative" : "fixed";
  });
  return (
    <div className="bg-night">
      <motion.header style={{ opacity, scale }} ref={targetRef} className="">
        <div className="header-text">
          <h1>
            Put your user
            <br />
            experience into <span>motion</span>.
          </h1>

          <p>
            Motion Designer{" "}
            <span>
              <code>&&</code>
            </span>{" "}
            FrontEnd Developer
          </p>
          <a href="#work">
            {" "}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {" "}
              Let's go!
            </motion.button>
          </a>
        </div>
        <img
          className="interactive-animation"
          src={headerGif}
          alt="interactive animation"
        />
      </motion.header>
      <div className="contact-info social">
        <ul className="socials">
          <li>
            <a href="https://github.com/FranciscoGtzRodarte" target="_blank">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/paconga/" target="_blank">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/francisco-rodarte/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="http://franciscorodarte.com/" target="_blank">
              <AnimationIcon />
            </a>
          </li>
        </ul>
      </div>

      <div className="contact-info email">
        <ul className="e-mail">
          <li>
            <a href="mailto:francisco.gutierrezrodarte@du.edu">
              francisco.gutierrezrodarte@du.edu
            </a>
          </li>
        </ul>
      </div>
      <Work />
      <About />
      <Contact />
    </div>
  );
}
