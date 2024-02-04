import { React, useEffect, useState } from "react";
import "./Skills.css";
import Skill from "../../Components/Skill/Skill.jsx";
import SkillsData from "../../Data/Skills.jsx";
import "react-toastify/dist/ReactToastify.css";
import PropagateLoader from "react-spinners/PropagateLoader";

import { nanoid } from "nanoid";

function Skills() {
  const [data, setData] = useState(null);

  useEffect(() => {
    SkillsData.then((data) => {
      setData(
        data.map((skill) => {
          return (
            <Skill
              key={nanoid()}
              persantage={skill.persantage}
              graphColor={skill.graphColor}
              title={skill.title}
              img={skill.img}
            />
          );
        })
      );
    });
  }, []);

  return (
    <>
      {!data ? (
        <PropagateLoader color={"white"} size={30} className="loadingg" />
      ) : (
        <div className="Skills">{data}</div>
      )}
    </>
  );
}

export default Skills;
