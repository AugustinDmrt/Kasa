import { Link } from "react-router-dom";
import Data from "../../assets/config/json/logements.json";
import BannerImgHome from "../../assets/images/layout/fond1.png";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import "./Home.sass";

const Home = () => {
  const [datas] = [Data, () => {}];

  return (
    <div className="home-container">
      <Banner img={BannerImgHome} text="Chez vous, partout et ailleurs" />
      {datas.map((data) => {
        return (
          <Link key={data.id} className="home-link" to={`/logement/${data.id}`}>
            <Card img={data.cover} title={data.title} />
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
