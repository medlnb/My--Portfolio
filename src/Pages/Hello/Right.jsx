import React, { useEffect, useState } from "react";
import "./Hello.css";
import Project from "../../Components/Project/Project";
import data from "../../Data/Projects";
import PropagateLoader from "react-spinners/PropagateLoader";

function Right() {
  const [projects, setProjects] = useState(null);
  const [first, setfirst] = useState(1);

  useEffect(() => {
    data.then((Theprojects) => {
      setProjects(Theprojects);
    });
  }, []);

  if (!projects)
    return (
      <div className="right">
        <PropagateLoader color={"white"} size={30} />
      </div>
    );

  return (
    <div className="right">
      {!first && projects && (
        <Project
          index={1}
          fun={()=>setfirst((prev) => !prev)}
          projectname={projects[0].project_name}
          content={projects[0].presentation}
          link={projects[0].link}
        />
      )}
      {!first && projects && (
        <Project
          index={0}
          fun={()=>setfirst((prev) => !prev)}
          projectname={projects[1].project_name}
          content={projects[1].presentation}
          link={projects[1].link}
        />
      )}

      {first && projects && (
        <Project
          index={1}
          fun={()=>setfirst((prev) => !prev)}
          projectname={projects[1].project_name}
          content={projects[1].presentation}
          link={projects[1].link}
        />
      )}
      {first && projects && (
        <Project
          index={0}
          fun={()=>setfirst((prev) => !prev)}
          projectname={projects[0].project_name}
          content={projects[0].presentation}
          link={projects[0].link}
        />
      )}
    </div>
  );
}

export default Right;
