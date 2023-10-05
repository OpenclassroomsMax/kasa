import { NavLink } from "react-router-dom";
import '../../styles/Navigation.css'

export default function Nav() {
	return (
		<nav className="nav-header">
			<NavLink  to="/" className="nav-header_link link_focus ">
				Accueil
			</NavLink >
			<NavLink  to="/about" className="nav-header_link link_focus">
				A Propos
			</NavLink >
		</nav>
	);
}