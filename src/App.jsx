import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Header/NavBar";
import IndexHome from "./Components/Home/IndexHome";

const App = () => {
  return (
    <div>
      <div className="bg-[#f4f8fa] w-[100vw] h-16 flex fixed drop-shadow-md">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<IndexHome />} />
      </Routes>
    </div>
  );
};

export default App;
