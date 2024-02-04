import { NavLink } from "react-router-dom";
import { FaFigma } from "react-icons/fa";
import "./Nav.css";

function Navbar() {
  return (
    <>
      <header className="headers">
        <nav className="navbar">
          <NavLink to="/" className="notactive_navbar_element">
            _hello
          </NavLink>
          <NavLink to="/about_me" className="notactive_navbar_element">
            _about me
          </NavLink>
          <NavLink to="/projects" className="notactive_navbar_element">
            _projects
          </NavLink>
          <NavLink to="/skills" className="notactive_navbar_element">
            _Skills
          </NavLink>
        </nav>
        <a
          target="_blank"
          href="https://www.figma.com/file/kM6G8u4jp614eaqWovQ3wS/Resume-(Copy)?type=design&node-id=0%3A1&mode=design&t=0YMghWM1ZyDr2ykN-1"
          className="resume--link"
        >
          <FaFigma /> resume.get()
        </a>
      </header>
    </>
  );
}

export default Navbar;
