import React, { useState, useEffect } from 'react'
import './Projects.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import PropagateLoader from "react-spinners/PropagateLoader";
import Project_in_page from '../../Components/Project_in_page/Project_in_page'
import Projects_data from '../../Data/Projects'

function Projects_Page() {
  const [projects, setProjects] = useState(null)
  const [projectshowed, setprojectshowed] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    Projects_data.then(
      data => {
        setProjects(data);
        setLoading(false)
      }
    )
  }, [])

  function HandleCLick(index) {
    setprojectshowed(index)
  }
  return (
    <div className='Projects_Page'>

      <PropagateLoader
        color={"white"}
        loading={loading}
        size={30}
        className="loading"
      />

      {projects && !loading &&
        <Sidebar
          Projects={projects}
          project_index={projectshowed}
          changeprojectshowed={HandleCLick} />}
      
      {projects && !loading &&
        <Project_in_page
          content={projects[projectshowed]} />}
    </div>
  )
}

export default Projects_Page