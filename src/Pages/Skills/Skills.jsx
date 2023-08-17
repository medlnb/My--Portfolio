import { React, useEffect, useState } from 'react'
import './Skills.css'
import Skill from '../../Components/Skill/Skill.jsx'
import SkillsData from '../../Data/Skills.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropagateLoader from "react-spinners/PropagateLoader";

import { nanoid } from 'nanoid'

function Skills() {
  const [data, setData] = useState(null)
  const [isloading, setIsloading] = useState(true)
  useEffect(() => {
    SkillsData.then(
      data => {
        setData(data.map(skill => {
          return <Skill
            key={nanoid()}
            persantage={skill.persantage}
            graphColor={skill.graphColor}
            title={skill.title}
            img={skill.img} />
        }));
        setIsloading(false)
      }
    )
  }, [])

  

  useEffect(() => {
    toast("Enhance your experience by hovering over the \"Skills\"")
  }, [])
  return (
    <>
      <PropagateLoader
        color={"white"}
        loading={isloading}
        size={30}
        className='loadingg'
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div
        className='Skills'>
        {!isloading && data}
      </div>
    </>

  )
}

export default Skills