import React from "react";
import NavBar from "./NavBar/NavBar"

const Header = () => {
  return <>
    <h3>SPORTS COOL</h3>
    <button>NUEVO USUARIO</button>
    <button>Inicio</button>
    <NavBar /> {/* navbar será el menu desplegable con links a todas las paginas? */}
  </>;
};

export default Header;
