import Nav from "../Navigation/Navigation";
import '../../styles/Header.css'

export default function Header() {
	return (
		<header className="headerWrap">
			<p className="headerWrap__fig">TestImage
			</p>
			<Nav className="nav-header" />
		</header>
	);
}