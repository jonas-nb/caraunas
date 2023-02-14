import React from "react";
import Catalogo from "./Catalogo";

const Destinos = () => {
  return (
    <div className="min-h-screen bg-[#fff8d3]">
      <h1 className="pt-28 text-4xl text-center drop-shadow text-[#00004f]">
        Escolha seu Destino
      </h1>
      <Catalogo />
    </div>
  );
};

export default Destinos;
