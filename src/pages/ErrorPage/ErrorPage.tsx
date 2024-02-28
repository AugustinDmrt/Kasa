import { Link } from "react-router-dom";
import ImageError from "../../assets/images/Error/404.png";
import "./ErrorPage.sass";

export default function ErrorPage() {
  return (
    <div id="error-page">
      <img className="logoError" src={ImageError} alt="Image erreur 404" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}
