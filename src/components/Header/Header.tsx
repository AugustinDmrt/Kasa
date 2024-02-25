import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/Logo_Red.png";
import "./Header.sass";

const Header = () => {
  return (
    <header className="header">
      <img className="logoHeader" src={Logo} alt="Logo Kasa" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/apropos">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
