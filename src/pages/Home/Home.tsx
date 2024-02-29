import BannerImgHome from "../../assets/images/layout/fond1.png";
import Banner from "../../components/Banner/Banner";
import "./Home.sass";

const Home = () => {
  return (
    <div className="home-container">
      <Banner img={BannerImgHome} text="Chez vous, partout et ailleurs" />
      <Banner img={BannerImgHome} text="" />
    </div>
  );
};

export default Home;
