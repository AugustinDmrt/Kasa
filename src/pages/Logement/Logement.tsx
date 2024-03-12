import Data from "../../assets/config/json/logements.json";
import "./Logement.sass";

import { useParams } from "react-router-dom";

const Logement = () => {
  function getLogement(id: string) {
    return Data.find((data) => data.id === id);
  }
  const { id } = useParams();
  const logement = getLogement(id ?? "");
  console.log(logement);

  return (
    <div>
      <h1>{id}</h1>
      <h2>{logement?.title}</h2>
    </div>
  );
};
export default Logement;
