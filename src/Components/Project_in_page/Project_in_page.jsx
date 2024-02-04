import React from "react";
import "./Project_in_page.css";

function Project_in_page({ content }) {
  const utils = content.utils_data.map((language) => {
    return <li key={language}>{language}</li>;
  });
  return (
    <>
      <img
        src={content.img}
        className={content.landscape ? "img" : "img_landscape"}
      />
      <div className="info">
        img_landscape
        <h4>{content.page_shown}</h4>
        <h2>{content.project_name}</h2>
        <div className="descriptions_container">
          <div className="descriptions">
            <p>{content.description}</p>
          </div>
        </div>
        <div className="utils">{utils}</div>
      </div>
    </>
  );
}

export default Project_in_page;
