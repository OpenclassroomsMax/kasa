import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import Ratio from "../../components/Ratio/Ratio";
import Callapse from "../../components/Callapse/Callapse";
import Error from "../../pages/Error/Error";

import { useFetch } from "../../utils/useFetch";
import { useParams } from "react-router-dom";

import "../../styles/Logement.css";

export default function Logement() {
  const logements = useFetch("../datas/logements.json");

  const { logementID } = useParams();

  let thisLogement;
  if (logements.isLoading) {
    return <p>Loading</p>;
  }

  if (logements.fetchedData) {
    thisLogement = logements.fetchedData.find(
      (logement) => logement.id === logementID
    );
  }

  if (logements.error) {
    return <Error />;
  }
  if (!thisLogement) {
    return <Error />;
  }

  const equipementsLogement = thisLogement.equipments.map(
    (equipment, index) => {
      return <li key={index}>{equipment}</li>;
    }
  );

  return (
    /* Element permettant de créer la page du logement sélectionner du site */
    <>
      <Header />
      <Carrousel images={thisLogement.pictures} />
      <div className="logement">
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
          <div className="host-wrapper">
            <div className="host-name">{thisLogement.host.name}</div>
            <img
              className="host-picture"
              src={thisLogement.host.picture}
              alt="Host"
            />
          </div>
          <Ratio rating={thisLogement.rating} />
        </div>
      </div>
      <div className="description-equipments-wrapper">
        <Callapse title="Description" description={thisLogement.description} />
        <Callapse title="Équipements" description={equipementsLogement} />
      </div>
      <Footer />
    </>
  );
}
