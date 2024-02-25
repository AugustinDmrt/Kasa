import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import Logement from "../../pages/Logement";
import App from "../App/App";

export default function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/apropos" element={<Logement />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
