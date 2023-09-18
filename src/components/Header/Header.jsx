import Nav from "../Navigation/Navigation";
import '../../styles/Header.css'
import logo from '../../assets/Logo.svg'


export default function Header() {
	return (
		/*header */
		<header className="header-container">
			<img className= "header-logo" src={logo} alt="Kasa Logo" />
			<Nav className="nav-header" />
		</header>
	);
}