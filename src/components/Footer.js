import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { HashLink } from "react-router-hash-link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import AnimationIcon from "@mui/icons-material/Animation";

import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <footer className="">
      <ul className="icons">
        <li>
          <button className="whatsaap">
            <WhatsAppIcon />
            Whatsapp me
          </button>
        </li>
        <li>
          <a href="mailto:francisco.gutierrezrodarte@du.edu" target="_blank">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </li>
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
          <a href="https://www.behance.net/francisco-rodarte" target="_blank">
            <AnimationIcon />
          </a>
        </li>
      </ul>
      <p class="rights">Design and build by Francisco Rodarte</p>
    </footer>
  );
}

export default Footer;
