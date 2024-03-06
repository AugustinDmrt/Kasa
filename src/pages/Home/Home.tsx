import BannerImgHome from "../../assets/images/layout/fond1.png";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import "./Home.sass";

const Home = () => {
  return (
    <div className="home-container">
      <Banner img={BannerImgHome} text="Chez vous, partout et ailleurs" />
      <Card />
    </div>
  );
};

export default Home;
