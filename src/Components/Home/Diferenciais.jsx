import React from "react";
import { FaCheckCircle, FaClock, FaThumbsUp } from "react-icons/fa";

const Diferenciais = () => {
  return (
    <div>
      <div className="px-6 py-12 bg-[#bee9e8]">
        <h2 className="text-3xl font-bold text-center mb-6">
          Nossos Diferenciais
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <FaCheckCircle className="text-green-500 mb-3 fa-3x" />
            <h3 className="font-bold mb-3">Qualidade garantida</h3>
            <p className="text-gray-600">
              Nós fornecemos garantia de qualidade em todos os nossos serviços
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <FaClock className="text-orange-500 mb-3 fa-3x" />
            <h3 className="font-bold mb-3">Atendimento Rápido</h3>
            <p className="text-gray-600">
              Nós garantimos atendimento rápido e eficiente a todos nossos
              clientes
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <FaThumbsUp className="text-blue-500 mb-3 fa-3x" />
            <h3 className="font-bold mb-3">Satisfação garantida</h3>
            <p className="text-gray-600">
              Nós garantimos a satisfação de nossos clientes em todos os
              serviços prestados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diferenciais;
