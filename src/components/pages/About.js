import React from "react";
import "../../css/style.css";
import { aboutMe, aboutMe2 } from "../../images";

export default function About() {
  return (
    <div className="bg-night">
      <section id="about" className="about ">
        <div className="about-img">
          <img src={aboutMe} alt="francisco's profile picture" />
        </div>
        <div className="about-text">
          <h2>A brief story about me</h2>
          <p>
            I am a Digital Graphic Designer with eight years of experience in
            digital content design work. I have experience working with large
            and small businesses in projects related to branding, social media
            marketing, motion graphics, web design & development, video editing
            and other technical design disciplines.
            <br />
            <br />I am passionate about ﬁnding innovative solutions to complex
            challenges, and I enjoy working closely with my clients to ensure
            that the work is of the highest quality.
            <br />
            <br />I hold a Master of Science in Motion Graphics from the
            Barcelona School of Arts and Design and a Bachelor of Science in
            Graphic Design.
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="skills">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Wordpress</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
