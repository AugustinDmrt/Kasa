import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../pages/Layout/Layout";

export default function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout nav="home" />} />
        <Route path="/apropos" element={<Layout nav="apropos" />} />
        <Route path="*" element={<Layout nav="error" />} />
      </Routes>
    </BrowserRouter>
  );
}
