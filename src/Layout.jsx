import { Outlet } from "react-router-dom";
// import SideNav from "./components/SideNav/SideNav.jsx";
// import Header from "./components/Header/Header.jsx";
// import Skills from "./components/Skills/SkillPage.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Projects from "./components/Portfolio/Projects.jsx";

const Layout = () => {
  return (
    <>
      {/* <SideNav /> */}
      {/* <Header /> */}
      {/* <Skills /> */}
      {/* <Portfolio /> */}
      <Projects />
      <Outlet />
    </>
  );
};

export default Layout;
