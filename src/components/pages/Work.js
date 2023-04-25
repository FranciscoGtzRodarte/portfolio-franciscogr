import React from "react";
import {
  project0,
  project01,
  project02,
  project03,
  project04,
} from "../../images";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Project, OtherProject } from "../Project";

export default function Work() {
  const targetRef = useRef();
  const work = useRef(null);
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
      <div id="work-section" className="margin-top-work"></div>
      <motion.h2 className="padding-custom">Work in motion</motion.h2>
      <div className="text-center">
        <h4>Featured work</h4>
      </div>
      <Project
        title="The Outsiders"
        deployLink="https://outsiders.herokuapp.com/"
        cover={project0}
        alt="the outsiders ctf website cover"
        skills="React, GraphQL, Apollo, MongoDB, TailwindCSS, FramerMotion"
        gitHubLink="https://github.com/PaulGibes/CaptureTheFlag"
        description="A game of Capture the Flag can be a quick and simple turnaround or a long battle. Everything depends on the deviousness of the players. That, plus the number of teams and players, will determine the length and competitiveness of a game. "
      />
      <Project
        title="Discovering Denver"
        deployLink="https://whispering-dawn-72162.herokuapp.com/"
        cover={project01}
        alt="discover denver website cover"
        skills="javascript bootstrap mysql2 express.js sequalize handlebars"
        gitHubLink="https://github.com/miamauro/discovering-denver"
        description="Discovering Denver is a full-stack application allowing users to
                learn more about Denver hot spots. Read reviews and see what
                others have to say or post your own to share an experience."
      />
      <Project
        title="Flix and Tails"
        deployLink="https://reverofsuturb.github.io/FlixandTails/"
        cover={project02}
        alt="flix and tails website cover"
        skills="bootstrap javascript third-web-parties illustrator"
        gitHubLink="https://reverofsuturb.github.io/FlixandTails/"
        description="Out of ideas for home date night? A tool to present a user with
        new and unique ideas for dinner recipes, drinks, and movies all
        in one place. "
      />
      <Project
        title="Weather Dashboard"
        deployLink="https://franciscogtzrodarte.github.io/weather-dashboard/"
        cover={project03}
        alt="weather dashboard website cover"
        skills="bootstrap javascript third-web-parties illustrator"
        gitHubLink="https://github.com/FranciscoGtzRodarte/weather-dashboard"
        description="A weather dashboard that shows the current weather, temperature,
        wind speed and humidity percentage of a city. Besides it will
        also show a forecast of the following 5 days. "
      />
      <Project
        title="Hiking friends landingpage"
        deployLink="https://franciscogtzrodarte.github.io/mini-project-01/"
        cover={project04}
        alt="hikingp website cover"
        skills="html css javascript illustrator"
        gitHubLink="https://github.com/FranciscoGtzRodarte/mini-project-01"
        description="A digital space where you can find your perfect hiking match
        friend to make new and incredible adventures. You only need to
        input your email and our algorithms will make the rest. "
      />

      <div className="other-work">
        <h2>Other slow & steady projects</h2>
        <div className="projects-container">
          <div className="projects padding-custom">
            <OtherProject
              title="Blog app"
              deployLink="https://polar-everglades-70694.herokuapp.com/"
              skills="MVC handlebars sequelize"
              gitHubLink="https://github.com/FranciscoGtzRodarte/blog-app"
              description="A CMS-style blog site similar to a Wordpress site, where
        developers can publish their blog posts and comment on other
        developers’ posts as well. "
            />
            <OtherProject
              title="E-commerce Back-End"
              deployLink="https://github.com/FranciscoGtzRodarte/ecommerce-backend"
              skills="mysql2 sequalize express.js"
              gitHubLink="https://github.com/FranciscoGtzRodarte/ecommerce-backend"
              description="The back end for an e-commerce site that has a working
              Express.js API to use Sequelize to interact with a MySQL
              database. "
            />
            <OtherProject
              title="Employee Manager"
              deployLink="https://github.com/FranciscoGtzRodarte/employee-manager"
              skills="inquirer mysql2 node.js"
              gitHubLink="https://github.com/FranciscoGtzRodarte/employee-manager"
              description="A landingpage that contains brief information about the life of
              a student, a profile picture and a contact section."
            />
          </div>
          <div className="more-projects">
            <OtherProject
              title="Note Taker"
              deployLink="https://safe-brushlands-44229.herokuapp.com/"
              skills="express.js heroku"
              gitHubLink="https://github.com/FranciscoGtzRodarte/noteTaker-1"
              description="An application called Note Taker that can be used to write and
              save notes. This application uses an Express.js back end and
              saves and retrieves notes data from a JSON file."
            />
            <OtherProject
              title="Word Guess Game"
              deployLink="https://franciscogtzrodarte.github.io/word-guess-game/"
              skills="javascript web APIs"
              gitHubLink="https://github.com/FranciscoGtzRodarte/word-guess-game"
              description="An Oscar's awards edition word guess game. Have a countdown and
              saves your score."
            />
            <OtherProject
              title="Javascript Code Quiz"
              deployLink="https://franciscogtzrodarte.github.io/javascript-code-quiz/"
              skills="html css javascript"
              gitHubLink="https://github.com/FranciscoGtzRodarte/javascript-code-quiz"
              description="A timed coding quiz with multiple-choice questions. This app
              runs in the browser, and will feature dynamically updated HTML
              and CSS powered by JavaScript code."
            />

            {/* <div className="project">
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
            </div> */}
          </div>

          {/* <button className="show-more">Show more</button> */}
        </div>
      </div>
    </section>
  );
}
