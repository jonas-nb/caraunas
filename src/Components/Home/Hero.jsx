import React from 'react'
import './styleHero.css'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div className="meu-bg min-h-screen min-w-full flex items-center pt-16">
            <div className="w-80 sm:w-[30rem] lg:w-[40rem] lg:h-80 lg:grid lg:grid-cols-2 p-4 m-auto  rounded-md flex flex-col justify-center items-center text-[#bee9e8] bg-black/60 xl:text-2xl">
                <h1 className="text-center text-4xl lg:grid lg:col-span-2">
                    Explore as belezas naturais de João Pessoa com A Carauna
                    passeios.
                </h1>
                <h2 className="text-center pt-5 lg:relative lg:bottom-8">
                    Venha ter a experiência do melhor passeio de sua vida.
                </h2>
                <Link
                    to="/Destinos"
                    className="xl:text-xl btn border-none  mt-4 bg-[#ffde25] text-[#1989ac] px-4 py-2 flex items-center w-64 m-auto drop-shadow-sm focus:outline-[#66d1f9] focus:bg-[#1b4965] focus:text-[#fff]"
                >
                    Conheça os Destinos
                </Link>
            </div>
        </div>
    )
}

export default Hero
