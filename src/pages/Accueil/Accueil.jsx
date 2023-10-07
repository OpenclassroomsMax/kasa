import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import ErrorPage from "../../components/404/404";
import Card from "../../components/Card/Card";

import { useFetch } from "../../utils/useFetch";

import "../../styles/Accueil.css";

export default function Accueil() {
  const logements = useFetch("./datas/logements.json");

  if (logements.error) {
    return <ErrorPage />;
  }

  return (
    /* Element permettant de créer la page d'accueil du site */
    <section>
      <Header />
      <Banner />
      {logements.fetchedData && (
        <div className="card-container">
          {logements.fetchedData.map((logements) => (
            <Card
              key={logements.id}
              link={`/logements/${logements.id}`}
              title={logements.title}
              cover={logements.cover}
            />
          ))}
        </div>
      )}
      <Footer />
    </section>
  );
}
