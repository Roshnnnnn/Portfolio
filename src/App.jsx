import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import SideNav from "./components/SideNav/SideNav";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <SideNav />
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
