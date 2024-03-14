import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Apropos from "../Apropos/Apropos";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Logement from "../Logement/Logement";
import "./Layout.sass";

function BodyContent(props: { nav: string }) {
  const nav = props.nav;
  switch (nav) {
    case "home":
      return <Home />;
    case "apropos":
      return <Apropos />;
    case "logement":
      return <Logement />;
    case "error":
      return <ErrorPage />;

    default:
      break;
  }
}

const Layout = (props: { nav: string }) => {
  return (
    <div className="pageContainer">
      <Header />
      <div className="body-container">
        <BodyContent nav={props.nav} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
