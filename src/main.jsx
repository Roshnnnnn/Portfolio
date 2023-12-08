import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import SideNav from "./components/SideNav/SideNav.jsx";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<SideNav />} />
      <Route path="" element={<Header />} />
      <Route path="" element={<About />} />
      <Route path="" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
