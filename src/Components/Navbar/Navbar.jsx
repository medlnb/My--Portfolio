import { NavLink } from "react-router-dom";
import "./Nav.css";

function Navbar() {
  return (
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
    </header>
  );
}

export default Navbar;
