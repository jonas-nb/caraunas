import React from 'react'
import { useParams } from 'react-router-dom'
import api from './api.json'
const Destino = () => {
    let params = useParams()
    console.log(params.slug)

    const mainInfo = api.Produtos.filter(({ id }) => id === params.slug)
    console.log(mainInfo)

    return (
        <div className="flex justify-center">
            <div className="card w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mt-10 p-8 shadow-lg">
                <h1 className="text-2xl font-bold mb-4">
                    Título do Componente
                </h1>
                <p className="mb-4">Conteúdo do componente aqui.</p>
            </div>
        </div>
    )
}

export default Destino
