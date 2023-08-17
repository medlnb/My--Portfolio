import React, { useState, useRef } from 'react'
import './Footer.css'
function Footer() {
  const ref = useRef(null)
  const [currentDate] = useState(new Date())
  const date =
    `${(currentDate.getMonth() + 1).toString().padStart(2, "0") + "/"}${currentDate.getDate().toString().padStart(2, "0") + "/"}${currentDate.getFullYear()}`

  function HandleClick() {
    if (ref.current.style.display == "inline-block")
      ref.current.style.display = "none"
    else
      ref.current.style.display = "inline-block"


  }
  return (
    <footer className='footer'>
      <div className='contact'>
        <div className='mobile-footer'>
          <p className='findmein'>find me in:</p>
          <button
            onClick={HandleClick}
            className='menu'><i className="fa-solid fa-bars "></i></button>
        </div>
        <div className='links' ref={ref}>
          <a href="https://twitter.com/TheWintersolddr" target='blank'><i className="fa-brands fa-twitter"></i></a>
          <a target='blank' href="https://web.facebook.com/The.Winter.Ssoldier"><i className="fa-brands fa-facebook"></i></a>
          <a target='blank' href="https://www.instagram.com/the.winter.soldie_r/"><i className="fa-brands fa-instagram"></i></a>
          <a target='blank' href="https://github.com/medlnb"><i className="fa-brands fa-github"></i></a>
          <a target='blank' href="https://www.linkedin.com/in/mohamed-lanabi-5a977327b/"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
      <p className='todaysdate'>{date}</p>
      <p className='email'>mohamedlanabi0@gmail.com</p>
    </footer>
  )
}

export default Footer