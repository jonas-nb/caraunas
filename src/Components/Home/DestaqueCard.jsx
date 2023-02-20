import React from 'react'
import { Link } from 'react-router-dom'

const DestaqueCard = (props) => {
    const { imagem, descreva, destino, info, end } = props

    return (
        <div
            className="w-56 h-56 shadow drop-shadow-md bg-white  flex flex-col justify-start items-center gap-5"
            style={{
                backgroundImage: `url(${imagem})`,
                backgroundSize: 'cover',
            }}
        >
            <h3 className="font-bold">{destino}</h3>
            <Link
                to={end}
                className="btn bg-[#1989ac] w-20 outline-none border-none drop-shadow-sm focus:outline-[#66d1f9] focus:bg-[#1b4965] focus:text-[#fff]"
            >
                Saiba mais
            </Link>
        </div>
    )
}

export default DestaqueCard
