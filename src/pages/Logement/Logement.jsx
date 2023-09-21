import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import Ratio from "../../components/Ratio/Ratio";
import Callapse from "../../components/Callapse/Callapse";

import { useFetch } from '../../utils/useFetch'
import { useParams } from 'react-router-dom'

export default function Logement() {

	const logements = useFetch('./datas/logements.json')

	const { logementID } = useParams()

	let thisLogement
	
	if (logements.fetchedData) {
		thisLogement = logements.fetchedData.find((logement) => logement.id === logementID)
		
	}
	/*
	const [location, setLocation] = useState({tags:[], equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}});

    let { id } = useParams();

    useEffect (function (){
        fetch('/locations.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            for (let i=0; i<data.length; i++){
                if (data[i].id == id){
                    setLocation(data[i])
                }
            }
        })
    },[]);
	*/
	console.log(thisLogement.pictures)
	return (
		<>

        	<Header />
			<Carrousel images={thisLogement.pictures} />
			<div className="logement-info">
				<div className="logement_annonce-info">
					<h1 className="logement-title">{thisLogement.title}</h1>
					<p className="logement-location">{thisLogement.location}</p>
				</div>
				<div className="tag-container">
					{thisLogement.tags.map((tag, index) => (
					<Tag tagName={tag} key={`${tag}-${index}`} />
					))}
				</div>
			</div>
			<div className="host-logement-info">
				<Ratio rating={thisLogement.rating} />
				<div className="host-wrapper">
							<div className="host-name">
								{thisLogement.host.name}
							</div>
							<img
								className="host-picture"
								src={thisLogement.host.picture}
								alt="Host"
							/>
						</div>
			</div>
			<div className="description-equipments-wrapper">
					<Callapse
						title="Description"
						description={thisLogement.description}
					/>
					<Callapse
						title="Équipements"
						description={thisLogement.equipments}
					/>
				</div>

        	<Footer />

		</>
	);
}