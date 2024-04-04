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

  const getStarArray = (rating: string | undefined) => {
    const numRating = parseInt(rating ?? "0");
    const filledStars = Array(numRating).fill(true); // Étoiles remplies
    const emptyStars = Array(5 - numRating).fill(false); // Étoiles vides
    return filledStars.concat(emptyStars); // Concaténer les deux tableaux
  };

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
          {getStarArray(logement?.rating).map((filled, index) => (
            <Star
              key={index}
              size={24}
              weight="fill"
              color={filled ? "#FF6060" : "#E3E3E3"}
            />
          ))}
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
