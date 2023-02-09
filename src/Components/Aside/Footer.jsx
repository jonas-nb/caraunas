import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 h-80">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="mb-6 md:mb-0 flex flex-col">
            <h3 className="font-bold">Siga-nos nas redes sociais</h3>
            <div className="mt-4 m-auto flex pl-3">
              <a href="#" className="text-white mr-6 block">
                <FaFacebookSquare size="36" />
              </a>
              <a href="#" className="text-white mr-6 block">
                <FaInstagram size="36" />
              </a>
              <a href="#" className="text-white mr-6 block">
                <FaTwitterSquare size="36" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Informações Adicionais</h3>
            <ul className="mt-4">
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Sobre a empresa
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Política de privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Termos de uso
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        A Carauna Passeios &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
