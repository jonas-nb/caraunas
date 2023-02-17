import React from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa'
import destaque3 from './assets/destaque3.jpg'
import destaque2 from './assets/destaque2.jpg'
import destaque1 from './assets/destaque1.jpg'
import { Link } from 'react-router-dom'
import DestaqueCard from './DestaqueCard'

const Destaque = () => {
    console.log(destaque1)
    return (
        <div className="z-10 relative  p-3 bg-[#fff8d3] pb-20">
            <h1 className="mt-10 text-3xl font-bold text-center mb-6">
                Destaques
                <FaMapMarkedAlt className="m-auto" />
            </h1>
            <div>
                <div className="flex flex-col md:flex-row gap-3">
                    <DestaqueCard
                        image={destaque3}
                        destino="eu sou um texto triste, um texto melancólico"
                        end="/Destino"
                    />
                </div>
            </div>
        </div>
    )
}

export default Destaque
