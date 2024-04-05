import BannerImgApropos from "../../assets/images/layout/fond2.png";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import "./Apropos.sass";

export default function Apropos() {
  return (
    <div id="apropos-page">
      <Banner img={BannerImgApropos} text="" />
      <div className="apropos-collapse">
        <Collapse title="Fiabilité" data={[]} />
        <Collapse title="Respect" data={[]} />
        <Collapse title="Service" data={[]} />
        <Collapse title="Sécurité" data={[]} />
      </div>
    </div>
  );
}
