import BannerImgHome from "../../assets/images/layout/fond1.png";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import "./Home.sass";

const Home = () => {
  return (
    <div className="home-container">
      <Banner img={BannerImgHome} text="Chez vous, partout et ailleurs" />
      <Card
        img="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
        title="Appartement cosy"
      />
    </div>
  );
};

export default Home;
