import React, { useState } from 'react';
import TypewriterDescription from './TypewriterDescription';
import './Hello.css';

function Left() {
  const [CodeValue, setCodeValue] = useState("");
  const [showDescription, setShowDescription] = useState(false);

  function handleChange(event) {
    if (CodeValue.length > 4) event.target.value = "";
    setCodeValue(event.target.value);
  }

  if (CodeValue === "whois" && !showDescription) {
    setShowDescription(true);
  }
  

  return (
    <div className='left'>
      <div>
        <h2 className='hello_'>Hello! I am</h2>
        <h1 className='name'>Lanabi Mohamed</h1>
        <h2 className='job'>full stack developer</h2>
      </div>
      <div>
        {showDescription && <TypewriterDescription text="I'm a full stack developer with a university degree in Computer Science and 4 years of experience in coding." speed={50} />}
      </div>
      <div>
        <h3 style={{ color: "gray" }}>//write the code below to continue:</h3>
        <div className='code_container'>
          <h1 className='shifr'>{">"}</h1>
          <input
            spellCheck={false}
            onChange={handleChange}
            value={CodeValue}
            className='code'
            placeholder='whois'
          />
        </div>
      </div>
    </div>
  );
}

export default Left;
