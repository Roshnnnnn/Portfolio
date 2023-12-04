import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";

const Layout = () => {
  return (
    <>
      <Header />
      <About />
    </>
  );
};

export default Layout;
