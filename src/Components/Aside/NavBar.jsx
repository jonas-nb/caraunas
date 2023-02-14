import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Marca from "../../assets/marca.png";
const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex items-center justify-around md:justify-between w-full z-50 bg-[#e8f1f5]">
      <Link to={"/"} className="">
        <img className="w-16" src={Marca} alt="" />
      </Link>
      <div>
        {screenWidth > 640 ? (
          <div className="w-48 md:w-72 flex justify-between text-2xl md:mr-96 uppercase">
            <Link class="text-[#1b4965] hover:text-[#1989ac]" to="/">
              Home
            </Link>
            <Link class="text-[#1b4965] hover:text-[#1989ac]" to="/Destinos">
              Destinos
            </Link>
            <Link class="text-[#1b4965] hover:text-[#1989ac]" to="/Blog">
              Blog
            </Link>
          </div>
        ) : (
          <div>
            <Button onClick={handleClick}>
              <MenuIcon fontSize="large" />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>Destinos</MenuItem>
              <MenuItem onClick={handleClose}>Blog</MenuItem>
              <MenuItem onClick={handleClose}>Sair</MenuItem>
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
