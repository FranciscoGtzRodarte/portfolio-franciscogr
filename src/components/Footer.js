import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/paconga/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/francisco-rodarte/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/francisco-rodarte" target="_blank">
            <i className="fa-brands fa-behance"></i>
          </a>
        </li>
      </ul>
      <p class="rights">Design and build by Francisco Rodarte</p>
    </footer>
  );
}

export default Footer;
