import Header from "../../components/Header/Header";

import Footer from "../../components/Footer/Footer";
import { useFetch } from '../../utils/useFetch'


export default function Accueil() {
	
	const logements = useFetch('./datas/logements.json')
	return (
		<>
			<Header />
            <Footer />
		</>
	);
}