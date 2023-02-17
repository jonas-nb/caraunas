import React from 'react'
import api from './api.json'
import { Link } from 'react-router-dom'
import image from './img.jpg'
const Catalogo = () => {
    const info = api.Produtos
    console.log(info)
    return (
        <div className="flex flex-col items-center gap-7 mt-10 pb-10 sm:grid sm:grid-cols-2 lg:grid-cols-3  sm:place-items-center">
            {info.map(({ id, destino, img, texto }) => (
                <div className="card card-compact w-56 sm:w-64 lg:w-80 bg-base-100 shadow-xl">
                    <figure>
                        <img src={image} alt={destino} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{destino}</h2>
                        <p>{texto}</p>
                        <div className=" flex flex-row justify-around">
                            <Link className="btn bg-[#1989ac] w-20 outline-none border-none drop-shadow-sm focus:outline-[#66d1f9] focus:bg-[#1b4965] focus:text-[#fff]">
                                Reserve
                            </Link>
                            <Link
                                to={`${destino}/${id}`}
                                className="btn bg-[#1989ac] w-20 outline-none border-none drop-shadow-sm focus:outline-[#66d1f9] focus:bg-[#1b4965] focus:text-[#fff]"
                            >
                                Detalhes
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Catalogo
