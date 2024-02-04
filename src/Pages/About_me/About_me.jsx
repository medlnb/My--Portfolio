import React from "react";
import "./About_me.css";
import selfPic from "../../assets/selfpic.png";

function About_me() {
  return (
    <div className="aboutme_container">
      <img className="selfpic" src={selfPic} loading="lazy" />

      <div className="aboutme_right">
        <div>
          <h1>__About me</h1>
          <p>
            Hello! I'm Lanabi Mohamed, a versatile full stack developer
            proficient in front-end and back-end technologies,delivering
            scalable web applications with expertise in JavaScript/TypeScript,
            Python, React and JavaFx.<br></br>
            <br></br>
            As a front-end developer with four years of coding experience,I have
            traversed a diverse technological landscape.<br></br>
            <br></br>
            My journey began with Python, honing my problem-solving skills and
            logical thinking, then delved into C and Java, mastering the
            intricacies of object-oriented programming with java.<br></br>
            <br></br>
            Today, I find myself proficiently crafting captivating user
            interfaces using HTML, CSS, and JavaScript, with React as my primary
            framework.
            <br></br>
            <br></br>
            This enriching progression has molded me into a versatile developer
            capable of blending creativity with technical expertise, ensuring I
            deliver seamless and engaging experiences for users across the
            digital realm.<br></br>
            <br></br>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About_me;
