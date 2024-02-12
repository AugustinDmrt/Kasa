import { createRoot, ReactRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root: ReactRoot = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>{/* The rest of your app goes here */}</BrowserRouter>
);
