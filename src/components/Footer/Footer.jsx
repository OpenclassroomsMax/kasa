import "../../styles/Footer.css";

import logo from "../../assets/LogoFooter.svg";

export default function Footer() {
  return (
    /* Element pour créer le Footer sur chaque page du site */
    <footer className="footer-container">
      <img className="footer-logo" src={logo} alt="Kasa Logo" />
      <p className="footer-container__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
