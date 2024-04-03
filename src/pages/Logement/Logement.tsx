import { Star } from "@phosphor-icons/react";
import Data from "../../assets/config/json/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import Tags from "../../components/Tags/Tags";
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
      <div className="logement-tags">
        <Tags tags={logement?.tags ?? []} />
      </div>
      <div className="logement-host">
        <div className="logement-stars">
          {Array.from({ length: parseInt(logement?.rating ?? "0") }).map(
            (_, index) => (
              <Star size={32} />
            )
          )}
        </div>
        <div className="logement-owner">
          <p className="owner-name">{logement?.host.name}</p>
          <img className="owner-picture" src={logement?.host.picture} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Logement;
