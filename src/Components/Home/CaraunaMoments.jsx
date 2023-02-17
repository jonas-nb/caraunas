import React, { useState, useEffect } from 'react'
import { TbAnchor } from 'react-icons/tb'
import { HiOutlineExternalLink } from 'react-icons/hi'
import img1 from '../Home/assets/Imagens_Carrousel/img1.jpg'
import img2 from '../Home/assets/Imagens_Carrousel/img2.jpg'
import img3 from '../Home/assets/Imagens_Carrousel/img3.jpg'
import img4 from '../Home/assets/Imagens_Carrousel/img4.jpg'
import { Link } from 'react-router-dom'

const CaraunaMoments = () => {
    const [currentSlide, setCurrentSlide] = useState(1)
    const images = [img1, img2, img3, img4]
    const numSlides = images.length

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide()
        }, 10000)
        return () => clearInterval(intervalId)
    })

    const nextSlide = () => {
        const next = currentSlide + 1
        setCurrentSlide(next > numSlides ? 1 : next)
    }

    const previousSlide = () => {
        const prev = currentSlide - 1
        setCurrentSlide(prev < 1 ? numSlides : prev)
    }

    return (
        <div className="w-full flex items-center flex-col bg-[#1989ac] rounded-b-md text-[#bee9e8] ">
            <div className="text-center mb-4 mt-5  ">
                <h1 className="text-2xl font-bold drop-shadow-sm text-[#bee9e8]">
                    Viva as Aventuras na Costa Paraibana com a Carauna!
                </h1>
            </div>
            <div className="relative">
                <img
                    src={images[currentSlide - 1]}
                    className="w-full transition-all duration-300 ease-in-out transform"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <button onClick={previousSlide} className="btn btn-circle">
                        ❮
                    </button>
                    <button onClick={nextSlide} className="btn btn-circle">
                        ❯
                    </button>
                </div>
            </div>
            <div className="text-center mt-4 mb-6">
                <p className="text-sm xl:text-2xl text-[#bee9e8] p-1">
                    Navegue pelas águas cristalinas e crie memórias
                    inesquecíveis com a Carauna. Reserve agora sua viagem!
                </p>
                <Link
                    to="/Destinos"
                    className="btn border-none  mt-4 bg-[#ffde25] text-[#1989ac] px-4 py-2 flex items-center w-64 m-auto drop-shadow-sm focus:outline-[#66d1f9] focus:bg-[#1b4965] focus:text-[#fff] mb-16"
                >
                    Conheça nossos destinos <HiOutlineExternalLink />
                </Link>
            </div>
        </div>
    )
}

export default CaraunaMoments
