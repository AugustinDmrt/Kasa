import Data from "../../assets/config/json/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import "./Logement.sass";

import { useParams } from "react-router-dom";

const Logement = () => {
  function getLogement(id: string) {
    const datas = Data.find((data) => data.id === id);

    if (datas === undefined) {
      window.location.href = "/error";
    } else {
      return Data.find((data) => data.id === id);
    }
  }

  const { id } = useParams();
  const logement = getLogement(id ?? "");

  return (
    <div className="logement-container">
      <div className="logement-carousel">
        <Slideshow pictures={logement?.pictures ?? []} />
      </div>
      <h1 className="logement-title">{logement?.title}</h1>
      <h2 className="logement-location">{logement?.location}</h2>
    </div>
  );
};
export default Logement;
