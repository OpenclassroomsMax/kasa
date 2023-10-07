import ErrorPage from "../../components/404/404";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Error() {
  return (
    /* Element permettant de créer la page d'erreur du site */
    <>
      <Header />
      <ErrorPage />
      <Footer />
    </>
  );
}
