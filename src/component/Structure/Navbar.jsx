import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img src="src/assets/logo.png " alt="Logo" className="logo" />
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/favourites" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
