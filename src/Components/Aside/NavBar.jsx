import { Button, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import Marca from '../../assets/marca.png'
const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div className="flex items-center justify-around md:justify-between w-full z-50 bg-[#e8f1f5]">
            <Link to={'/'} className="">
                <img className="w-16" src={Marca} alt="" />
            </Link>
            <div>
                {screenWidth >= 768 ? (
                    <div className="w-48 md:w-72  flex justify-between text-2xl md:mr-96 uppercase">
                        <Link
                            class="text-[#1b4965] hover:text-[#1989ac]"
                            to="/"
                        >
                            Home
                        </Link>
                        <Link
                            class="text-[#1b4965] hover:text-[#1989ac]"
                            to="/Destinos"
                        >
                            Destinos
                        </Link>
                        <Link
                            class="text-[#1b4965] hover:text-[#1989ac]"
                            to="/Blog"
                        >
                            Blog
                        </Link>
                    </div>
                ) : (
                    <div className="dropdown dropdown-left">
                        <label tabIndex={0} className="btn m-1">
                            <MenuIcon />
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow rounded-box w-52 h-64 flex flex-col justify-center items-center gap-5 bg-[#bee9e8]  uppercase"
                        >
                            <Link
                                className="text-[#00004f] border-b border-blue-300 focus:text-blue-700 p-2"
                                to=""
                            >
                                Home
                            </Link>
                            <Link
                                className="text-[#00004f] border-b border-blue-300 focus:text-blue-700 p-2"
                                to="/Destinos"
                            >
                                Destinos
                            </Link>
                            <Link
                                className="text-[#00004f] border-b border-blue-300 focus:text-blue-700 p-2"
                                to=""
                            >
                                Blog
                            </Link>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavBar
