import Nav from "../Navigation/Navigation";

import "../../styles/Header.css";

import logo from "../../assets/Logo.svg";

export default function Header() {
  return (
    /* Element pour créer le Header sur chaque page du site, on utilise aussi le composant Nav*/
    <header className="header-container">
      <img className="header-logo" src={logo} alt="Kasa Logo" />
      <Nav className="nav-header" />
    </header>
  );
}
