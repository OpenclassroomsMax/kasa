import banner from '../../assets/Banner.svg'
import '../../styles/Banner.css'


export default function Banner() {
	return (
		<div className="banner-container">
			<img className= "banner-background" src={banner} alt="Kasa Logo" />
			<h1 className="banner-title_text">Chez vous, partout et ailleurs</h1>
		</div>
	);
}