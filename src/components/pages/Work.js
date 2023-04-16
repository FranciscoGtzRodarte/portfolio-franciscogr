import React from "react";
import { project01, project02, project03, project04 } from "../../images";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Work() {
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.4, 0.9]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 0 ? "relative" : "fixed";
  });
  return (
    <section id="work" className="work">
      <div className="margin-top-work"></div>
      <motion.h2>Work in motion</motion.h2>

      <motion.div
        style={{ scale, opacity }}
        ref={targetRef}
        className="featured-work"
      >
        <h4>Featured work</h4>
        <h3>Discovering Denver</h3>
        <figure>
          <a
            href="https://whispering-dawn-72162.herokuapp.com/"
            target="_blank"
          >
            <img src={project01} alt="discover denver website cover" />
          </a>
          <figcaption>
            <pre>
              javascript bootstrap mysql2 express.js sequalize handlebars
            </pre>
          </figcaption>
          <div className="featured-description">
            <ul>
              <li>
                <a
                  href="https://github.com/miamauro/discovering-denver"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://whispering-dawn-72162.herokuapp.com/"
                  target="_blank"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
            </ul>
            <div className="description-container">
              <p>
                Discovering Denver is a full-stack application allowing users to
                learn more about Denver hot spots. Read reviews and see what
                others have to say or post your own to share an experience.
              </p>
            </div>
          </div>
        </figure>
      </motion.div>

      <div className="featured-work">
        <h3>Flix and Tails</h3>
        <figure>
          <a
            href="https://reverofsuturb.github.io/FlixandTails/"
            target="_blank"
          >
            <img src={project02} alt="flix and tails website cover" />
          </a>
          <figcaption>
            <pre>bootstrap javascript third-web-parties illustrator</pre>
          </figcaption>
          <div className="featured-description">
            <ul>
              <li>
                <a
                  href="https://github.com/reverofsuturb/FlixandTails"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://reverofsuturb.github.io/FlixandTails/"
                  target="_blank"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
            </ul>
            <div className="description-container">
              <p>
                Out of ideas for home date night? A tool to present a user with
                new and unique ideas for dinner recipes, drinks, and movies all
                in one place. 
              </p>
            </div>
          </div>
        </figure>
      </div>
      <div className="featured-work">
        <h3>Weather Dashboard</h3>
        <figure>
          <a
            href="https://franciscogtzrodarte.github.io/weather-dashboard/"
            target="_blank"
          >
            <img src={project03} alt="weather dashboard website cover" />
          </a>
          <figcaption>
            <pre>bootstrap javascript third-web-parties APIs</pre>
          </figcaption>
          <div className="featured-description">
            <ul>
              <li>
                <a
                  href="https://github.com/FranciscoGtzRodarte/weather-dashboard"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://franciscogtzrodarte.github.io/weather-dashboard/"
                  target="_blank"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
            </ul>
            <div className="description-container">
              <p>
                A weather dashboard that shows the current weather, temperature,
                wind speed and humidity percentage of a city. Besides it will
                also show a forecast of the following 5 days.
              </p>
            </div>
          </div>
        </figure>
      </div>
      <div className="featured-work">
        <h3>Hiking friends landingpage</h3>
        <figure>
          <a
            href="https://franciscogtzrodarte.github.io/mini-project-01/"
            target="_blank"
          >
            <img src={project04} alt="hikingp website cover" />
          </a>
          <figcaption>
            <pre>html css javascript illustrator</pre>
          </figcaption>
          <div className="featured-description">
            <ul>
              <li>
                <a
                  href="https://github.com/FranciscoGtzRodarte/mini-project-01"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://franciscogtzrodarte.github.io/mini-project-01/"
                  target="_blank"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
            </ul>
            <div className="description-container">
              <p>
                A digital space where you can find your perfect hiking match
                friend to make new and incredible adventures. You only need to
                input your email and our algorithms will make the rest.
              </p>
            </div>
          </div>
        </figure>
      </div>

      <div className="other-work">
        <h2>Other slow & steady projects</h2>
        <div className="projects-container">
          <div className="projects">
            <div className="project">
              <h3>Blog app</h3>
              <p>
                A CMS-style blog site similar to a Wordpress site, where
                developers can publish their blog posts and comment on other
                developers’ posts as well.
              </p>
              <code>MVC handlebars sequelize</code>
              <ul>
                <li>
                  <a
                    href="https://github.com/FranciscoGtzRodarte/blog-app"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://polar-everglades-70694.herokuapp.com/"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="project">
              <h3>E-commerce Back-End</h3>
              <p>
                The back end for an e-commerce site that has a working
                Express.js API to use Sequelize to interact with a MySQL
                database.
              </p>
              <code>mysql2 sequalize express.js</code>
              <ul>
                <li>
                  <a
                    href="https://github.com/FranciscoGtzRodarte/ecommerce-backend"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/FranciscoGtzRodarte/ecommerce-backend"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="project">
              <h3>Employee Manager</h3>
              <p>
                A landingpage that contains brief information about the life of
                a student, a profile picture and a contact section.
              </p>
              <code>inquirer mysql2 node.js</code>
              <ul>
                <li>
                  <a
                    href="https://github.com/FranciscoGtzRodarte/employee-manager"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/FranciscoGtzRodarte/employee-manager"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="more-projects">
            <div className="project">
              <h3>Note Taker</h3>
              <p>
                An application called Note Taker that can be used to write and
                save notes. This application uses an Express.js back end and
                saves and retrieves notes data from a JSON file.
              </p>
              <code>express.js heroku</code>
              <ul>
                <li>
                  <a
                    href="https://github.com/FranciscoGtzRodarte/noteTaker-1"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://safe-brushlands-44229.herokuapp.com/"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="project">
              <h3>Word Guess Game</h3>
              <p>
                An Oscar's awards edition word guess game. Have a countdown and
                saves your score.
              </p>
              <code>javascript web APIs</code>
              <ul>
                <li>
                  <a
                    href="https://github.com/FranciscoGtzRodarte/word-guess-game"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://franciscogtzrodarte.github.io/word-guess-game/"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="project">
              <h3>Javascript Code Quiz</h3>
              <p>
                A timed coding quiz with multiple-choice questions. This app
                runs in the browser, and will feature dynamically updated HTML
                and CSS powered by JavaScript code.
              </p>
              <code>html css javascript</code>
              <ul>
                <li>
                  <a
                    href="https://github.com/FranciscoGtzRodarte/javascript-code-quiz"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://franciscogtzrodarte.github.io/javascript-code-quiz/"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="project">
              <h3>Horiseon landingpage</h3>
              <p>
                A codebase that follows accessibility standards so that the site
                is optimized for search engines.
              </p>
              <code>html css semantics</code>
              <ul>
                <li>
                  <a
                    href="https://github.com/FranciscoGtzRodarte/horiseon-landingpage"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://franciscogtzrodarte.github.io/horiseon-landingpage/"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="project">
              <h3>CSS Snippet Cheat Sheet</h3>
              <p>
                In this activity, I build a webpage that holds a collection of
                CSS snippets for an easy acces to learning css rules.
              </p>
              <code>html css flexbox</code>
              <ul>
                <li>
                  <a
                    href="https://github.com/FranciscoGtzRodarte/css-snippet-cheatsheet"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://franciscogtzrodarte.github.io/css-snippet-cheatsheet/"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="project">
              <h3>Student bio</h3>
              <p>
                A landingpage that contains brief information about the life of
                a student, a profile picture and a contact section.
              </p>
              <code>html css</code>
              <ul>
                <li>
                  <a
                    href="https://github.com/FranciscoGtzRodarte/student-bio"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://franciscogtzrodarte.github.io/student-bio/"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <button className="show-more">Show more</button>
        </div>
      </div>
    </section>
  );
}
