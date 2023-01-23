import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexHeader from "./Components/Header/IndexHeader";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<IndexHeader />} />
      </Routes>
    </div>
  );
};

export default App;
