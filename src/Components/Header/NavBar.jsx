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
    <div className="flex items-center justify-around border border-blue-600 w-full">
      <div className="">
        <img className="w-11" src={Marca} alt="" />
      </div>
      <div>
        {screenWidth > 640 ? (
          <div>
            <Link to="/Destinos">Destinos</Link>
            <Link to="/Blog">Blog</Link>
          </div>
        ) : (
          <div>
            <Button onClick={handleClick}>
              <MenuIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
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
