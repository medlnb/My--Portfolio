import React, { useEffect, useState } from 'react'
import './Hello.css'
import Project from '../../Components/Project/Project'
import data from '../../Data/Projects'
import PropagateLoader from "react-spinners/PropagateLoader";

function Right() {

  const [projects, setProjects] = useState(null)
  const [loading, setLoading] = useState(true)
  const [first, setfirst] = useState(1)
  useEffect(() => {
    data.then(
      Theprojects => {
        setProjects(Theprojects);
        setLoading(false)
      }
    )
  }, [])

  function handleclick() {
    setfirst(prev => !prev)
  }
  return (
    <div className='right'>
      {
        <PropagateLoader
          color={"white"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      }
      {!first && projects && !loading &&
        <Project
          index={1}
          fun={handleclick}
          projectname={projects[0].project_name}
          content={projects[0].presentation}
          link={projects[0].link} />}
      {!first && projects && !loading &&
        <Project
          index={0}
          fun={handleclick}
          projectname={projects[1].project_name}
          content={projects[1].presentation}
        link={projects[1].link} />}

      

      {first && projects && !loading &&
        <Project index={1}
          fun={handleclick}
          projectname={projects[1].project_name}
          content={projects[1].presentation}
          link={projects[1].link} />}
      {first && projects && !loading &&
        <Project
          index={0}
          fun={handleclick}
          projectname={projects[0].project_name}
          content={projects[0].presentation}
        link={projects[0].link} />}



    </div>
  )
}

export default Right