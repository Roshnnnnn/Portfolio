// import "./App.css";
// import {
//   createBrowserRouter,
//   // RouterProvider,
//   Route,
// } from "react-router-dom/cjs/react-router-dom";
// import About from "./components/About/About.jsx";
// import Contact from "./components/Contact/Contact.jsx";
// import SideNav from "./components/SideNav/SideNav.jsx";
// import Header from "./components/Header/Header.jsx";

// function App() {
//   return (
//     <BrowserRouter>
//       <SideNav />
//       <Routes>
//         <Route path="/" element={<Header />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from 'react'
// import Header from "./components/Header/Header.jsx";
import SideNav from "./components/SideNav/SideNav.jsx";
// import About from "./components/About/About.jsx";
const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <SideNav />
      {/* <About /> */}
    </div>
  );
};

export default App;
