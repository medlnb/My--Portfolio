import React from "react";
import "./Project.css";

function Project(props) {
  let presentation = `\n  */
  `;
  for (let index = props.content.length - 1; index >= 0; index--) {
    presentation = "\n * " + props.content[index] + presentation;
  }

  return (
    <div
      className={
        props.index ? "project_container back_projects" : "project_container "
      }
    >
      <div
        onClick={() => {
          if (props.index == 1) props.fun();
        }}
        className="title"
      >
        <h1>{props.projectname}</h1>
        <h2>07/23</h2>
      </div>
      <div className="inside_project">
        <div>
          <p className="top_line">/**</p>
          <div className="line">
            <p>{presentation}</p>
          </div>
        </div>
        <button className="seemore">
          <a target="_blank" href={props.link}>
            {props.projectname == "My Portfolio"
              ? "resume.get()"
              : "see the project"}
          </a>
        </button>
      </div>
    </div>
  );
}

export default Project;
