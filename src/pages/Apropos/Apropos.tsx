import BannerImgApropos from "../../assets/images/layout/fond2.png";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

export default function Apropos() {
  return (
    <div id="apropos-page">
      <Banner img={BannerImgApropos} text="" />
      <Collapse title="Fiabilité" children />
    </div>
  );
}
