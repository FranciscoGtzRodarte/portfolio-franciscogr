import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

export function Project(InputProps) {
  const targetRef = useRef();
  const work = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.2], [0.4, 0.9]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 0 ? "relative" : "fixed";
  });

  return (
    <motion.div
      style={{ scale, opacity }}
      ref={targetRef}
      className="featured-work"
    >
      <h3>{InputProps.title}</h3>
      <figure>
        <a href={InputProps.deployLink} target="_blank">
          <img src={InputProps.cover} alt={InputProps.alt} />
        </a>
        <figcaption>
          <pre>{InputProps.skills}</pre>
        </figcaption>
        <div className="featured-description display-none display-sm-block">
          <ul>
            <li>
              <a href={InputProps.gitHubLink} target="_blank">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a href={InputProps.deployLink} target="_blank">
                <LaunchIcon />
              </a>
            </li>
          </ul>
          <div className="description-container">
            <p>{InputProps.description}</p>
          </div>
        </div>
      </figure>
    </motion.div>
  );
}

export function OtherProject(InputProps) {
  // const targetRef = useRef();
  // const work = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["start end", "end start"],
  // });

  // const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  // const scale = useTransform(scrollYProgress, [0.1, 0.2], [0.4, 0.9]);
  // const position = useTransform(scrollYProgress, (pos) => {
  //   return pos === 0 ? "relative" : "fixed";
  // });

  return (
    <div className="project">
      <h3>{InputProps.title}</h3>
      <p>{InputProps.description}</p>
      <code>{InputProps.skills}</code>
      <ul>
        <li>
          <a href={InputProps.gitHubLink} target="_blank">
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a href={InputProps.deployLink} target="_blank">
            <LaunchIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}
