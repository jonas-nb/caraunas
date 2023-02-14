import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Aside/Footer";
import NavBar from "./Components/Aside/NavBar";
import IndexHome from "./Components/Home/IndexHome";
import Destinos from "./Components/Produtos/Destinos";

const App = () => {
  return (
    <div>
      <div className="bg-[#f4f8fa] w-[100vw] h-16 flex fixed drop-shadow-md z-50">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<IndexHome />} />
        <Route path="/Destinos" element={<Destinos />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
