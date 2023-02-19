import React from 'react'
import ConheçaDestino from './ConheçaDestino'
import MudaImagem from './MudaImagem'

const SlideContainer = () => {
    return (
        <div className="flex items-center flex-col bg-[#1989ac] rounded-b-md text-[#bee9e8] ">
            <div className="text-center mb-4 mt-5  ">
                <h1 className="text-2xl font-bold drop-shadow-sm text-[#bee9e8]">
                    Viva as Aventuras na Costa Paraibana com a Carauna!
                </h1>
            </div>
            <div className="w-full flex">
                <MudaImagem />
                <ConheçaDestino />
            </div>
        </div>
    )
}

export default SlideContainer
