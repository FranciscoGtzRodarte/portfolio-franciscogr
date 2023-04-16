import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import useLocalStorage from "use-local-storage";

export default function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "night" : "day");

  const switchTheme = () => {
    const newTheme = theme === "day" ? "night" : "day";
    setTheme(newTheme);
  };
  return (
    <div id="theme-div" data-theme={theme}>
      <Router>
        <NavTabs />
        <Routes>
          <Route path="/portfolio-franciscogr" element={<Home />} />
          <Route path="/portfolio-franciscogr/about" element={<About />} />
          <Route path="/portfolio-franciscogr/work" element={<Work />} />
          <Route path="/portfolio-franciscogr/contact" element={<Contact />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}
