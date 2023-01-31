import React from "react";
import "./styleHero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="meu-bg min-h-screen min-w-full">
      <div className="w-80 p-4 m-auto mt-28 rounded-md flex flex-col justify-center items-center text-[#bee9e8] bg-black/40 ">
        <h1 className="text-center text-4xl">
          Explore as belezas naturais de João Pessoa com Carauna passeios.
        </h1>
        <h2 className="text-center pt-5">
          Venha ter a experiência do melhor passeio de sua vida.
        </h2>
        <Link className="mt-5 btn bg-[#ffde25] text-[#1b4965]">
          Conheça os Destinos
        </Link>
      </div>
    </div>
  );
};

export default Hero;
