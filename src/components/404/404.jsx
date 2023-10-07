import { Link } from "react-router-dom";

import "../../styles/404.css";

export default function ErrorPage() {
  return (
    /* Element composant la partie centrale de la page 404 avec une redirection vers l'accueil */
    <div className="error-container">
      <h1 className="error-number_text">404</h1>
      <p className="error-description_text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error-linkhome">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
