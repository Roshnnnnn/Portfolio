import SideNav from "./components/SideNav/SideNav.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <SideNav />
      <Outlet />
    </>
  );
};

export default App;
