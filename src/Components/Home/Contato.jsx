import React from "react";

const Contato = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Contato</h1>
      <div className="px-6 py-12 bg-gray-200">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <i className="fab fa-whatsapp text-green-500 mb-3 fa-3x"></i>
            <h3 className="font-bold mb-3">WhatsApp</h3>
            <p className="text-gray-600">
              Entre em contato conosco pelo WhatsApp clicando no botão abaixo
            </p>
            <a
              href="https://wa.me/123456789"
              className="bg-green-500 text-white py-2 px-4 rounded-full"
            >
              Clique aqui
            </a>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <i className="fas fa-phone text-orange-500 mb-3 fa-3x"></i>
            <h3 className="font-bold mb-3">Telefone</h3>
            <p className="text-gray-600">
              Entre em contato conosco pelo telefone: (123) 456-7890
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <i className="fas fa-envelope text-blue-500 mb-3 fa-3x"></i>
            <h3 className="font-bold mb-3">E-mail</h3>
            <p className="text-gray-600">
              Entre em contato conosco pelo e-mail: contato@email.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
