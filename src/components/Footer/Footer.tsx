import Logo from "../../assets/images/logo/Logo_Black.png";
import "./Footer.sass";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="logoFooter" src={Logo} alt="Logo Kasa" />
      <p className="textFooter">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
