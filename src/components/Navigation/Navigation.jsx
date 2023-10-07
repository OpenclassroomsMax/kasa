import { NavLink } from "react-router-dom";

import "../../styles/Navigation.css";

export default function Nav() {
  return (
    /* Element de navigation pour Header pour revenir sur 
    la page d'accueil et la page à propos */
    <nav className="nav-header">
      <NavLink to="/" className="nav-header_link link_focus ">
        Accueil
      </NavLink>
      <NavLink to="/about" className="nav-header_link link_focus">
        A Propos
      </NavLink>
    </nav>
  );
}
