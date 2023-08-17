import React, { useState, useEffect } from 'react';

const TypewriterDescription = (props) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (currentIndex < props.text.length) {
      timer = setTimeout(() => {
        setDisplayText((prevDisplayText) => prevDisplayText + props.text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, props.speed);
    }

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <p className='description'>{displayText}</p>
  );
};

export default TypewriterDescription;
