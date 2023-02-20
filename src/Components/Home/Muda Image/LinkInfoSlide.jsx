import React from 'react'
import { Link } from 'react-router-dom'
const LinkInfoSlide = () => {
    return (
        <div>
            <p className="text-center text-md xl:text-2xl text-[#bee9e8] p-1">
                Navegue pelas águas cristalinas e crie memórias inesquecíveis
                com a Carauna. Reserve agora sua viagem!
            </p>
            <Link
                to="/Destinos"
                className="btn border-none  mt-4 bg-[#ffde25] text-[#1989ac] px-4 py-2 flex items-center w-64 m-auto drop-shadow-sm focus:outline-[#66d1f9] focus:bg-[#1b4965] focus:text-[#fff] mb-16"
            >
                Visite nossas incríveis opções de destinos
            </Link>
        </div>
    )
}

export default LinkInfoSlide
