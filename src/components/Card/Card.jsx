import { Link } from 'react-router-dom'

import "../../styles/Card.css"


export default function Card({link, cover, title}) {
	return (
		<div className='card'>
			<Link to={link}>
				<img className="card-image" src={cover} alt="" />
				<h2 className="card-title">{title}</h2>
			</Link>
		</div>
		
	);
}