import Footer from "../Footer/Footer.tsx";
import Header from "../Header/Header.tsx";
import ReactRouterRoutes from "../Routes/root.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <ReactRouterRoutes />
      <Footer />
    </>
  );
}

export default App;
