import React, { useState, useEffect } from 'react'
import './CursorLight.css'

function CurserLight() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });

    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (

    <div className='CursorLight'
      style={{
        transform: `translate(${position.x - 350}px, ${position.y - 350}px)`
      }}></div>

  )
}
export default CurserLight