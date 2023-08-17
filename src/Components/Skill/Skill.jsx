import React, { useState } from 'react';
import './Skill.css';

function Skill(props) {
  const [width, setWidth] = useState(0);

  return (
    <div
      className="skill_darkmode"
      onMouseEnter={() => setWidth(props.persantage)} 
      onMouseLeave={()=>setWidth(0)}>
      <img className="skill-logo" src={props.img} alt={`${props.title}Logo`} />
      <div className="hello" >
        <h1 className= "skill-name_darkmode" >{props.title}</h1>
        <div className="skill-lvl_darkmode">
          <div className="persontaj_darkmode"  >{width}%</div>
          <div className="graph" >
            <div
              className="graphpersontaj"
            style={{ width: `${width}%`, background: `${props.graphColor}` }}>
            
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
