import { Link } from "react-router-dom";
import '../../styles/404.css'

export default function ErrorPage() {
	return (
		<div className="error-container">
			<h1 className="error-number_text">404</h1>
			<p className="error-description_text">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="error-linkhome">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
}