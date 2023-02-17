import React from 'react'
import { FaCheckCircle, FaClock, FaThumbsUp } from 'react-icons/fa'

const Diferenciais = () => {
    return (
        <div className="">
            <div className="px-6 py-12 bg-[#bee9e8]">
                <h2 className="text-3xl xl:text-5xl font-bold text-center mb-6">
                    Nossos Diferenciais
                </h2>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center flex flex-col items-center">
                        <FaCheckCircle className="text-green-500 mb-3 fa-3x xl:text-xl" />
                        <h3 className="font-bold mb-3 xl:text-xl">
                            Qualidade garantida
                        </h3>
                        <p className="text-gray-600 xl:text-xl">
                            Nós fornecemos garantia de qualidade em todos os
                            nossos serviços
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center flex flex-col items-center">
                        <FaClock className="text-orange-500 mb-3 fa-3x xl:text-xl" />
                        <h3 className="font-bold mb-3 xl:text-xl">
                            Atendimento Rápido
                        </h3>
                        <p className="text-gray-600 xl:text-xl">
                            Nós garantimos atendimento rápido e eficiente a
                            todos nossos clientes
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center flex flex-col items-center">
                        <FaThumbsUp className="text-blue-500 mb-3 fa-3x xl:text-xl" />
                        <h3 className="font-bold mb-3 xl:text-xl">
                            Satisfação garantida
                        </h3>
                        <p className="text-gray-600 xl:text-xl">
                            Nós garantimos a satisfação de nossos clientes em
                            todos os serviços prestados
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Diferenciais
