import React from 'react'
import './Sidebar.css'


function Sidebar({ Projects, project_index, changeprojectshowed }) {

  const sidebar = Projects.map((element, index) => {
    return <li
      key={element.project_name}>
      <button
        className={index == project_index ? 'button_clicked' :'button'}
        onClick={() =>changeprojectshowed(index)}>
        {element.project_name}
        
      </button>
    </li>
  })
  return (
    <div className='sidebar_container'>
      <ul className='sidebar'>
        {sidebar}
      </ul>
    </div>
  )
}

export default Sidebar