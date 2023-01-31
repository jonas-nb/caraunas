import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import destaque3 from "./assets/destaque3.jpg";
import destaque2 from "./assets/destaque2.jpg";
import destaque1 from "./assets/destaque1.jpg";
import { Link } from "react-router-dom";
const Destaque = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">
        Destaques
        <FaMapMarkedAlt className="m-auto" />
      </h1>
      <div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="shadow p-6 bg-white h-[28rem]">
              <img
                src={destaque1}
                alt="Piscinas Naturais do Seixas a bordo da Embarcação Pedra do
                Reino"
                className="bg-contain h-52 w-96"
              />
              <h3 className="font-bold mt-3 mb-3">
                ⛴ Piscinas Naturais do Seixas a bordo da Embarcação Pedra do
                Reino
              </h3>
              <p className="text-gray-600">
                🍢🍹A embarcação possui estrutura de bar a bordo, servindo
                Drinks, cervejas, refrigerante e outros. Serviremos também
                petiscos como Porções e espetos!
              </p>
              <Link className="btn">Saiba mais</Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="shadow p-6 bg-white h-[28rem]">
              <img src={destaque2} alt="Viagem 2" className="h-52 w-92" />
              <h3 className="font-bold mt-3 mb-3">🏖 Passeio Areia Vermelha</h3>
              <p className="text-gray-600">
                É um banco de areia arrodeado de uma barreira de arrecifes,
                localizado a 1,5 km a dentro da praia do poço, surge toda vez
                que a maré baixa.
              </p>
              <Link className="btn">Saiba mais</Link>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="shadow p-6 bg-white h-[28rem]">
              <img
                src={destaque3}
                alt="Passeio de barco para assistir ao Pôr do Sol na Praia Fluvial
                do Jacaré"
                className="w-96 h-52"
              />
              <h3 className="font-bold mt-3 mb-3">
                🌅 Passeio de barco para assistir ao Pôr do Sol na Praia Fluvial
                do Jacaré
              </h3>
              <p className="text-gray-600">
                Na Praia Fluvial do Jacaré, na foz do Rio Paraíba em Cabedelo, o
                final de tarde tem cor e trilha sonora, em um grande espetáculo
                a céu aberto: o Pôr do Sol ao som do Bolero de Ravel tocado pelo
                músico paraibano Jurandy do Sax.
              </p>
              <Link className="btn">Saiba mais</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destaque;
