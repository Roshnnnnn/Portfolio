import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav/SideNav.jsx";
import Header from "./components/Header/Header.jsx";

const Layout = () => {
  return (
    <>
      <SideNav />
      {/* <Header /> */}
      <Outlet />
    </>
  );
};

export default Layout;
