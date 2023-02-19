import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { Link } from 'react-router-dom'
const ConheçaDestino = () => {
    return (
        <div className="text-center mt-4 mb-6">
            <p className="text-sm xl:text-2xl text-[#bee9e8] p-1">
                Navegue pelas águas cristalinas e crie memórias inesquecíveis
                com a Carauna. Reserve agora sua viagem!
            </p>
            <Link
                to="/Destinos"
                className="btn border-none  mt-4 bg-[#ffde25] text-[#1989ac] px-4 py-2 flex items-center w-64 m-auto drop-shadow-sm focus:outline-[#66d1f9] focus:bg-[#1b4965] focus:text-[#fff] mb-16"
            >
                Conheça nossos destinos <HiOutlineExternalLink />
            </Link>
        </div>
    )
}

export default ConheçaDestino
