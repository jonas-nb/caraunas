import React from "react";
import CaraunaMoments from "./CaraunaMoments";
import Destaque from "./Destaque";
import Diferenciais from "./Diferenciais";
import Hero from "./Hero";

const IndexHome = () => {
  return (
    <div>
      <Hero />
      <CaraunaMoments />
      <Diferenciais />
      <Destaque />
    </div>
  );
};

export default IndexHome;
