// App.jsx
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import SideNav from "./components/SideNav/SideNav";
import About from "./components/About/About";
import Skill from "./components/Skills/SkillPage";
import Work from "./components/Portfolio/Portfolio";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <SideNav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
