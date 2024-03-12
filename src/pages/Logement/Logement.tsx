import { useState } from "react";
import Data from "../../assets/config/json/logements.json";
import "./Logement.sass";

import { useParams } from "react-router-dom";

const Logement = () => {
  function getLogement(id: string) {
    return Data.find((data) => data.id === id);
  }

  const { id } = useParams();
  const logement = getLogement(id ?? "");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === (logement?.pictures?.length ?? 0) - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? (logement?.pictures?.length ?? 0) - 1 : prevIndex - 1
    );
  };

  return (
    <div className="logement-container">
      <div className="logement-carousel">
        <button onClick={prevSlide}>Précédent</button>
        <img
          src={logement?.pictures[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
          className="logement-picture"
        />
        <button onClick={nextSlide}>Suivant</button>
      </div>
      <h1 className="logement-title">{logement?.title}</h1>
      <h2 className="logement-location">{logement?.location}</h2>
    </div>
  );
};
export default Logement;
