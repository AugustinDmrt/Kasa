import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";

export default function Root() {
  return (
    <Routes>
      <Route path="*" Component={Home} />
    </Routes>
  );
}
