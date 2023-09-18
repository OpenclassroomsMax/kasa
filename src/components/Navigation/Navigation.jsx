import { Link } from "react-router-dom";
import '../../styles/Navigation.css'

export default function Nav() {
	return (
		<nav className="nav-header">
			<Link to="/" className="nav-header_link">
				Accueil
			</Link>
			<Link to="/about" className="nav-header_link">
				A Propos
			</Link>
		</nav>
	);
}